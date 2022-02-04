# hydra-extensions
---
Simple yet useful extensions for [Hydra](https://github.com/ojack/hydra).

## List of extensions

| extension            | description                            | url         |
|----------------------|----------------------------------------|-------------|
| hydra-glsl           | code glsl on the fly inside Hydra code | https://hydra-extensions.glitch.me/hydra-glsl.js |
| hydra-pixels         | read pixels from each hydra output     | https://hydra-extensions.glitch.me/hydra-pixels.js |
| hydra-blending-modes | simple blending modes to add to Hydra  | https://hydra-extensions.glitch.me/hydra-blending-modes.js |

## How to use

You'll have use [hydra's external scripts functionality](https://github.com/ojack/hydra#loading-external-scripts) as such:

```javascript
await loadScript("https://hydra-extensions.glitch.me/hydra-glsl.js")

//...code
```

## Also check:

* [`hydra-antlia`](https://github.com/ritchse/hydra-antlia) : my extension of hydra for colors, geometry and interactivity.