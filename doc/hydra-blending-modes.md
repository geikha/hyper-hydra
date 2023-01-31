# hydra-blending-modes

Very simple but useful blending modes for Hydra. They all lack an intensity argument as of now.
Taken from [hydra-blocky](https://github.com/samarthgulati/hydra-blockly/).
Specifically [this file](https://github.com/samarthgulati/hydra-blockly/blob/master/image-editing-glsl-functions.js).

See all available blending modes by evaluating:

```js
> console.log(blendmodes_list)
```

```js
{
  0: "darken",
  1: "multiply",
  2: "colorBurn",
  3: "linearBurn",
  4: "darkerColor",
  5: "lighten",
  6: "screen",
  7: "colorDodge",
  8: "linearDodge",
  9: "lighterColor",
  10: "overlay",
  11: "softLight",
  12: "hardLight",
  13: "vividLight",
  14: "linearLight",
  15: "pinLight",
  16: "hardMix",
  17: "difference",
  18: "exclusion",
  19: "subtract",
  20: "divide",
  21: "hueBlend",
  22: "colorBlend",
  23: "saturationBlend",
  24: "luminosityBlend"
}
```
