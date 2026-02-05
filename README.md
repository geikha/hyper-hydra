# hyper-hydra

Extensions for [Hydra](https://github.com/ojack/hydra) focusing on usability.

## How to load extensions

You can load extensions into Hydra with the following syntax:

```js
await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-src.js")
await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-wrap.js")

osc().out()
```

---

## List of extensions

Order is merely alphabetical

### hydra-abbreviations

Write very small hydra code.

[source](./hydra-abbreviations.js) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-abbreviations.js)

```js
o(10, 0.1, 1.2).bl(ns(3)).df(sh(4, 0.6).rt(0, 0.1)).out()
```
[open in hydra!](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWFiYnJldmlhdGlvbnMuanMlMjIlMjklMEElMEFvJTI4MTAlMkMlMjAwLjElMkMlMjAxLjIlMjkuYmwlMjhucyUyODMlMjklMjkuZGYlMjhzaCUyODQlMkMlMjAwLjYlMjkucnQlMjgwJTJDJTIwMC4xJTI5JTI5Lm91dCUyOCUyOQ==)

---

### hydra-arithmetics

All the functions you needed to make complex visual arithmetics, easily.

[docs](./doc/hydra-arithmetics.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-arithmetics.js)

```js
osc(10,.1,2)
	.mod(gradient().asin().cos())
	.step(noise(2).unipolar().div(o0))
	.blend(o0,.2)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWFyaXRobWV0aWNzLmpzJTIyJTI5JTBBJTBBb3NjJTI4MTAlMkMuMSUyQzIlMjklMEElMDkubW9kJTI4Z3JhZGllbnQlMjglMjkuYXNpbiUyOCUyOS5jb3MlMjglMjklMjklMEElMDkuc3RlcCUyOG5vaXNlJTI4MiUyOS51bmlwb2xhciUyOCUyOS5kaXYlMjhvMCUyOSUyOSUwQSUwOS5ibGVuZCUyOG8wJTJDLjIlMjklMEElMDkub3V0JTI4JTI5)

---

### hydra-arrays

Extends the functionality of arrays in Hydra, letting you operate between different arrays and generate new ones.

[docs](./doc/hydra-arrays.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-arrays.js)

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
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWFycmF5cy5qcyUyMiUyOSUwQSUwQWdyYWRpZW50JTI4JTI5JTBBJTA5LmRpZmYlMjhvMCUyOSUwQSUwOS5odWUlMjglNUIwJTJDMiUyQzMlMkM4JTVELmRpdiUyODEwJTI5LmFkZFdyYXAlMjglNUIwLjIlMkMwLjElNUQlMjkuc21vb3RoJTI4JTI5JTI5JTBBJTA5LnJvdGF0ZSUyOEFycmF5LnJ1biUyODglMjkubXVsdCUyOE1hdGguUEklMkEyJTJGOCUyOSUyOSUwQSUwOS5hZGQlMjglMEElMjAlMjAlMDklMDlzaGFwZSUyODY0JTJDLjAyJTI5JTBBJTIwJTIwJTA5JTA5JTA5LnNjcm9sbFglMjhBcnJheS5yYW5kb20lMjgxNiUyQy0wLjQlMkMwLjQlMjkuc21vb3RoJTI4JTI5JTI5JTBBJTIwJTIwJTA5JTA5JTA5LnNjcm9sbFklMjhBcnJheS5yYW5kb20lMjgxNiUyQy0wLjQlMkMwLjQlMjkuc21vb3RoJTI4JTI5JTI5JTBBJTA5JTI5JTBBJTA5LmJsZW5kJTI4bzAlMkMuNiUyOSUwQSUwOS5vdXQlMjglMjklMEFicG0lMjAlM0QlMjA1MA==)

---

### hydra-blend

Adds most blending modes you know from raster image softwares. Ideal for compositing.

[docs](./doc/hydra-blend.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-blend.js)

```js
osc(30)
	.screen(noise(3,1).pm())
	.linearBurn(gradient(1).hue(.3))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWJsZW5kLmpzJTIyJTI5JTBBJTBBb3NjJTI4MzAlMjklMEElMDkuc2NyZWVuJTI4bm9pc2UlMjgzJTJDMSUyOS5wbSUyOCUyOSUyOSUwQSUwOS5saW5lYXJCdXJuJTI4Z3JhZGllbnQlMjgxJTI5Lmh1ZSUyOC4zJTI5JTI5JTBBJTA5Lm91dCUyOCUyOQ==)

---

### hydra-canvas

Let's you easily control Hydra's canvas.

[docs](./doc/hydra-canvas.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-canvas.js)

