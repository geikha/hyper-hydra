# hydra-vec4

Adds wrappers functions that allow you to construct vec4's like you would in GLSL.

## Overview

This extension adds functions for `vec4`, `vec3` and `vec2`. `vec4` will return a `solid()` with the corresponding values, while `vec3` and `vec2` simply return arrays to be sent to the `vec4` function. However the extension takes into account if an array was created by a `vec`function, so you can still use arrays and functions as you would do normally in Hydra even as arguments to these new functions.

## Example

```js
noise()
	.mult( vec4( vec3(0.5) , 1 ) )
  	.add( vec4( [0.5,0].smooth() ) )
	.layer(
		vec4( vec3( [0, 1, 0.5] , vec2( ()=>time%1 ) ) , 1)
  			.mask(shape(4))
	)
  	.out()
```