# hydra-extensions

Extensions for [Hydra](https://github.com/ojack/hydra) focusing on usability.

## List of extensions

Order is merely alphabetical

---

### hydra-abbreviations

Write very small hydra code.

[source](./hydra-abbreviations.js) / [url](https://hydra-extensions.glitch.me/hydra-abbreviations.js)

```js
o(10, 0.1, 1.2).bl(ns(3)).df(sh(4, 0.6).rt(0, 0.1)).out()
```
[open in hydra!](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1hYmJyZXZpYXRpb25zLmpzJTIyKSUwQSUwQW8oMTAlMkMlMjAwLjElMkMlMjAxLjIpLmJsKG5zKDMpKS5kZihzaCg0JTJDJTIwMC42KS5ydCgwJTJDJTIwMC4xKSkub3V0KCk%3D)

---

### hydra-arithmetics

All the functions you needed to make complex visual arithmetics, easily.

[docs](./doc/hydra-arithmetics.md) / [url](https://hydra-extensions.glitch.me/hydra-arithmetics.js)

```js
osc(10,.1,2)
	.mod(gradient().asin().cos())
	.step(noise(2).unipolar().div(o0))
	.blend(o0,.2)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1hcml0aG1ldGljcy5qcyUyMiklMEElMEFvc2MoMTAlMkMuMSUyQzIpJTBBJTA5Lm1vZChncmFkaWVudCgpLmFzaW4oKS5jb3MoKSklMEElMDkuc3RlcChub2lzZSgyKS51bmlwb2xhcigpLmRpdihvMCkpJTBBJTA5LmJsZW5kKG8wJTJDLjIpJTBBJTA5Lm91dCgp)

---

### hydra-arrays

Extends the functionality of arrays in Hydra, letting you operate between different arrays and generate new ones.

[docs](./doc/hydra-arrays.md) / [url](https://hydra-extensions.glitch.me/hydra-arrays.js)

```js
gradient().diff(o0)
	.hue([0,2,3,8].div(10).addWrap([0.2,0.1]).smooth())
	.rotate(Array.run(8).mult(Math.PI*2/8))
	.add(shape(64,.02)
  			.scrollX(Array.random(16,-0.4,0.4).smooth())
  			.scrollY(Array.random(16,-0.4,0.4).smooth()))
	.blend(o0,.6)
	.out()
bpm = 50
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1hcnJheXMuanMlMjIpJTBBJTBBZ3JhZGllbnQoKSUwQSUwOS5kaWZmKG8wKSUwQSUwOS5odWUoJTVCMCUyQzIlMkMzJTJDOCU1RC5kaXYoMTApLmFkZFdyYXAoJTVCMC4yJTJDMC4xJTVEKS5zbW9vdGgoKSklMEElMDkucm90YXRlKEFycmF5LnJ1big4KS5tdWx0KE1hdGguUEkqMiUyRjgpKSUwQSUwOS5hZGQoJTBBJTIwJTIwJTA5JTA5c2hhcGUoNjQlMkMuMDIpJTBBJTIwJTIwJTA5JTA5JTA5LnNjcm9sbFgoQXJyYXkucmFuZG9tKDE2JTJDLTAuNCUyQzAuNCkuc21vb3RoKCkpJTBBJTIwJTIwJTA5JTA5JTA5LnNjcm9sbFkoQXJyYXkucmFuZG9tKDE2JTJDLTAuNCUyQzAuNCkuc21vb3RoKCkpJTBBJTA5KSUwQSUwOS5ibGVuZChvMCUyQy42KSUwQSUwOS5vdXQoKSUwQWJwbSUyMCUzRCUyMDUw)

---

### hydra-blend

Adds most blending modes you know from raster image softwares. Ideal for compositing.

[docs](./doc/hydra-blend.md) / [url](https://hydra-extensions.glitch.me/hydra-blend.js)

```js
osc(30)
	.screen(noise(3,1).pm())
	.linearBurn(gradient(1).hue(.3))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1ibGVuZC5qcyUyMiklMEElMEFvc2MoMzApJTBBJTA5LnNjcmVlbihub2lzZSgzJTJDMSkucG0oKSklMEElMDkubGluZWFyQnVybihncmFkaWVudCgxKS5odWUoLjMpKSUwQSUwOS5vdXQoKQ%3D%3D)

---

### hydra-canvas

Let's you easily control Hydra's canvas.

[docs](./doc/hydra-canvas.md) / [url](https://hydra-extensions.glitch.me/hydra-canvas.js)

```js
setResolution(256,256)
canvas.setRelativeSize(2)
canvas.setAlign("right")
canvas.setLinear()

solid(1).diff(o0).scale(.5).diff(noise(2,0.4)).out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1jYW52YXMuanMlMjIpJTBBJTBBc2V0UmVzb2x1dGlvbigyNTYlMkMyNTYpJTBBY2FudmFzLnNldFJlbGF0aXZlU2l6ZSgyKSUwQWNhbnZhcy5zZXRBbGlnbiglMjJyaWdodCUyMiklMEFjYW52YXMuc2V0TGluZWFyKCklMEElMEFzb2xpZCgxKS5kaWZmKG8wKS5zY2FsZSguNSkuZGlmZihub2lzZSgyJTJDMC40KSkub3V0KCk%3D)

---

### hydra-colorspaces

All the function you might need to work with color in different colorspaces such as CMYK, HSV, YUV, etc.

[docs](./doc/hydra-colorspaces.md) / [url](https://hydra-extensions.glitch.me/hydra-colorspaces.js)

```js
gradient().rgb.aSet(0)
  	.cmyk.from()
	.hsv.hOffsetFrom(noise(1,1),.3)
	.yuv(1,.5)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1jb2xvcnNwYWNlcy5qcyUyMiklMEElMEFncmFkaWVudCgpLnJnYi5hU2V0KDApJTBBJTIwJTIwJTA5LmNteWsuZnJvbSgpJTBBJTA5Lmhzdi5oT2Zmc2V0RnJvbShub2lzZSgxJTJDMSklMkMuMyklMEElMDkueXV2KDElMkMuNSklMEElMDkub3V0KCk%3D)

---

### hydra-debug

Adds a `.debug()` function that allows you to easily read the fragment shader of your sketch and test changes in real time.

[docs](./doc/hydra-debug.md) / [url](https://hydra-extensions.glitch.me/hydra-debug.js)

```js
osc().rotate().debug(o0)
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1kZWJ1Zy5qcyUyMiklMEElMEFvc2MoKS5yb3RhdGUoKS5vdXQoKSUyMCUyRiUyRiUyMHRyeSUyMHRvJTIwJTYwZGVidWclNjAlMjBtZSUyMCEhJTBBJTBBJTJGJTJGJTIwb3NjKCkucm90YXRlKCkuZGVidWcobzAp)

---

### hydra-glsl

Write GLSL code directly in your patches.

[docs](./doc/hydra-glsl.md) / [url](https://hydra-extensions.glitch.me/hydra-glsl.js)

```js
glsl('vec4(sin(uv.x*i0+(time*i1*vec3(i2,i2*2.,i2*3.))),1.0)',16,2,.3)
    .glslColor('vec4(c0.brg-(sin(c0.b)*i0),1.)',()=>Math.cos(time))
    .out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1nbHNsLmpzJTIyKSUwQSUwQWdsc2woJ3ZlYzQoc2luKHV2LngqaTAlMkIodGltZSppMSp2ZWMzKGkyJTJDaTIqMi4lMkNpMiozLikpKSUyQzEuMCknJTJDMTYlMkMyJTJDLjMpJTBBJTA5Lmdsc2xDb2xvcigndmVjNChjMC5icmctKHNpbihjMC5iKSppMCklMkMxLiknJTJDKCklM0QlM0VNYXRoLmNvcyh0aW1lKSklMEElMDkub3V0KCk%3D)

---

### hydra-mouse

Replaces Hydra's standard `mouse` object adding useful properties.

[docs](./doc/hydra-mouse.md) / [url](https://hydra-extensions.glitch.me/hydra-mouse.js)

```js
noise(1)
	.add(shape(64,.01,.2).scrollX(()=>mouse.posx).scrollY(()=>mouse.posy))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1tb3VzZS5qcyUyMiklMEElMEFub2lzZSgxKSUwQSUwOS5hZGQoc2hhcGUoNjQlMkMuMDElMkMuMikuc2Nyb2xsWCgoKSUzRCUzRW1vdXNlLnBvc3gpLnNjcm9sbFkoKCklM0QlM0Vtb3VzZS5wb3N5KSklMEElMDkub3V0KCk%3D)

---

### hydra-outputs

Change the properties of Hydra's output's framebuffers. Most importantly: try linear interpolation.

[docs](./doc/hydra-outputs.md) / [url](https://hydra-extensions.glitch.me/hydra-outputs.js)

```js
o1.setLinear()

src(o1)
    .layer(osc(30,.2,1).mask(shape(4,.1,0)))
    .scale(1.01).rotate(.01)
    .out(o1)
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1vdXRwdXRzLmpzJTIyKSUwQSUwQW8wLnNldE5lYXJlc3QoKSUwQW8xLnNldExpbmVhcigpJTBBJTBBc3JjKG8wKSUwQSUyMC5sYXllcihvc2MoMzAlMkMuMiUyQzEpLm1hc2soc2hhcGUoNCUyQy4xJTJDMCkpKSUwQSUyMC5zY2FsZSgxLjAxKS5yb3RhdGUoLjAxKSUwQSUyMC5vdXQobzApJTBBJTBBc3JjKG8xKSUwQSUyMC5sYXllcihvc2MoMzAlMkMuMiUyQzEpLm1hc2soc2hhcGUoNCUyQy4xJTJDMCkpKSUwQSUyMC5zY2FsZSgxLjAxKS5yb3RhdGUoLjAxKSUwQSUyMC5vdXQobzEpJTBBJTBBcmVuZGVyKCk%3D)

---

### hydra-pixels

Retrieve pixel values from Hydra's outputs.

[docs](./doc/hydra-pixels.md) / [url](https://hydra-extensions.glitch.me/hydra-pixels.js)

```js
osc(40,.09,1.5)
   .diff(osc(20).luma())
   .color(1,1,()=>1+pixel[0]/255)
.out()

update = ()=> {
  pixel = o0.read(width/2,height/2) // center of the screen
}
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1waXhlbHMuanMlMjIpJTBBJTBBb3NjKDQwJTJDLjA5JTJDMS41KSUwQSUyMCUyMCUyMC5kaWZmKG9zYygyMCkubHVtYSgpKSUwQSUyMCUyMCUyMC5jb2xvcigxJTJDMSUyQygpJTNEJTNFMSUyQnBpeGVsJTVCMCU1RCUyRjI1NSklMEEub3V0KCklMEElMEF1cGRhdGUlMjAlM0QlMjAoKSUzRCUzRSUyMCU3QiUwQSUyMCUyMHBpeGVsJTIwJTNEJTIwbzAucmVhZCh3aWR0aCUyRjIlMkNoZWlnaHQlMkYyKSUyMCUyRiUyRiUyMGNlbnRlciUyMG9mJTIwdGhlJTIwc2NyZWVuJTBBJTdE)

---

### hydra-swizzle

Replicates the swizzling functionality from GLSL.

[docs](./doc/hydra-swizzle.md) / [url](https://hydra-extensions.glitch.me/hydra-swizzle.js)

```js
gradient(1).gbg
	.layer(osc(30,.1,2).bggr)
	.layer(gradient().r.mask(shape(2)))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1zd2l6emxlLmpzJTIyKSUwQSUwQWdyYWRpZW50KDEpLmdiZyUwQSUwOS5sYXllcihvc2MoMzAlMkMuMSUyQzIpLmJnZ3IpJTBBJTA5LmxheWVyKGdyYWRpZW50KCkuci5tYXNrKHNoYXBlKDIpKSklMEElMDkub3V0KCk%3D)

---

### hydra-vec4

Adds wrapper functions that allow you to construct vec4's like you would in GLSL.

[docs](./doc/hydra-vec4.md) / [url](https://hydra-extensions.glitch.me/hydra-vec4.js)

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
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS12ZWM0LmpzJTIyKSUwQSUwQW5vaXNlKCklMEElMDkubXVsdCglMjB2ZWM0KCUyMHZlYzMoMC41KSUyMCUyQyUyMDElMjApJTIwKSUwQSUyMCUyMCUwOS5hZGQoJTIwdmVjNCglMjAlNUIwLjUlMkMwJTVELnNtb290aCgpJTIwKSUyMCklMEElMDkubGF5ZXIoJTBBJTA5JTA5dmVjNCglMjB2ZWMzKCUyMCU1QjAlMkMlMjAxJTJDJTIwMC41JTVEJTIwJTJDJTIwdmVjMiglMjAoKSUzRCUzRXRpbWUlMjUxJTIwKSUyMCklMjAlMkMlMjAxKSUwQSUyMCUyMCUwOSUwOSUwOS5tYXNrKHNoYXBlKDQpKSUwQSUwOSklMEElMjAlMjAlMDkub3V0KCk%3D)

---

### hydra-wrap

Change how Hydra wraps textures, and control the wrapping of generators.

[docs](./doc/hydra-wrap.md) / [url](https://hydra-extensions.glitch.me/hydra-wrap.js)

```js
hydraWrap.setMirror()

src(o0)
	.layer(osc().rotate().mask(shape(4,1,0)))
	.scale(.5)
	.blend(noise(),.2)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS13cmFwLmpzJTIyKSUwQSUwQWh5ZHJhV3JhcC5zZXRNaXJyb3IoKSUwQSUwQXNyYyhvMCklMEElMDkubGF5ZXIob3NjKCkucm90YXRlKCkubWFzayhzaGFwZSg0JTJDMSUyQzApKSklMEElMDkuc2NhbGUoLjUpJTBBJTA5LmJsZW5kKG5vaXNlKCklMkMuMiklMEElMDkub3V0KCk%3D)

---

## Also check:

* [`extra-shaders-for-hydra`](https://gitlab.com/metagrowing/extra-shaders-for-hydra) : another really useful repo of hydra extensions made by Thomas Jourdan
* [`hydra-antlia`](https://github.com/ritchse/hydra-antlia) : my extension of hydra for colors, geometry and interactivity.
