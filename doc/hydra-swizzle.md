# hydra-swizzle

This extensions replicates the [swizzling functionality from GLSL](https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)#Swizzling) in Hydra.

## Example

```js
gradient(1).rbg
	.layer(osc(30,.1,2).bggr)
	.layer(gradient().r.mask(shape(2)))
	.out()
```

## Overview

hydra-swizzle defines properties for each element in `rgba`and `xyzw`. As well for all possible combinations of `rgb`, `xyz`, `rgba` and `xyzw`. When you call only one element, It'll replicate itself to all channels except alpha. When you call 3 elements, It'll call them as expected and leave alpha as is. When you call 4 elements, they get assigned as you would expect.

```js
texture().rgg  // -> c0.rrga
texture().bgba // -> c0.bgba
texture().r    // -> c0.rrra
```
