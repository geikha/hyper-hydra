{
    const getHydra = function () {
        const whereami = window.choo?.state?.hydra
            ? "editor"
            : window.atom?.packages
                ? "atom"
                : "idk";
        switch (whereami) {
            case "editor":
                return choo.state.hydra.hydra;
            case "atom":
                return global.atom.packages.loadedPackages["atom-hydra"]
                    .mainModule.main.hydra;
            case "idk":
                let _h = undefined;
                _h = window._hydra?.regl ? window._hydra : _h;
                _h = window.hydra?.regl ? window.hydra : _h;
                _h = window.h?.regl ? window.h : _h;
                _h = window.H?.regl ? window.H : _h;
                _h = window.hy?.regl ? window.hy : _h;
                return _h;
        }
    };
    window._hydra = getHydra();
    window._hydraScope = _hydra.sandbox.makeGlobal ? window : _hydra.synth;
}

{
    function generateJumps(height, width) {
        const middleY = Math.floor(height / 2);
        const middleX = Math.floor(width / 2);

        let jumpTable = Array.from({ length: height }, () => []);

        for (let y = 0; y < height; y += 1) {
            const posY = (middleY - y).toFixed(1);
            for (let x = 0; x < width; x += 1) {
                const posX = (middleX - x).toFixed(1);
                const vec2 = "vec2(" + posX + "," + posY + ")";
                jumpTable[y].push(vec2);
            }
        }

        return jumpTable.flat();
    }

    function generateWeights(kernel, multiplier) {
        const weights = kernel.flat().map(x => String(x).includes("k") ? `(${x}) * ${multiplier.toFixed(9)}` : (x * multiplier).toFixed(9));
        const hasParameters = weights.some(x => x.includes("k"));
        weights.hasParameters = hasParameters;
        return weights;
    }

    function generateConvolutionFunction(obj, settings) {
        const name = obj.name + settings.nameSufix;
        const { kernel, multiplier = 1, compensate = false } = obj;
        const [height, width] = [kernel.length, kernel[0].length];
        const weights = generateWeights(kernel, multiplier);
        const jumps = generateJumps(height, width);
        const hasParameters = weights.hasParameters;
        const middleWeight = weights[Math.floor(weights.length / 2)];

        const { prefix, newLine, sufix } = settings;

        let code = prefix + "\n";

        weights.forEach((weight, i) => {
            const jump = jumps[i];
            if (weight == 0) return;
            const line = newLine(weight, jump);
            code += line + "\n";
        });

        code += sufix;

        const inputs = [
            { name: '_tex0', type: 'sampler2D', default: o0 },
            { name: 'jump', type: 'float', default: 1 },
            { name: 'amp', type: 'float', default: 1 }
        ];

        if (hasParameters) {
            inputs.splice(1, 0, { name: 'k', type: 'float', default: 1 });
        }

        const func = {
            name,
            type: "src",
            inputs,
            glsl: code
        };

        return func;
    }

    function generateConvolutionFunctionRegular(obj) {
        const regularSettings = {
            nameSufix: "",
            prefix: "vec3 outputColor = vec3(0.0); vec2 res = resolution.xy;",
            newLine: (weight, jump) => `outputColor += (${weight}) * texture2D(_tex0, _st + (${jump} * jump / res)).rgb;`,
            sufix: "return vec4(outputColor * amp, texture2D(_tex0, _st).a);"
        };
        return generateConvolutionFunction(obj, regularSettings);
    }

    function generateConvolutionFunctionForLuma(obj) {
        const ySettings = {
            nameSufix: "Luma",
            prefix: "float outputLuma = 0.0; vec2 res = resolution.xy;",
            newLine: (weight, jump) => `outputLuma += (${weight}) * _luminance(texture2D(_tex0, _st + (${jump} * jump / res)).rgb);`,
            sufix: "return vec4(vec3(outputLuma * amp), texture2D(_tex0, _st).a);"
        };
        return generateConvolutionFunction(obj, ySettings);
    }

    function generateConvolutionFunctionForY(obj) {
        const ySettings = {
            nameSufix: "onY",
            prefix: `
              mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722, -0.09991, -0.33609, 0.43600, 0.615, -0.5586, -0.05639);
              mat3 yuv2rgb = mat3(1.0, 0.0, 1.28033, 1.0, -0.21482, -0.38059, 1.0, 2.12798, 0.0);
              float outputY = 0.0;
              vec2 res = resolution.xy;
            `,
            newLine: (weight, jump) => `outputY += (${weight}) * (texture2D(_tex0, _st + (${jump} * jump / res)).rgb * rgb2yuv).x;`,
            sufix: `
              vec4 outputColor = texture2D(_tex0, _st);
              vec3 yuv = outputColor.rgb * rgb2yuv;
              yuv.x = outputY;
              outputColor.rgb = yuv * yuv2rgb * amp;
              return outputColor;
            `
        };
        return generateConvolutionFunction(obj, ySettings);
    }

    function generateConvolutionFunctionForUV(obj) {
        const uvSettings = {
            nameSufix: "onUV",
            prefix: `
              mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722, -0.09991, -0.33609, 0.43600, 0.615, -0.5586, -0.05639);
              mat3 yuv2rgb = mat3(1.0, 0.0, 1.28033, 1.0, -0.21482, -0.38059, 1.0, 2.12798, 0.0);
              vec2 outputUV = vec2(0.0);
              vec2 res = resolution.xy;
            `,
            newLine: (weight, jump) => `outputUV += (${weight}) * (texture2D(_tex0, _st + (${jump} * jump / res)).rgb * rgb2yuv).yz;`,
            sufix: `
              vec4 outputColor = texture2D(_tex0, _st);
              vec3 yuv = outputColor.rgb * rgb2yuv;
              yuv.yz = outputUV;
              outputColor.rgb = yuv * yuv2rgb * amp;
              return outputColor;
            `
        };
        return generateConvolutionFunction(obj, uvSettings);
    }

    function generateConvolutionFunctionForIQ(obj) {
        const iqSettings = {
            nameSufix: "onIQ",
            prefix: `
              mat3 rgb2yiq = mat3(0.299, 0.587, 0.114, 0.5959, -0.2746, -0.3213, 0.2115, -0.5227, 0.3112);
              mat3 yiq2rgb = mat3(1.0, 0.956, 0.619, 1.0, -0.272, -0.647, 1.0, -1.106, 1.703);
              vec2 outputIQ = vec2(0.0);
              vec2 res = resolution.xy;
            `,
            newLine: (weight, jump) => `outputIQ += (${weight}) * (texture2D(_tex0, _st + (${jump} * jump / res)).rgb * rgb2yiq).yz;`,
            sufix: `
              vec4 outputColor = texture2D(_tex0, _st);
              vec3 yiq = outputColor.rgb * rgb2yiq;
              yiq.yz = outputIQ;
              outputColor.rgb = yiq * yiq2rgb * amp;
              return outputColor;
            `
        };
        return generateConvolutionFunction(obj, iqSettings);
    }

    function setConvolutionFunction(definition) {
        const definitions = [
            generateConvolutionFunctionRegular(definition),
            generateConvolutionFunctionForLuma(definition),
            generateConvolutionFunctionForY(definition),
            generateConvolutionFunctionForUV(definition),
            generateConvolutionFunctionForIQ(definition)
        ]
        definitions.forEach(_hydra.synth.setFunction);
    }
    _hydraScope.setConvolutionFunction = setConvolutionFunction;

}

