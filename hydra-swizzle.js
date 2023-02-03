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
    window._hydraScope = _hydra.sandbox.makeGlobal ? window : _hydra;
}

{
    const gS = _hydraScope.osc().constructor.prototype;
    // https://stackoverflow.com/questions/34127294/
    function getSwizzles(coords) {
        function combinations(input, length, curstr) {
            if (curstr.length == length) return [curstr];
            var ret = [];
            for (var i = 0; i < input.length; i++) {
                ret.push.apply(
                    ret,
                    combinations(input, length, curstr + input[i])
                );
            }
            return ret;
        }

        let ret = combinations(coords, coords.length, "");
        ret.splice(ret.indexOf("input"), 1);
        return ret;
    }
    const threeComponents = [].concat(getSwizzles("rgb"), getSwizzles("xyz"));

    const fourComponents = [].concat(getSwizzles("rgba"), getSwizzles("xyzw"));

    function definePropertyFromMethod(method, newName = "") {
        newName = newName ? newName : method;
        Object.defineProperty(gS, newName, {
            configurable: true,
            get() {
                return this[method].bind(this)();
            },
        });
    }

    threeComponents.forEach((swizzle) => {
        const name = "_" + swizzle;
        _hydra.synth.setFunction({
            name,
            type: "color",
            inputs: [],
            glsl: `return _c0.${swizzle}a;`,
        });
        definePropertyFromMethod(name, swizzle);
    });
    fourComponents.forEach((swizzle) => {
        const name = "_" + swizzle;
        _hydra.synth.setFunction({
            name,
            type: "color",
            inputs: [],
            glsl: `return _c0.${swizzle};`,
        });
        definePropertyFromMethod(name, swizzle);
    });
    Array.from("rgbaxyzw").forEach((elem) => {
        const name = "_swizzle_" + elem;
        _hydra.synth.setFunction({
            name,
            type: "color",
            inputs: [],
            glsl: `return _c0.${elem + elem + elem}a;`,
        });
        definePropertyFromMethod(name, elem);
    });
}
