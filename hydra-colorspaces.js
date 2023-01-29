window.gS = osc().constructor.prototype;

gS.rgba = gS.color;
gS.rgb = gS.color;

window.hcs = {};

hcs.colorscapes = [
  {
    name: "cmyk",
    elems: ["c", "m", "y", "k"],
    to: `
            k = 1.0-max(_r,max(_g,_b));
            c = (1.0-_r-k) / (1.0-k);
            m = (1.0-_g-k) / (1.0-k);
            y = (1.0-_b-k) / (1.0-k);
        `,
    from: `
            _r = (1.0-c)*(1.0-k);
            _g = (1.0-m)*(1.0-k);
            _b = (1.0-y)*(1.0-k);
        `,
  },
  {
    name: "hsv",
    elems: ["h", "s", "v"],
    to: `
        vec3 _hsv = _rgbToHsv(vec3(_r,_g,_b));
        h = _hsv.x; s = _hsv.y; v = _hsv.z;
    `,
    from: `
        vec3 _rgb = _hsvToRgb(vec3(h,s,v));
        _r = _rgb.r; _g = _rgb.g; _b = _rgb.b;
    `,
  },
  {
    name: 'hsl',
    elems: ["h", "s", "l"],
    to: `
        float cMin = min( _r, min( _g, _b ) );
        float cMax = max( _r, max( _g, _b ) );
        l = ( cMax + cMin ) / 2.0;
        if ( cMax > cMin ) {
            float cDelta = cMax - cMin;
            s = l < .0 ? cDelta / ( cMax + cMin ) : cDelta / ( 2.0 - ( cMax + cMin ) );
            if ( _r == cMax ) { h = ( _g - _b ) / cDelta;
            } else if ( _g == cMax ) { h = 2.0 + ( _b - _r ) / cDelta;
            } else { h = 4.0 + ( _r - _g ) / cDelta; }
            if (h < 0.0) { h += 6.0; }
            h = h / 6.0;
        }
    `,
    from: `
        vec3 _rgb = clamp( abs(mod(h*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );
        _rgb = l + s * (_rgb-0.5)*(1.0-abs(2.0*l-1.0));
        _r = _rgb.r; _g = _rgb.g; _b = _rgb.b;
    `
  },
  {
    name: 'yuv',
    elems: ['y','u','v'],
    to: `
        mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722, -0.09991, -0.33609, 0.43600, 0.615, -0.5586, -0.05639);
        vec3 _yuv = vec3(_r,_g,_b) * rgb2yuv;
        y = _yuv.x; u = _yuv.y; v = _yuv.z;
    `,
    from: `
        mat3 yuv2rgb = mat3(1.0, 0.0, 1.28033, 1.0, -0.21482, -0.38059, 1.0, 2.12798, 0.0);
        vec3 _rgb = vec3(y,u,v) * yuv2rgb;
        _r = _rgb.r; _g = _rgb.g; _b = _rgb.b;
    `
  },
  {
    name: 'yiq',
    elems: ['y','i','q'],
    to: `
        mat3 rgb2yiq = mat3(0.299, 0.587, 0.114, 0.5959, -0.2746, -0.3213, 0.2115, -0.5227, 0.3112);
        vec3 _yiq = vec3(_r,_g,_b) * rgb2yiq;
        y = _yiq.x; i = _yiq.y; q = _yiq.z;
    `,
    from: `
        mat3 yiq2rgb = mat3(1.0, 0.956, 0.619, 1.0, -0.272, -0.647, 1.0, -1.106, 1.703);
        vec3 _rgb = vec3(y,i,q) * yiq2rgb;
        _r = _rgb.r; _g = _rgb.g; _b = _rgb.b;
    `
  }
];

hcs.generateColorFunction = function (colorspace) {
  const name = colorspace.name;
  const type = "color";
  let inputs = colorspace.elems.concat("alpha");
  inputs = inputs.map((el) => ({
    type: "float",
    name: "in_" + el,
    default: 1,
  }));
  const declarations = colorspace.elems
    .map((el) => "float " + el + ";\n")
    .join("");
  const multiplications = colorspace.elems
    .map((el) => el + " *= in_" + el + ";\n")
    .join("");
  const glsl =
    "float _r = _c0.r; float _g = _c0.g; float _b = _c0.b; float _a = _c0.a;" +
    declarations +
    colorspace.to +
    multiplications +
    colorspace.from +
    "_a *= in_alpha;" +
    "return vec4(_r,_g,_b,_a);";
  return { name: name, type: type, inputs: inputs, glsl: glsl };
};

hcs.generateColorOffsetFunction = function (colorspace) {
  const name = colorspace.name + "_";
  const type = "color";
  let inputs = colorspace.elems.concat("alpha");
  inputs = inputs.map((el) => ({
    type: "float",
    name: "in_" + el,
    default: 1,
  }));
  const declarations = colorspace.elems
    .map((el) => "float " + el + ";\n")
    .join("");
  const multiplications = colorspace.elems
    .map((el) => el + " += in_" + el + ";\n")
    .join("");
  const glsl =
    "float _r = _c0.r; float _g = _c0.g; float _b = _c0.b; float _a = _c0.a;" +
    declarations +
    colorspace.to +
    multiplications +
    colorspace.from +
    "_a *= in_alpha;" +
    "return vec4(_r,_g,_b,_a);";
  return { name: name, type: type, inputs: inputs, glsl: glsl };
};

hcs.generateSolidFunction = function (colorspace) {
  const name = colorspace.name;
  const type = "src";
  let inputs = colorspace.elems.concat("alpha");
  inputs = inputs.map((el) => ({
    type: "float",
    name: "in_" + el,
    default: 0,
  }));
  const declarations = colorspace.elems
    .map((el) => "float " + el + ";\n")
    .join("");
  const assignments = colorspace.elems
    .map((el) => el + " = in_" + el + ";\n")
    .join("");
  const glsl =
    "float _r; float _g; float _b; float _a;" +
    declarations +
    assignments +
    colorspace.from +
    "return vec4(_r,_g,_b,_a);";
  return { name: name, type: type, inputs: inputs, glsl: glsl };
};

hcs.generateElementFunctions = function (colorspace) {
    return colorspace.elems.map((el) => {
        const name = colorspace.name + "_" + el;
        const type = "color";
        const inputs = [];
        const declarations = colorspace.elems
            .map((_el) => "float " + _el + ";\n")
            .join("");
        const glsl =
            "float _r = _c0.r; float _g = _c0.g; float _b = _c0.b; float _a = _c0.a;" 
        +   declarations
        + colorspace.to
        + "return vec4(vec3(" + el + "),1.0);"
        return { name: name, type: type, inputs: inputs, glsl: glsl };
    })
}

hcs.update = function () {
  hcs.colorscapes.map(hcs.generateColorFunction).forEach((x) => setFunction(x));
  hcs.colorscapes
    .map(hcs.generateColorOffsetFunction)
    .forEach((x) => setFunction(x));
  hcs.colorscapes.map(hcs.generateSolidFunction).forEach((x) => setFunction(x));
  hcs.colorscapes.map(hcs.generateElementFunctions).flat(1).forEach((x) => setFunction(x));
};

hcs.update();