{
    // convolution kernel lists
    const convolutionKernels = [
        {
            name: "sharpen",
            kernel: [
                [0, "-k", 0],
                ["-k", "(4.0*k)+1.0", "-k"],
                [0, "-k", 0]
            ]
        },
        {
            name: "sharpenMore",
            kernel: [
                ["-k", "-k", "-k"],
                ["-k", "(8.0*k)+1.0", "-k"],
                ["-k", "-k", "-k"]
            ]
        },
        {
            name: "lineSharpen",
            kernel: [
                ["-k", "(2.0*k)+1.0", "-k"]
            ]
        },
        {
            name: "emboss",
            kernel: [
                ["-2.0*k", "-k", 0],
                ["-k", 1, "k"],
                [0, "k", "2.0*k"]
            ]
        },
        {
            name: "blur",
            kernel: [
                [1, 2, 1],
                [2, 4, 2],
                [1, 2, 1]
            ],
            multiplier: (1 / 16)
        },
        {
            name: "blur5",
            kernel: [
                [1, 4, 7, 4, 1],
                [4, 16, 26, 16, 4],
                [7, 26, 41, 26, 7],
                [4, 16, 26, 16, 4],
                [1, 4, 7, 4, 1]
            ],
            multiplier: (1 / 273)
        },
        {
            name: "blur7",
            kernel: [
                [0, 0, 1, 2, 1, 0, 0],
                [0, 3, 13, 22, 13, 3, 0],
                [1, 13, 59, 97, 59, 13, 1],
                [2, 22, 97, 159, 97, 22, 2],
                [1, 13, 59, 97, 59, 13, 1],
                [0, 3, 13, 22, 13, 3, 0],
                [0, 0, 1, 2, 1, 0, 0]
            ],
            multiplier: (1 / 1003)
        },
        {
            name: "boxBlur",
            kernel: [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ],
            multiplier: (1 / 9)
        },
        {
            name: "boxBlur5",
            kernel: [
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1]
            ],
            multiplier: (1 / 25)
        },
        {
            name: "horizontalBlur",
            kernel: [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            multiplier: (1 / 5)
        },
        {
            name: "verticalBlur",
            kernel: [
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0]
            ],
            multiplier: (1 / 5)
        },
        {
            name: "diagonalBlur",
            kernel: [
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0],
                [0, 1, 0, 0, 0],
                [1, 0, 0, 0, 0]
            ],
            multiplier: (1 / 5)
        },
        {
            name: "diagonalBlur2",
            kernel: [
                [1, 0, 0, 0, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, 0]
            ],
            multiplier: (1 / 5)
        },
        {
            name: "lineBlur",
            kernel: [
                [1, 2, 1]
            ],
            multiplier: (1 / 4)
        },
        {
            name: "lineBlur5",
            kernel: [
                [7, 26, 41, 26, 7]
            ],
            multiplier: (1 / 107)
        },
        {
            name: "sobelY",
            kernel: [
                [ 1,  2,  1],
                [ 0,  0,  0],
                [-1, -2, -1]
            ]
        },
        {
            name: "sobelX",
            kernel: [
                [-1, 0, 1],
                [-2, 0, 2],
                [-1, 0, 1]
            ]
        },
        {
            name: "sobelDiagonal",
            kernel: [
                [ 2,  1,  0],
                [ 1,  0, -1],
                [ 0, -1, -2]
            ]
        },
        {
            name: "sobelDiagonal2",
            kernel: [
                [ 0,  1,  2],
                [-1,  0,  1],
                [-2, -1,  0]
            ]
        },
        {
            name: "prewittY",
            kernel: [
                [ 1,  1,  1],
                [ 0,  0,  0],
                [-1, -1, -1]
            ]
        },
        {
            name: "prewittX",
            kernel: [
                [-1, 0, 1],
                [-1, 0, 1],
                [-1, 0, 1]
            ]
        },
        {
            name: "prewittDiagonal",
            kernel: [
                [ 1,  1,  0],
                [ 1,  0, -1],
                [ 0, -1, -1]
            ]
        },
        {
            name: "prewittDiagonal2",
            kernel: [
                [ 0,  1,  1],
                [-1,  0,  1],
                [-1, -1,  0]
            ]
        },
        {
            name: "edge",
            kernel: [
                [-1, -1, -1],
                [-1,  8, -1],
                [-1, -1, -1]
            ]
        }
    ]

    convolutionKernels.forEach(_hydraScope.setConvolutionFunction)
}