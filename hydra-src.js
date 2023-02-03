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
                return h;
        }
    };
    window._hydra = getHydra();
}

{
    const canvas = _hydra.canvas;
    window.srcAbs = function (tex) {
        if (!tex.src) return src(tex);
        const w = () => tex.src.width;
        const h = () => tex.src.height;
        return src(tex).scale(
            1,
            () => w() / canvas.clientWidth,
            () => h() / canvas.clientHeight
        );
    };
    window.srcRel = function (tex) {
        if (!tex.src) return src(tex);
        const w = () => tex.src.width / tex.src.height;
        const h = () => tex.src.height / tex.src.width;
        const cw = () => canvas.clientWidth / canvas.clientHeight;
        const ch = () => canvas.clientHeight / canvas.clientWidth;
        return src(tex).scale(
            1,
            () => {
                _cw = cw();
                _ch = ch();
                return _cw > _ch ? w() / _cw : 1;
            },
            () => {
                _cw = cw();
                _ch = ch();
                return _ch > _cw ? h() / _ch : 1;
            }
        );
    };
}
