# hyper-hydra

Extensions for [Hydra](https://github.com/ojack/hydra) focusing on usability.

## How to load extensions

You can load extensions into Hydra with the following syntax:

```js
await loadScript("https://hyper-hydra.glitch.me/hydra-src.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-wrap.js")

osc().out()
```

---

## List of extensions

Order is merely alphabetical

### hydra-abbreviations

Write very small hydra code.

[source](./hydra-abbreviations.js) / [url](https://hyper-hydra.glitch.me/hydra-abbreviations.js)

```js
o(10, 0.1, 1.2).bl(ns(3)).df(sh(4, 0.6).rt(0, 0.1)).out()
```
[open in hydra!](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtYWJicmV2aWF0aW9ucy5qcyUyMiklMEElMEFvKDEwJTJDJTIwMC4xJTJDJTIwMS4yKS5ibChucygzKSkuZGYoc2goNCUyQyUyMDAuNikucnQoMCUyQyUyMDAuMSkpLm91dCgp)

---

### hydra-arithmetics

All the functions you needed to make complex visual arithmetics, easily.

[docs](./doc/hydra-arithmetics.md) / [url](https://hyper-hydra.glitch.me/hydra-arithmetics.js)

```js
osc(10,.1,2)
	.mod(gradient().asin().cos())
	.step(noise(2).unipolar().div(o0))
	.blend(o0,.2)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtYXJpdGhtZXRpY3MuanMlMjIpJTBBJTBBb3NjKDEwJTJDLjElMkMyKSUwQSUwOS5tb2QoZ3JhZGllbnQoKS5hc2luKCkuY29zKCkpJTBBJTA5LnN0ZXAobm9pc2UoMikudW5pcG9sYXIoKS5kaXYobzApKSUwQSUwOS5ibGVuZChvMCUyQy4yKSUwQSUwOS5vdXQoKQ%3D%3D)

---

### hydra-arrays

Extends the functionality of arrays in Hydra, letting you operate between different arrays and generate new ones.

[docs](./doc/hydra-arrays.md) / [url](https://hyper-hydra.glitch.me/hydra-arrays.js)

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
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtYXJyYXlzLmpzJTIyKSUwQSUwQWdyYWRpZW50KCklMEElMDkuZGlmZihvMCklMEElMDkuaHVlKCU1QjAlMkMyJTJDMyUyQzglNUQuZGl2KDEwKS5hZGRXcmFwKCU1QjAuMiUyQzAuMSU1RCkuc21vb3RoKCkpJTBBJTA5LnJvdGF0ZShBcnJheS5ydW4oOCkubXVsdChNYXRoLlBJKjIlMkY4KSklMEElMDkuYWRkKCUwQSUyMCUyMCUwOSUwOXNoYXBlKDY0JTJDLjAyKSUwQSUyMCUyMCUwOSUwOSUwOS5zY3JvbGxYKEFycmF5LnJhbmRvbSgxNiUyQy0wLjQlMkMwLjQpLnNtb290aCgpKSUwQSUyMCUyMCUwOSUwOSUwOS5zY3JvbGxZKEFycmF5LnJhbmRvbSgxNiUyQy0wLjQlMkMwLjQpLnNtb290aCgpKSUwQSUwOSklMEElMDkuYmxlbmQobzAlMkMuNiklMEElMDkub3V0KCklMEFicG0lMjAlM0QlMjA1MA%3D%3D)

---

### hydra-blend

Adds most blending modes you know from raster image softwares. Ideal for compositing.

[docs](./doc/hydra-blend.md) / [url](https://hyper-hydra.glitch.me/hydra-blend.js)

```js
osc(30)
	.screen(noise(3,1).pm())
	.linearBurn(gradient(1).hue(.3))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtYmxlbmQuanMlMjIpJTBBJTBBb3NjKDMwKSUwQSUwOS5zY3JlZW4obm9pc2UoMyUyQzEpLnBtKCkpJTBBJTA5LmxpbmVhckJ1cm4oZ3JhZGllbnQoMSkuaHVlKC4zKSklMEElMDkub3V0KCk%3D)

---

### hydra-canvas

Let's you easily control Hydra's canvas.

[docs](./doc/hydra-canvas.md) / [url](https://hyper-hydra.glitch.me/hydra-canvas.js)

```js
setResolution(256,256)
canvas.setRelativeSize(2)
canvas.setAlign("right")
canvas.setLinear()

solid(1).diff(o0).scale(.5).diff(noise(2,0.4)).out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtY2FudmFzLmpzJTIyKSUwQSUwQXNldFJlc29sdXRpb24oMjU2JTJDMjU2KSUwQWNhbnZhcy5zZXRSZWxhdGl2ZVNpemUoMiklMEFjYW52YXMuc2V0QWxpZ24oJTIycmlnaHQlMjIpJTBBY2FudmFzLnNldExpbmVhcigpJTBBJTBBc29saWQoMSkuZGlmZihvMCkuc2NhbGUoLjUpLmRpZmYobm9pc2UoMiUyQzAuNCkpLm91dCgp)

---

### hydra-colorspaces

All the function you might need to work with color in different colorspaces such as CMYK, HSV, YUV, etc.

[docs](./doc/hydra-colorspaces.md) / [url](https://hyper-hydra.glitch.me/hydra-colorspaces.js)

```js
gradient().rgb.aSet(0)
  	.cmyk.from()
	.hsv.hOffsetFrom(noise(1,1),.3)
	.yuv(1,.5)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtY29sb3JzcGFjZXMuanMlMjIpJTBBJTBBZ3JhZGllbnQoKS5yZ2IuYVNldCgwKSUwQSUyMCUyMCUwOS5jbXlrLmZyb20oKSUwQSUwOS5oc3YuaE9mZnNldEZyb20obm9pc2UoMSUyQzEpJTJDLjMpJTBBJTA5Lnl1digxJTJDLjUpJTBBJTA5Lm91dCgp)

---

### hydra-debug

**WARNING:** doesn't work in atom / pulsar

Adds a `.debug()` function that allows you to easily read the fragment shader of your sketch and test changes in real time.

[docs](./doc/hydra-debug.md) / [url](https://hyper-hydra.glitch.me/hydra-debug.js)

```js
osc().rotate().debug(o0)
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtZGVidWcuanMlMjIpJTBBJTBBb3NjKCkucm90YXRlKCkub3V0KCklMjAlMkYlMkYlMjB0cnklMjB0byUyMCU2MGRlYnVnJTYwJTIwbWUlMjAhISUwQSUwQSUyRiUyRiUyMG9zYygpLnJvdGF0ZSgpLmRlYnVnKG8wKQ%3D%3D)

---

### hydra-fractals

Adds some functions that when feedbacked are useful for creating fractals. Thanks to [Kali](https://www.shadertoy.com/user/Kali) for the idea.

[docs](./doc/hydra-fractals.md) / [url](https://hyper-hydra.glitch.me/hydra-fractals.js)

```js
src(o0)
	.scale(.75)
	.add(noise(2,1),.4)
	.invert()
	.inversion()
	.mirrorX2()
	.blend(o0,.3)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtZnJhY3RhbHMuanMlMjIpJTBBYXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtb3V0cHV0cy5qcyUyMiklMEElMEFvUy5zZXRMaW5lYXIoKSUwQSUwQXNyYyhvMCklMEElMDkuc2NhbGUoLjc1KSUwQSUwOS5hZGQobm9pc2UoMiUyQzEpJTJDLjQpJTBBJTA5LmludmVydCgpJTBBJTA5LmludmVyc2lvbigpJTBBJTA5Lm1pcnJvclgyKCklMEElMDkuYmxlbmQobzAlMkMuMyklMEElMDkub3V0KCk%3D)

---

### hydra-gif

**WARNING:** doesn't work on instance mode as of now

Let's you load `.gif` files into Hydra.

[docs](./doc/hydra-gif.md) / [url](https://hyper-hydra.glitch.me/hydra-gif.js)

```js
s0.initGif('https://i.giphy.com/media/kZqbBT64ECtjy/giphy.gif')

src(s0)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtZ2lmLmpzJTIyKSUwQSUwQXMwLmluaXRHaWYoJ2h0dHBzJTNBJTJGJTJGaS5naXBoeS5jb20lMkZtZWRpYSUyRmtacWJCVDY0RUN0anklMkZnaXBoeS5naWYnKSUwQSUwQXNyYyhzMCkuc2NhbGUoMSUyQy42KSUwQSUwOS5vdXQoKQ%3D%3D)

---

### hydra-glsl

Write GLSL code directly in your patches.

[docs](./doc/hydra-glsl.md) / [url](https://hyper-hydra.glitch.me/hydra-glsl.js)

```js
glsl('vec4(sin(uv.x*i0+(time*i1*vec3(i2,i2*2.,i2*3.))),1.0)',16,2,.3)
    .glslColor('vec4(c0.brg-(sin(c0.b)*i0),1.)',()=>Math.cos(time))
    .out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtZ2xzbC5qcyUyMiklMEElMEFnbHNsKCd2ZWM0KHNpbih1di54KmkwJTJCKHRpbWUqaTEqdmVjMyhpMiUyQ2kyKjIuJTJDaTIqMy4pKSklMkMxLjApJyUyQzE2JTJDMiUyQy4zKSUwQSUwOS5nbHNsQ29sb3IoJ3ZlYzQoYzAuYnJnLShzaW4oYzAuYikqaTApJTJDMS4pJyUyQygpJTNEJTNFTWF0aC5jb3ModGltZSkpJTBBJTA5Lm91dCgp)

---

### hydra-gradientmap

Create gradients with css colors and use them for gradient mapping.

[url](https://hyper-hydra.glitch.me/hydra-gradientmap.js)

```js
const myGradient = createGradient("#000", "#0bf", "red", "white");
 
osc(30,.05).kaleid(720).scale(1,()=>innerHeight/innerWidth)
	.lookupX(myGradient)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS1ncmFkaWVudHMuanMlMjIpJTBBJTBBY29uc3QlMjBteUdyYWRpZW50JTIwJTNEJTIwY3JlYXRlR3JhZGllbnQoJTIyJTIzMDAwJTIyJTJDJTIwJTIyJTIzMGJmJTIyJTJDJTIwJTIycmVkJTIyJTJDJTIwJTIyd2hpdGUlMjIpJTNCJTBBJTIwJTBBb3NjKDMwJTJDLjA1KS5rYWxlaWQoNzIwKS5zY2FsZSgxJTJDKCklM0QlM0Vpbm5lckhlaWdodCUyRmlubmVyV2lkdGgpJTBBJTA5Lmxvb2t1cFgobXlHcmFkaWVudCklMEElMDkub3V0KCklMEElMjAlMEFzcmMobXlHcmFkaWVudCkub3V0KG8xKSUwQSUwQXJlbmRlcigp)

---

### hydra-mouse

Replaces Hydra's standard `mouse` object adding useful properties.

[docs](./doc/hydra-mouse.md) / [url](https://hyper-hydra.glitch.me/hydra-mouse.js)

```js
noise(1)
	.add(shape(64,.01,.2).scrollX(()=>mouse.posx).scrollY(()=>mouse.posy))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtbW91c2UuanMlMjIpJTBBJTBBbm9pc2UoMSklMEElMDkuYWRkKHNoYXBlKDY0JTJDLjAxJTJDLjIpLnNjcm9sbFgoKCklM0QlM0Vtb3VzZS5wb3N4KS5zY3JvbGxZKCgpJTNEJTNFbW91c2UucG9zeSkpJTBBJTA5Lm91dCgp)

---

### hydra-outputs

Change the properties of Hydra's outputs' framebuffers. Most importantly: try linear interpolation.

[docs](./doc/hydra-outputs.md) / [url](https://hyper-hydra.glitch.me/hydra-outputs.js)

```js
o1.setLinear()

src(o1)
    .layer(osc(30,.2,1).mask(shape(4,.1,0)))
    .scale(1.01).rotate(.01)
    .out(o1)
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtb3V0cHV0cy5qcyUyMiklMEElMEFvMC5zZXROZWFyZXN0KCklMEFvMS5zZXRMaW5lYXIoKSUwQSUwQXNyYyhvMCklMEElMjAubGF5ZXIob3NjKDMwJTJDLjIlMkMxKS5tYXNrKHNoYXBlKDQlMkMuMSUyQzApKSklMEElMjAuc2NhbGUoMS4wMSkucm90YXRlKC4wMSklMEElMjAub3V0KG8wKSUwQSUwQXNyYyhvMSklMEElMjAubGF5ZXIob3NjKDMwJTJDLjIlMkMxKS5tYXNrKHNoYXBlKDQlMkMuMSUyQzApKSklMEElMjAuc2NhbGUoMS4wMSkucm90YXRlKC4wMSklMEElMjAub3V0KG8xKSUwQSUwQXJlbmRlcigp)

---

### hydra-pip

Adds a function to toggle picture-in-picture. Note that colors might look a bit washed out since this extension uses hydra's canvas' MediaStream.

[url](https://hyper-hydra.glitch.me/hydra-pip.js)

```js
osc().out()

hydraPictureInPicture() // alias: hydraPip()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtcGlwLmpzJTIyKSUwQSUwQW9zYyg0MCUyQy4wOSUyQzEuNSklMEElMjAlMjAlMjAuZGlmZihvc2MoMjApLmx1bWEoKSklMEEub3V0KCklMEElMEElMkYlMkYlMjBoeWRyYVBpcCgpJTNC)

---

### hydra-pixels

Retrieve pixel values from Hydra's outputs.

[docs](./doc/hydra-pixels.md) / [url](https://hyper-hydra.glitch.me/hydra-pixels.js)

```js
osc(40,.09,1.5)
   .diff(osc(20).luma())
   .color(1,1,()=>1+pixel[0]/255)
.out()

update = ()=> {
  pixel = o0.read(width/2,height/2) // center of the screen
}
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtcGl4ZWxzLmpzJTIyKSUwQSUwQW9zYyg0MCUyQy4wOSUyQzEuNSklMEElMjAlMjAlMjAuZGlmZihvc2MoMjApLmx1bWEoKSklMEElMjAlMjAlMjAuY29sb3IoMSUyQzElMkMoKSUzRCUzRTElMkJwaXhlbCU1QjAlNUQlMkYyNTUpJTBBLm91dCgpJTBBJTBBdXBkYXRlJTIwJTNEJTIwKCklM0QlM0UlMjAlN0IlMEElMjAlMjBwaXhlbCUyMCUzRCUyMG8wLnJlYWQod2lkdGglMkYyJTJDaGVpZ2h0JTJGMiklMjAlMkYlMkYlMjBjZW50ZXIlMjBvZiUyMHRoZSUyMHNjcmVlbiUwQSU3RA%3D%3D)

---

### hydra-src

Adds `srcAbs` and `srcRel` functions. `srcAbs` will act as `src()` but will show the source with its original width and height on screen. `scrRel` will act as `src()` but will mantain the source's aspect ratio. Works great with [hydra-wrap](#hydra-wrap). There's also `srcMask`, `srcAbsMask` and `srcAbsMark` which will mask out the wrapping.

[url](https://hyper-hydra.glitch.me/hydra-src.js)

```js
src(o0)
	.scale(1.01)
  	.colorama(-.02).brightness(-.2)
  	.blend(o0,.8)
	.layer(srcAbs(s0).luma(.4,.1))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtc3JjLmpzJTIyKSUwQSUwQXMwLmluaXRJbWFnZSgnaHR0cHMlM0ElMkYlMkZ1cGxvYWQud2lraW1lZGlhLm9yZyUyRndpa2lwZWRpYSUyRmNvbW1vbnMlMkYyJTJGMjUlMkZIeWRyYS1Gb3RvLmpwZycpJTBBJTBBc3JjKG8wKSUwQSUwOS5zY2FsZSgxLjAxKSUwQSUyMCUyMCUwOS5jb2xvcmFtYSgtLjAyKS5icmlnaHRuZXNzKC0uMiklMEElMjAlMjAlMDkuYmxlbmQobzAlMkMuOCklMEElMDkubGF5ZXIoc3JjQWJzKHMwKS5sdW1hKC40JTJDLjEpKSUwQSUwOS5vdXQoKQ%3D%3D)

---

### hydra-swizzle

Replicates the swizzling functionality from GLSL.

[docs](./doc/hydra-swizzle.md) / [url](https://hyper-hydra.glitch.me/hydra-swizzle.js)

```js
gradient(1).gbg
	.layer(osc(30,.1,2).bggr)
	.layer(gradient().r.mask(shape(2)))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtc3dpenpsZS5qcyUyMiklMEElMEFncmFkaWVudCgxKS5nYmclMEElMDkubGF5ZXIob3NjKDMwJTJDLjElMkMyKS5iZ2dyKSUwQSUwOS5sYXllcihncmFkaWVudCgpLnIubWFzayhzaGFwZSgyKSkpJTBBJTA5Lm91dCgp)

---

### hydra-tap

Adds a tap control for bpm and basic envelopes. Inspired by Resolume.

[docs](./doc/hydra-tap.md) / [url](https://hyper-hydra.glitch.me/hydra-tap.js)

```js
osc(30,.01,beats(1)).out()

osc().rotate(beats_(2).curve(-3)).out()

osc().scale(beats(1).curve(2).range(1,2)).out()

// Ctrl + Space Bar for tapping
// Ctrl + , (Comma) for re-sync
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtdGFwLmpzJTIyKSUwQSUwQW9zYygzMCUyQy4wMSUyQ2JlYXRzKDEpKS5vdXQoKSUwQSUwQW9zYygpLnJvdGF0ZShiZWF0c18oMikuY3VydmUoLTMpKS5vdXQoKSUwQSUwQW9zYygpLnNjYWxlKGJlYXRzKDEpLmN1cnZlKDIpLnJhbmdlKDElMkMyKSkub3V0KCklMEElMEElMkYlMkYlMjBDdHJsJTIwJTJCJTIwU3BhY2UlMjBCYXIlMjBmb3IlMjB0YXBwaW5nJTBBJTJGJTJGJTIwQ3RybCUyMCUyQiUyMCUyQyUyMChDb21tYSklMjBmb3IlMjByZS1zeW5j)

---

### hydra-text

Adds a text generator to Hydra

[docs](./doc/hydra-text.md) / [url](https://hyper-hydra.glitch.me/hydra-text.js)

```js
hydraText.font = "serif"
hydraText.lineWidth = "2%"
str = " hydra_! "
solid(1,.2)
	.blend(src(o0).scale(1.02).colorama(.02))
	.layer(text(str))
	.diff(strokeText(str).modulateScale(noise(1,1), .4))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtdGV4dC5qcyUyMiklMEElMEFoeWRyYVRleHQuZm9udCUyMCUzRCUyMCUyMnNlcmlmJTIyJTBBaHlkcmFUZXh0LmxpbmVXaWR0aCUyMCUzRCUyMCUyMjIlMjUlMjIlMEFzdHIlMjAlM0QlMjAlMjIlMjBoeWRyYV8hJTIwJTIyJTBBc29saWQoMSUyQy4yKSUwQSUwOS5ibGVuZChzcmMobzApLnNjYWxlKDEuMDIpLmNvbG9yYW1hKC4wMikpJTBBJTA5LmxheWVyKHRleHQoc3RyKSklMEElMDkuZGlmZihzdHJva2VUZXh0KHN0cikubW9kdWxhdGVTY2FsZShub2lzZSgxJTJDMSklMkMlMjAuNCkpJTBBJTA5Lm91dCgp)

---

### hydra-vec4

Adds wrapper functions that allow you to construct vec4's like you would in GLSL.

[docs](./doc/hydra-vec4.md) / [url](https://hyper-hydra.glitch.me/hydra-vec4.js)

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
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtdmVjNC5qcyUyMiklMEElMEFub2lzZSgpJTBBJTA5Lm11bHQoJTIwdmVjNCglMjB2ZWMzKDAuNSklMjAlMkMlMjAxJTIwKSUyMCklMEElMjAlMjAlMDkuYWRkKCUyMHZlYzQoJTIwJTVCMC41JTJDMCU1RC5zbW9vdGgoKSUyMCklMjApJTBBJTA5LmxheWVyKCUwQSUwOSUwOXZlYzQoJTIwdmVjMyglMjAlNUIwJTJDJTIwMSUyQyUyMDAuNSU1RCUyMCUyQyUyMHZlYzIoJTIwKCklM0QlM0V0aW1lJTI1MSUyMCklMjApJTIwJTJDJTIwMSklMEElMjAlMjAlMDklMDklMDkubWFzayhzaGFwZSg0KSklMEElMDkpJTBBJTIwJTIwJTA5Lm91dCgp)

---

### hydra-wrap

Change how Hydra wraps textures, and control the wrapping of generators.

[docs](./doc/hydra-wrap.md) / [url](https://hyper-hydra.glitch.me/hydra-wrap.js)

```js
hydraWrap.setMirror()

src(o0)
	.layer(osc().rotate().mask(shape(4,1,0)))
	.scale(.5)
	.blend(noise(),.2)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtd3JhcC5qcyUyMiklMEElMEFoeWRyYVdyYXAuc2V0TWlycm9yKCklMEElMEFzcmMobzApJTBBJTA5LmxheWVyKG9zYygpLnJvdGF0ZSgpLm1hc2soc2hhcGUoNCUyQzElMkMwKSkpJTBBJTA5LnNjYWxlKC41KSUwQSUwOS5ibGVuZChub2lzZSgpJTJDLjIpJTBBJTA5Lm91dCgp)

---

## Also check:

* [`extra-shaders-for-hydra`](https://gitlab.com/metagrowing/extra-shaders-for-hydra) : another really useful repo of hydra extensions made by Thomas Jourdan
* [`hydra-midi`](https://github.com/arnoson/hydra-midi) : a super complete midi extension for hydra, made by Arnno Schlipf.
* [`hydra-antlia`](https://github.com/ritchse/hydra-antlia) : my extension of hydra for colors, geometry and interactivity.