```js
setResolution(256,256)
canvas.setRelativeSize(2)
canvas.setAlign("right")
canvas.setLinear()

solid(1).diff(o0).scale(.5).diff(noise(2,0.4)).out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWNhbnZhcy5qcyUyMiUyOSUwQSUwQXNldFJlc29sdXRpb24lMjgyNTYlMkMyNTYlMjklMEFjYW52YXMuc2V0UmVsYXRpdmVTaXplJTI4MiUyOSUwQWNhbnZhcy5zZXRBbGlnbiUyOCUyMnJpZ2h0JTIyJTI5JTBBY2FudmFzLnNldExpbmVhciUyOCUyOSUwQSUwQXNvbGlkJTI4MSUyOS5kaWZmJTI4bzAlMjkuc2NhbGUlMjguNSUyOS5kaWZmJTI4bm9pc2UlMjgyJTJDMC40JTI5JTI5Lm91dCUyOCUyOQ==)

---

### hydra-colorspaces

All the function you might need to work with color in different colorspaces such as CMYK, HSV, YUV, etc.

[docs](./doc/hydra-colorspaces.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-colorspaces.js)

```js
gradient().rgb.aSet(0)
  	.cmyk.from()
	.hsv.hOffsetFrom(noise(1,1),.3)
	.yuv(1,.5)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWNvbG9yc3BhY2VzLmpzJTIyJTI5JTBBJTBBZ3JhZGllbnQlMjglMjkucmdiLmFTZXQlMjgwJTI5JTBBJTIwJTIwJTA5LmNteWsuZnJvbSUyOCUyOSUwQSUwOS5oc3YuaE9mZnNldEZyb20lMjhub2lzZSUyODElMkMxJTI5JTJDLjMlMjklMEElMDkueXV2JTI4MSUyQy41JTI5JTBBJTA5Lm91dCUyOCUyOQ==)

---

### hydra-debug

**WARNING:** doesn't work in atom / pulsar

Adds a `.debug()` function that allows you to easily read the fragment shader of your sketch and test changes in real time.

[docs](./doc/hydra-debug.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-debug.js)

```js
osc().rotate().debug(o0)
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWRlYnVnLmpzJTIyJTI5JTBBJTBBb3NjJTI4JTI5LnJvdGF0ZSUyOCUyOS5vdXQlMjglMjklMjAlMkYlMkYlMjB0cnklMjB0byUyMCU2MGRlYnVnJTYwJTIwbWUlMjAlMjElMjElMEElMEElMkYlMkYlMjBvc2MlMjglMjkucm90YXRlJTI4JTI5LmRlYnVnJTI4bzAlMjk=)

---

### hydra-fractals

Adds some functions that when feedbacked are useful for creating fractals. Thanks to [Kali](https://www.shadertoy.com/user/Kali) for the idea.

[docs](./doc/hydra-fractals.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-fractals.js)

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
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWZyYWN0YWxzLmpzJTIyJTI5JTBBYXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLW91dHB1dHMuanMlMjIlMjklMEElMEFvUy5zZXRMaW5lYXIlMjglMjklMEElMEFzcmMlMjhvMCUyOSUwQSUwOS5zY2FsZSUyOC43NSUyOSUwQSUwOS5hZGQlMjhub2lzZSUyODIlMkMxJTI5JTJDLjQlMjklMEElMDkuaW52ZXJ0JTI4JTI5JTBBJTA5LmludmVyc2lvbiUyOCUyOSUwQSUwOS5taXJyb3JYMiUyOCUyOSUwQSUwOS5ibGVuZCUyOG8wJTJDLjMlMjklMEElMDkub3V0JTI4JTI5)

---

### hydra-gif

**WARNING:** doesn't work on instance mode as of now

Let's you load `.gif` files into Hydra.

[docs](./doc/hydra-gif.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-gif.js)

```js
s0.initGif('https://i.giphy.com/media/kZqbBT64ECtjy/giphy.gif')

src(s0)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWdpZi5qcyUyMiUyOSUwQSUwQXMwLmluaXRHaWYlMjglMjdodHRwcyUzQSUyRiUyRmkuZ2lwaHkuY29tJTJGbWVkaWElMkZrWnFiQlQ2NEVDdGp5JTJGZ2lwaHkuZ2lmJTI3JTI5JTBBJTBBc3JjJTI4czAlMjkuc2NhbGUlMjgxJTJDLjYlMjklMEElMDkub3V0JTI4JTI5)

---

### hydra-glsl

Write GLSL code directly in your patches.

[docs](./doc/hydra-glsl.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-glsl.js)

