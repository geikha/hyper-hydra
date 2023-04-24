if (typeof exports !== 'undefined') {
    module.exports = BPM;
    module.exports.BPM = BPM;
}
function BPM() {
    this.count = 0;
    this.ts = 0;
    this.old_ts = 0;
}
BPM.prototype.tap = function () {
    this.ts = Date.now();
    if (!this.first_ts) this.first_ts = this.ts;
    var ret = {};
    // ignore the first tap
    if (this.old_ts) {
        var ms = this.ts - this.old_ts;
        var avg = 60000 * this.count / (this.ts - this.first_ts);
        ret.avg = avg;
        ret.ms = ms;
    }
    ret.count = ++this.count;
    // Store the old timestamp
    this.old_ts = this.ts;
    return ret;
};
BPM.prototype.reset = function () {
    this.count = 0;
    this.ts = 0;
    this.old_ts = 0;
    this.first_ts = 0;
};
window.BPM = BPM;

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
    const tapper = new BPM();
    let resetInterval = 0;

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.keyCode === 32) {
            clearInterval(resetInterval);
            const tap = tapper.tap();
            if (tap.count > 1) {
                _hydra.sandbox.set('bpm', Math.round(tap.avg));
            }
            resetInterval = setInterval(tapper.reset.bind(tapper), 1500);
        } else if (event.ctrlKey && event.key === ",") {
            _hydra.sandbox.set('time', 0);
        }
    });

    function setRange(f) {
        f.range = (min = 0, max = 1) => () => f() * (max - min) + min;
        return f;
    }
    function setCurve(f) {
        f.curve = (q = 1) => {
            f2 = () => q > 0 ? Math.pow(f(), q) : (1 - Math.pow(1 - f(), -q));
            f2 = setRange(f2);
            return f2;
        };
        return f;
    }
    function rampToFunction(ramp) {
        ramp = setRange(ramp);
        ramp = setCurve(ramp);
        ramp.curve = setRange(ramp.curve);
        return ramp;
    }
    
    window.beats_ = (n = 1) => rampToFunction(() => ((time * (1 / n)) % (60 / bpm)) / (60 / bpm))
    window.beats = (n = 1) => rampToFunction(() => ((60 / bpm) - ((time * (1 / n)) % (60 / bpm))) / (60 / bpm))
}

















