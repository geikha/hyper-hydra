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
    const video = document.createElement("video"); video.autoplay = true;
    const canvas = _hydra.canvas;
    const stream = canvas.captureStream();
    video.srcObject = stream;

    window.hydraPip = ()=> video.requestPictureInPicture();
    window.hydraPictureInPicture = window.hydraPip;
}
