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

_hydraScope.canvas = window._hydra.canvas;

_hydraScope.canvas.setLinear = function () {
    this.style.imageRendering = "auto";
};
_hydraScope.canvas.setNearest = function () {
    this.style.imageRendering = "pixelated";
};
_hydraScope.canvas.setFullscreen = function (full = true) {
    const set = full ? "100%" : "";
    this.style.width = set;
    this.style.height = set;
};
_hydraScope.canvas.setAlign = function (align = "right") {
    this.parentElement.style["text-align"] = align;
};
_hydraScope.canvas.setRelativeSize = function (ratio) {
    this.style.width = "" + width * ratio + "px";
    this.style.height = "" + height * ratio + "px";
};
