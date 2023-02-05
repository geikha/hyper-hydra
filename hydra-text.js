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

_hydraScope.srcRelMask = function (tex) {
    if (!tex.hasOwnProperty("src")) return src(tex);
    const w = () =>
        tex.src?.width
            ? tex.src?.width / tex.src?.height
            : tex.src?.videoWidth
            ? tex.src?.videoWidth / tex.src?.videoHeight
            : 0;
    const h = () =>
        tex.src?.height
            ? tex.src?.height / tex.src?.width
            : tex.src?.videoHeight
            ? tex.src?.videoHeight / tex.src?.videoWidth
            : 0;
    const cw = () => _hydra.canvas.clientWidth / _hydra.canvas.clientHeight;
    const ch = () => _hydra.canvas.clientHeight / _hydra.canvas.clientWidth;
    return _hydraScope.mask(shape(4,1,0)).scale(
        1,
        () => {
            const _cw = cw();
            const _w = w();
            return _cw > _w ? _w / _cw : 1;
        },
        () => {
            const _ch = ch();
            const _h = h();
            return _ch > _h ? _h / _ch : 1;
        }
    );
};

{
    const Source = _hydra.s[0].constructor;

    function createSource() {
        const s = new Source({
            regl: _hydra.regl,
            pb: _hydra.pb,
            width: _hydra.width,
            height: _hydra.height,
        });
        return s;
    }

    window.hydraText = {
        font: "sans-serif",
        fontStyle: "normal",
        textAlign: "center",
        fillStyle: "white",
        strokeStyle: "white",
        lineWidth: 8,
    };

    const _text = function (str, _config, fill = true, stroke = false) {
        const s = createSource();
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (typeof _config == "string") _config = { font: _config };

        const config = Object.assign({}, hydraText);
        Object.assign(config, _config);
        const font = config.font;
        config.font = undefined;
        const fontStyle = config.fontStyle;
        config.fontStyle = undefined;
        config.textBaseline = "middle";

        const fontWithSize = (size) => `${fontStyle} ${size} ${font}`;

        Object.assign(ctx, config);

        canvas.width = _hydra.width;
        ctx.font = fontWithSize("1px");
        let padding = _hydra.width / 20;
        let textWidth = _hydra.width - padding;
        let fontSize = textWidth / ctx.measureText(str).width;
        canvas.height = fontSize * 1.2;
        canvas.width *= 2; canvas.height *=2; fontSize *= 2; textWidth *= 2; padding *= 2;

        config.font = fontWithSize(String(fontSize)+"px");
        Object.assign(ctx, config);

        let x = 0;
        if (ctx.textAlign == "center") x = canvas.width / 2;
        else if (ctx.textAlign == "left") x = padding / 2;
        else if (ctx.textAlign == "right") x = canvas.width - (padding / 2);

        const y = canvas.height / 2;

        if (fill) ctx.fillText(str, x, y, textWidth);
        if (stroke) ctx.strokeText(str, x, y, textWidth);

        s.init({ src: canvas }, { min: "linear", mag: "linear" });
        
        return _hydraScope.srcRelMask(s);
    };
    _hydraScope.text = function(str,config){
        return _text(str,config);
    }
    _hydraScope.strokeText = function(str,config){
        return _text(str,config,false,true);
    }
    _hydraScope.strokeFillText = function(str,config){
        return _text(str,config,true,true);
    }
}