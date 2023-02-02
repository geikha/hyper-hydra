# hydra-blend

A port of [glsl-blend](https://github.com/jamieowen/glsl-blend) to Hydra.

## Overview

This extension adds most of the blending modes that you see on raster image software to Hydra. You should use them with the following syntax: `tex.blendModeName(tex2, opacity)`, where tex and tex2 are any two Hydra textures and opacity is a number (or array or function as in regular Hydra).

Please read the [disclaimer about alpha here below](#important)

## List of blending modes

* darken
* multiply
* colorBurn
* linearBurn
* lighten
* screen
* colorDodge
* linearDodge
* overlay
* softLight
* hardLight
* vividLight
* linearLight
* pinLight
* hardMix
* difference
* exclusion
* subtract
* divide
* negation / negate
* add2 (i didn't want to replace the regular Hydra `add`)
* glow
* reflect
* phoenix

## About the alpha channel

`glsl-blend` doesn't have any functions that work with RGBA, all function work with opaque textures of RGB. After lots of playing around with Photopea I realized that what most raster image softwares do is apply the blending over premultiplied sources and then, wherever the base texture is transparent, layer over the texture to be blended, and that's how I implemented it

### Important

This extension overwrites Hydra's `layer`, `luma` and `mask` in order for them to stricly use premultiplied alpha. This means that if something doesn't look as expected, it's probably because the textures you're using aren't premultiplied and in a range from 0.0 to 1.0. `noise` will surely give you problems as it ranges from -1 to 1.

 I could've handled this inside the blending modes but I didn't want to taker over your ability to purposefully glitch stuff. If something doesn't look as you expect it to look you can try to premultiply it by doing `tex.premultiply()` alias `tex.pm()`. It's a function I've added that will take care of any overloaded or mismatched values.

### Note

If you're interested in alpha compositing inside Hydra, please join the discussion [here](https://github.com/hydra-synth/hydra-synth/issues/109)