```js
glsl('vec4(sin(uv.x*i0+(time*i1*vec3(i2,i2*2.,i2*3.))),1.0)',16,2,.3)
    .glslColor('vec4(c0.brg-(sin(c0.b)*i0),1.)',()=>Math.cos(time))
    .out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLWdsc2wuanMlMjIlMjklMEElMEFnbHNsJTI4JTI3dmVjNCUyOHNpbiUyOHV2LnglMkFpMCUyQiUyOHRpbWUlMkFpMSUyQXZlYzMlMjhpMiUyQ2kyJTJBMi4lMkNpMiUyQTMuJTI5JTI5JTI5JTJDMS4wJTI5JTI3JTJDMTYlMkMyJTJDLjMlMjklMEElMDkuZ2xzbENvbG9yJTI4JTI3dmVjNCUyOGMwLmJyZy0lMjhzaW4lMjhjMC5iJTI5JTJBaTAlMjklMkMxLiUyOSUyNyUyQyUyOCUyOSUzRCUzRU1hdGguY29zJTI4dGltZSUyOSUyOSUwQSUwOS5vdXQlMjglMjk=)

---

### hydra-gradientmap

Create gradients with css colors and use them for gradient mapping.

[url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-gradientmap.js)

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

[docs](./doc/hydra-mouse.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-mouse.js)

```js
noise(1)
	.add(shape(64,.01,.2).scrollX(()=>mouse.posx).scrollY(()=>mouse.posy))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLW1vdXNlLmpzJTIyJTI5JTBBJTBBbm9pc2UlMjgxJTI5JTBBJTA5LmFkZCUyOHNoYXBlJTI4NjQlMkMuMDElMkMuMiUyOS5zY3JvbGxYJTI4JTI4JTI5JTNEJTNFbW91c2UucG9zeCUyOS5zY3JvbGxZJTI4JTI4JTI5JTNEJTNFbW91c2UucG9zeSUyOSUyOSUwQSUwOS5vdXQlMjglMjk=)

---

### hydra-outputs

Change the properties of Hydra's outputs' framebuffers. Most importantly: try linear interpolation.

[docs](./doc/hydra-outputs.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-outputs.js)

```js
o1.setLinear()

src(o1)
    .layer(osc(30,.2,1).mask(shape(4,.1,0)))
    .scale(1.01).rotate(.01)
    .out(o1)
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLW91dHB1dHMuanMlMjIlMjklMEElMEFvMC5zZXROZWFyZXN0JTI4JTI5JTBBbzEuc2V0TGluZWFyJTI4JTI5JTBBJTBBc3JjJTI4bzAlMjklMEElMjAubGF5ZXIlMjhvc2MlMjgzMCUyQy4yJTJDMSUyOS5tYXNrJTI4c2hhcGUlMjg0JTJDLjElMkMwJTI5JTI5JTI5JTBBJTIwLnNjYWxlJTI4MS4wMSUyOS5yb3RhdGUlMjguMDElMjklMEElMjAub3V0JTI4bzAlMjklMEElMEFzcmMlMjhvMSUyOSUwQSUyMC5sYXllciUyOG9zYyUyODMwJTJDLjIlMkMxJTI5Lm1hc2slMjhzaGFwZSUyODQlMkMuMSUyQzAlMjklMjklMjklMEElMjAuc2NhbGUlMjgxLjAxJTI5LnJvdGF0ZSUyOC4wMSUyOSUwQSUyMC5vdXQlMjhvMSUyOSUwQSUwQXJlbmRlciUyOCUyOQ==)

---

### hydra-pip

Adds a function to toggle picture-in-picture. Note that colors might look a bit washed out since this extension uses hydra's canvas' MediaStream.

[url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-pip.js)

```js
osc().out()

hydraPictureInPicture() // alias: hydraPip()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXBpcC5qcyUyMiUyOSUwQSUwQW9zYyUyODQwJTJDLjA5JTJDMS41JTI5JTBBJTIwJTIwJTIwLmRpZmYlMjhvc2MlMjgyMCUyOS5sdW1hJTI4JTI5JTI5JTBBLm91dCUyOCUyOSUwQSUwQSUyRiUyRiUyMGh5ZHJhUGlwJTI4JTI5JTNC)

---

### hydra-pixels

Retrieve pixel values from Hydra's outputs.

[docs](./doc/hydra-pixels.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-pixels.js)

