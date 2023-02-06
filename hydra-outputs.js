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
    const oP = _hydra.o[0].constructor.prototype;
    oP.fboSettings = Array(2).fill({
        mag: "nearest",
        min: "nearest",
        width: width,
        height: height,
        format: "rgba",
    });
    oP.setFbos = function (fbo0, fbo1) {
        var colors = fbo1 ? [fbo0, fbo1] : [fbo0, fbo0];
        this.fboSettings = colors.map((x, i) => {
            return {
                ...this.fboSettings[i],
                width: width,
                height: height,
                ...x,
            };
        });
        this.fbos = this.fboSettings.map((x) =>
            this.regl.framebuffer({
                color: this.regl.texture(x),
                depthStencil: false,
            })
        );
    };
    oP.setNearest = function () {
        this.setFbos({ mag: "nearest", min: "nearest" });
    };
    oP.setLinear = function () {
        this.setFbos({ mag: "linear", min: "linear" });
    };
    oP.setRepeat = function () {
        this.setFbos({ wrapS: "repeat", wrapT: "repeat" });
    };
    oP.setClamp = function () {
        this.setFbos({ wrapS: "clamp", wrapT: "clamp" });
    };
    oP.setMirror = function () {
        this.setFbos({ wrapS: "mirror", wrapT: "mirror" });
    };
    _hydraScope.oS = { outputs: window._hydra.o };
    _hydraScope.oS.setNearest = function () {
        this.outputs.forEach((x) => x.setNearest());
    };
    _hydraScope.oS.setLinear = function () {
        this.outputs.forEach((x) => x.setLinear());
    };
    _hydraScope.oS.setRepeat = function () {
        this.outputs.forEach((x) => x.setWrap());
    };
    _hydraScope.oS.setClamp = function () {
        this.outputs.forEach((x) => x.setClamp());
    };
    _hydraScope.oS.setMirror = function () {
        this.outputs.forEach((x) => x.setMirror());
    };
    _hydraScope.oS.setFbos = function (_x, y) {
        this.outputs.forEach((x) => x.setFbos(_x, y));
    };
}
