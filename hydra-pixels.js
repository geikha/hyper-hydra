//hydra-pixels
//read pixels from each hydra output

{
    const getHydra = function () {
        const whereami = window.location?.href?.includes("hydra.ojack.xyz")
            ? "editor"
            : window.atom?.packages
            ? "atom"
            : "idk";
        switch (whereami) {
            case "editor":
                return window.hydraSynth;
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
    const oP = _hydra.o[0].constructor.prototype;

    const regl = _hydra.o[0].regl;
    regl.attributes.preserveDrawingBuffer = true;
    oP.read = function (x = 0, y = 0, w = 1, h = 1) {
        return regl.read({
            framebuffer: this.fbos[this.pingPongIndex],
            x: x,
            y: y,
            width: w,
            height: h,
        });
    };
    oP.readAll = function () {
        const fbo = this.fbos[this.pingPongIndex];
        return regl.read({
            framebuffer: fbo,
            x: 0,
            y: 0,
            width: fbo.width,
            height: fbo.height,
        });
    };
}