```js
osc(40,.09,1.5)
   .diff(osc(20).luma())
   .color(1,1,()=>1+pixel[0]/255)
.out()

update = ()=> {
  pixel = o0.read(width/2,height/2) // center of the screen
}
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXBpeGVscy5qcyUyMiUyOSUwQSUwQW9zYyUyODQwJTJDLjA5JTJDMS41JTI5JTBBJTIwJTIwJTIwLmRpZmYlMjhvc2MlMjgyMCUyOS5sdW1hJTI4JTI5JTI5JTBBJTIwJTIwJTIwLmNvbG9yJTI4MSUyQzElMkMlMjglMjklM0QlM0UxJTJCcGl4ZWwlNUIwJTVEJTJGMjU1JTI5JTBBLm91dCUyOCUyOSUwQSUwQXVwZGF0ZSUyMCUzRCUyMCUyOCUyOSUzRCUzRSUyMCU3QiUwQSUyMCUyMHBpeGVsJTIwJTNEJTIwbzAucmVhZCUyOHdpZHRoJTJGMiUyQ2hlaWdodCUyRjIlMjklMjAlMkYlMkYlMjBjZW50ZXIlMjBvZiUyMHRoZSUyMHNjcmVlbiUwQSU3RA==)

---

### hydra-src

Adds `srcAbs` and `srcRel` functions. `srcAbs` will act as `src()` but will show the source with its original width and height on screen. `scrRel` will act as `src()` but will mantain the source's aspect ratio. Works great with [hydra-wrap](#hydra-wrap). There's also `srcMask`, `srcAbsMask` and `srcAbsMark` which will mask out the wrapping.

[url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-src.js)

```js
src(o0)
	.scale(1.01)
  	.colorama(-.02).brightness(-.2)
  	.blend(o0,.8)
	.layer(srcAbs(s0).luma(.4,.1))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXNyYy5qcyUyMiUyOSUwQSUwQXMwLmluaXRJbWFnZSUyOCUyN2h0dHBzJTNBJTJGJTJGdXBsb2FkLndpa2ltZWRpYS5vcmclMkZ3aWtpcGVkaWElMkZjb21tb25zJTJGMiUyRjI1JTJGSHlkcmEtRm90by5qcGclMjclMjklMEElMEFzcmMlMjhvMCUyOSUwQSUwOS5zY2FsZSUyODEuMDElMjklMEElMjAlMjAlMDkuY29sb3JhbWElMjgtLjAyJTI5LmJyaWdodG5lc3MlMjgtLjIlMjklMEElMjAlMjAlMDkuYmxlbmQlMjhvMCUyQy44JTI5JTBBJTA5LmxheWVyJTI4c3JjQWJzJTI4czAlMjkubHVtYSUyOC40JTJDLjElMjklMjklMEElMDkub3V0JTI4JTI5)

---

### hydra-swizzle

Replicates the swizzling functionality from GLSL.

[docs](./doc/hydra-swizzle.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-swizzle.js)

```js
gradient(1).gbg
	.layer(osc(30,.1,2).bggr)
	.layer(gradient().r.mask(shape(2)))
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXN3aXp6bGUuanMlMjIlMjklMEElMEFncmFkaWVudCUyODElMjkuZ2JnJTBBJTA5LmxheWVyJTI4b3NjJTI4MzAlMkMuMSUyQzIlMjkuYmdnciUyOSUwQSUwOS5sYXllciUyOGdyYWRpZW50JTI4JTI5LnIubWFzayUyOHNoYXBlJTI4MiUyOSUyOSUyOSUwQSUwOS5vdXQlMjglMjk=)

---

### hydra-tap

Adds a tap control for bpm and basic envelopes. Inspired by Resolume.

[docs](./doc/hydra-tap.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-tap.js)

```js
osc(30,.01,beats(1)).out()

osc().rotate(beats_(2).curve(-3)).out()

osc().scale(beats(1).curve(2).range(1,2)).out()

// Ctrl + Space Bar for tapping
// Ctrl + , (Comma) for re-sync
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXRhcC5qcyUyMiUyOSUwQSUwQW9zYyUyODMwJTJDLjAxJTJDYmVhdHMlMjgxJTI5JTI5Lm91dCUyOCUyOSUwQSUwQW9zYyUyOCUyOS5yb3RhdGUlMjhiZWF0c18lMjgyJTI5LmN1cnZlJTI4LTMlMjklMjkub3V0JTI4JTI5JTBBJTBBb3NjJTI4JTI5LnNjYWxlJTI4YmVhdHMlMjgxJTI5LmN1cnZlJTI4MiUyOS5yYW5nZSUyODElMkMyJTI5JTI5Lm91dCUyOCUyOSUwQSUwQSUyRiUyRiUyMEN0cmwlMjAlMkIlMjBTcGFjZSUyMEJhciUyMGZvciUyMHRhcHBpbmclMEElMkYlMkYlMjBDdHJsJTIwJTJCJTIwJTJDJTIwJTI4Q29tbWElMjklMjBmb3IlMjByZS1zeW5j)

