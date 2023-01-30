# hydra-glsl

Este hack/extensión te permite codear GLSL casi que directamente adentro de Hydra. Añade 5 functiones, 1 por cada tipo de glsl-function que hay en Hydra

## Ejemplo:
```js
glsl('vec4(sin(((_st.x*54.)+time*2.)*vec3(0.1,0.102,0.101)),1.0)')
  	.diff(o0)
	.glslColor('vec4(c0.brg,1.)')
	.glslCoord('xy*=(1.0/vec2(i0, i0)); return xy',.25)
	.glslCombine('return c0-c1',o1)
	.glslCombineCoord('uv+(vec2(c0.r,c0.b)*0.1)',o1)
  .out()
```
[Miralo en hydra!](https://hydra.ojack.xyz/?sketch_id=agiUw1vmrGmmf4Zy)

---

## Funciones:

| función                 | argumentos dsps del código       | tipo correspondiente | argumentos de glsl : aliases          |
|--------------------------|------------------|--------------------|-----------------------------------|
| glsl()                   | ...args          | 'src'              | _st : st, uv, xy                  |
| osc().glslColor()        | ...args          | 'color'            | _c0 : c0, color                   |
| osc().glslCoord()        | ...args          | 'coord'            | _st : st, uv, xy                  |
| osc().glslCombine()      | texture, ...args | 'combine'          | _c0 : c0, color0; _c1: c1, color1 |
| osc().glslCombineCoord() | texture, ...args | 'combineCoord'     | _st : st, uv, xy; _c0: c0, color  |

*Nótese que `osc()` es meramente un ejemplo*

### Extra functions

| función                 | argumentos dsps del código | tipo correspondiente | descripción |
|--------------------------|------------------|--------------------|-----------------------------------|
| osc().glslHsv()          | ...args          | 'color'            | Convierte los colores de c0 a HSV. Podés acceder y modificar estos valores desde un `vec3 hsv` |

---

## Argumentos

Cada función trae con sigo 10 argumentos predeterminados con nombres `i0`,`i1`,`i2`...`i9`. Todos estos se inicializan con el valor por default de `1`. Podés usar estos 10 argumentos o definir los tuyos al mandar cada argumento en un array con un formate de `['nombre',valor]`. 

#### Importante:
Todos los argumentos son del tipo `float`.

### Ejemplo:

```js
glsl('vec4(sin(uv.x*i0+(time*i1*vec3(i2,i2*2.,i2*3.))),1.0)',16,2,.3)
	.glslColor('vec4(c0.brg-(sin(c0.b)*miVariable),1.)',['miVariable',0.2])
	.out()
```

Hasta podés mandar funciones como variables como se suele hacer en Hydra:

```js
glsl('vec4(sin(uv.x*i0+(time*i1*vec3(i2,i2*2.,i2*3.))),1.0)',16,2,.3)
	.glslColor('vec4(c0.brg-(sin(c0.b)*miVariable),1.)',['miVariable',()=>time%1])
	.out()
```

---

## Sobre el codigo (y el lazy code)

* Podés usar de una cualquiera de los aliases descritos arriba.
* Podés omitir el semicolón al final.
* Podés omitir la palabra reservada "return".
* Podes mandar código que ocupe múltiples líneas.
    * Solo podés omitir el semicolón en la ultima linea.
    * Podés aún así omitir la palabra return.
* Podés escribir tus propias `c0`s, `st`s o cualquier otra variable llamada como alguna de los aliases de arriba. El script se fija que no hayas instanciado ninguna variable llamada así antes de definir los aliases.
* No podes usar el mismo nombre de un alias como el nombre de un argumento

---

## Tip

Tené la consola del browser abierta. Hydra no tira errores de frag a la consola integrada.

## Nota

Este hack funciona llenando de nuevas funciones al contexto global (`window`) y/o al constructor de GlslSource. No te asustes si ves un montón de funciones llamdas `glsl_ext_NODE_`-algo.
