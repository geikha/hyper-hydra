# utility scripts

These are some scripts I've come up with to have some sort of framework to make the extensions compatible with most scenarios and between each other:

## Find the HydraRenderer object

Finds hydra and assigns it to `window._hydra`. Will also get the scope of the generator functions and assign it to `window._hydraScope` so that you can code extensions compatible with instance mode. All following scripts depend on this one to be run first.

```js
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
```

Tip: Always call `setFunction` from `_hydra.synth.setFunction` 

## Get prototypes

```js
const gS = _hydraScope.osc().constructor.prototype; // GlslSource prototype
const oP = _hydra.o[0].constructor.prototype; // Output prototype
const hS = _hydra.s[0].constructor.prototype; // HydraSource prototype
```

## Custom update chain

The following script unlinks the reference from `window.update` to `_hydra.synth.update`, replacing it with another placeholder. It then defines a `_updateChain` array of functions which will then be ran by the actual `_hydra.synth.update`. This allows you to inject new functions into the hydra tick loop via pushing to them the `_updateChain` array. Take into account other extensions might also push, so always keep track of your function's indexes in the array yourself.

```js
{
    if (!window._updateChain) {
        window.update = window.update || ((dt) => { });
        window._updateChain = [() => window["update"]()];
        _hydra.sandbox.userProps = ["speed", "bpm", "fps"];
        _hydra.synth.update = (dt) => {
            for (func of window._updateChain) {
                func(dt);
            }
        };
    }
}
```