---

### hydra-text

Adds a text generator to Hydra

[docs](./doc/hydra-text.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-text.js)

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
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXRleHQuanMlMjIlMjklMEElMEFoeWRyYVRleHQuZm9udCUyMCUzRCUyMCUyMnNlcmlmJTIyJTBBaHlkcmFUZXh0LmxpbmVXaWR0aCUyMCUzRCUyMCUyMjIlMjUlMjIlMEFzdHIlMjAlM0QlMjAlMjIlMjBoeWRyYV8lMjElMjAlMjIlMEFzb2xpZCUyODElMkMuMiUyOSUwQSUwOS5ibGVuZCUyOHNyYyUyOG8wJTI5LnNjYWxlJTI4MS4wMiUyOS5jb2xvcmFtYSUyOC4wMiUyOSUyOSUwQSUwOS5sYXllciUyOHRleHQlMjhzdHIlMjklMjklMEElMDkuZGlmZiUyOHN0cm9rZVRleHQlMjhzdHIlMjkubW9kdWxhdGVTY2FsZSUyOG5vaXNlJTI4MSUyQzElMjklMkMlMjAuNCUyOSUyOSUwQSUwOS5vdXQlMjglMjk=)

---

### hydra-vec4

Adds wrapper functions that allow you to construct vec4's like you would in GLSL.

[docs](./doc/hydra-vec4.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-vec4.js)

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
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXZlYzQuanMlMjIlMjklMEElMEFub2lzZSUyOCUyOSUwQSUwOS5tdWx0JTI4JTIwdmVjNCUyOCUyMHZlYzMlMjgwLjUlMjklMjAlMkMlMjAxJTIwJTI5JTIwJTI5JTBBJTIwJTIwJTA5LmFkZCUyOCUyMHZlYzQlMjglMjAlNUIwLjUlMkMwJTVELnNtb290aCUyOCUyOSUyMCUyOSUyMCUyOSUwQSUwOS5sYXllciUyOCUwQSUwOSUwOXZlYzQlMjglMjB2ZWMzJTI4JTIwJTVCMCUyQyUyMDElMkMlMjAwLjUlNUQlMjAlMkMlMjB2ZWMyJTI4JTIwJTI4JTI5JTNEJTNFdGltZSUyNTElMjAlMjklMjAlMjklMjAlMkMlMjAxJTI5JTBBJTIwJTIwJTA5JTA5JTA5Lm1hc2slMjhzaGFwZSUyODQlMjklMjklMEElMDklMjklMEElMjAlMjAlMDkub3V0JTI4JTI5)

---

### hydra-wrap

Change how Hydra wraps textures, and control the wrapping of generators.

[docs](./doc/hydra-wrap.md) / [url](https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-wrap.js)

```js
hydraWrap.setMirror()

src(o0)
	.layer(osc().rotate().mask(shape(4,1,0)))
	.scale(.5)
	.blend(noise(),.2)
	.out()
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0JTI4JTIyaHR0cHMlM0ElMkYlMkZjZG4uanNkZWxpdnIubmV0JTJGZ2glMkZnZWlraGElMkZoeXBlci1oeWRyYSU0MGxhdGVzdCUyRmh5ZHJhLXdyYXAuanMlMjIlMjklMEElMEFoeWRyYVdyYXAuc2V0TWlycm9yJTI4JTI5JTBBJTBBc3JjJTI4bzAlMjklMEElMDkubGF5ZXIlMjhvc2MlMjglMjkucm90YXRlJTI4JTI5Lm1hc2slMjhzaGFwZSUyODQlMkMxJTJDMCUyOSUyOSUyOSUwQSUwOS5zY2FsZSUyOC41JTI5JTBBJTA5LmJsZW5kJTI4bm9pc2UlMjglMjklMkMuMiUyOSUwQSUwOS5vdXQlMjglMjk=)

---

## Also check:

* [`extra-shaders-for-hydra`](https://gitlab.com/metagrowing/extra-shaders-for-hydra) : another really useful repo of hydra extensions made by Thomas Jourdan
* [`hydra-midi`](https://github.com/arnoson/hydra-midi) : a super complete midi extension for hydra, made by Arnno Schlipf.
* [`hydra-antlia`](https://github.com/geikha/hydra-antlia) : my extension of hydra for colors, geometry and interactivity.
