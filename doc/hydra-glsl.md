# hydra-glsl
---
This hack/extension allows you to use glsl code almost directly inside Hydra. It adds 5 functions, 1 according to each type of glsl-function in hydra.

## Example:
```js
glsl('vec4(sin(((_st.x*54.)+time*2.)*vec3(0.1,0.1,0.101)),1.0)')
  	.diff(o0)
	.glslColor('vec4(c0.brg,1.)')
	.glslCoord('xy*=(1.0/vec2(i0, i0)); return xy',.2)
	.glslCombine('return c0-c1',o1)
	.glslCombineCoord('uv+(vec2(c0.r,c0.b)*0.1)',o1)
  .out()
```

---

## Functions:

| function                 | arguments after code       | corresponding type | glsl arguments : aliases          |
|--------------------------|------------------|--------------------|-----------------------------------|
| glsl()                   | ...args          | 'src'              | _st : st, uv, xy                  |
| osc().glslColor()        | ...args          | 'color'            | _c0 : c0, color                   |
| osc().glslCoord()        | ...args          | 'coord'            | _st : st, uv, xy                  |
| osc().glslCombine()      | texture, ...args | 'combine'          | _c0 : c0, color0; _c1: c1, color1 |
| osc().glslCombineCoord() | texture, ...args | 'combineCoord'     | _st : st, uv, xy; _c0: c0, color  |

*Note that `osc()` is merely an example*

## Arguments

Each function comes with 10 predefined inputs called `i0`,`i1`,`i2`...`i9`. All of which are defaulted to `1`. You can use either these 10 arguments or define your own by sending them as arrays in the form of `['name',value]`. 

#### Important:
All inputs are `float` as of now.

### Example:

```js
glsl('vec4(sin(uv.x*i0+(time*i1*vec3(i2,i2*2.,i2*3.))),1.0)',16,2,.3)
	.glslColor('vec4(c0.brg-(sin(c0.b)*myVariable),1.)',['myVariable',0.2])
	.out()
```

You can even send arguments as functions in tipical Hydra manner:

```js
glsl('vec4(sin(uv.x*i0+(time*i1*vec3(i2,i2*2.,i2*3.))),1.0)',16,2,.3)
	.glslColor('vec4(c0.brg-(sin(c0.b)*myVariable),1.)',['myVariable',()=>time%1])
	.out()
```

## About the code (and lazy code)

* You can straight up use any of the aliases mentioned above.
* You can omit the semicolon at the end.
* You can omit the return keyword.
* You can send multiline code.
    * You can only omit the semicolon in the last line.
    * You can still omit the return keyword.
* You can write your own `c0`s, `st`s or any other variables named like alises mentioned above. The script checks if you defined any variables named like that before assigning the alises.
* You cannot use aliases as names of custom arguments

## Tip

Have the browser's console open. Hydra doesn't show frag errors on the built-in console.

## Note

This hack works by flooding either the global context (the `window`) or the GlslSource constructor with new Hydra functions. Don't be scared to find lots of functions called `glsl_ext_NODE_`-something.
