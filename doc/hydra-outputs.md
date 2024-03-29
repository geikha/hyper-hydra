# hydra-outputs

Allows users to change the settings of the framebuffers used by Hydra's outputs. The most common use case is setting framebuffers to use linear interpolation instead of the default, nearest neighbour.

### Example

```js
o0.setNearest()
o1.setLinear()

src(o0)
 .layer(osc(30,.2,1).mask(shape(4,.1,0)))
 .scale(1.01).rotate(.01)
 .out(o0)

src(o1)
 .layer(osc(30,.2,1).mask(shape(4,.1,0)))
 .scale(1.01).rotate(.01)
 .out(o1)

src(o0)
 .layer(src(o1).mask(shape(1,0,0).rotate(Math.PI/2)))
 .out(o2)

render(o2)
```

[Open in Hydra!](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlwZXItaHlkcmEuZ2xpdGNoLm1lJTJGaHlkcmEtb3V0cHV0cy5qcyUyMiklMEElMEFvMC5zZXROZWFyZXN0KCklMEFvMS5zZXRMaW5lYXIoKSUwQSUwQXNyYyhvMCklMEElMDkubGF5ZXIob3NjKDMwJTJDLjIlMkMxKS5tYXNrKHNoYXBlKDQlMkMuMSUyQzApKSklMEElMDkuc2NhbGUoMS4wMSkucm90YXRlKC4wMSklMEElMDkub3V0KG8wKSUwQSUwQXNyYyhvMSklMEElMDkubGF5ZXIob3NjKDMwJTJDLjIlMkMxKS5tYXNrKHNoYXBlKDQlMkMuMSUyQzApKSklMEElMDkuc2NhbGUoMS4wMSkucm90YXRlKC4wMSklMEElMDkub3V0KG8xKSUwQSUwQXNyYyhvMCklMEElMDkubGF5ZXIoc3JjKG8xKS5tYXNrKHNoYXBlKDElMkMwJTJDMCkucm90YXRlKE1hdGguUEklMkYyKSkpJTBBJTA5Lm91dChvMiklMEElMEFyZW5kZXIobzIp)

---

## How to use

This extensions extends the `Output` prototype, so it adds methods to all outputs such as `o0`, `o1`, etc. It also adds a new `oS` object, which lets you use these methods on all outputs at the same time.

### Methods

| Method | Description |
|---|---|
| o0.setLinear() | Sets the interpolation method to linear. Looks smooth. |
| o0.setNearest()| Sets the interpolation method to nearest neighbour. Looks pixelated. |
| o0.setFbos(fbo0, fbo1)   | Lets you set any of [the texture properties regl allows](https://github.com/regl-project/regl/blob/master/API.md#texture-constructor). If you only set fbo0, fbo1 will copy those settings. |

* Remember you can change all outputs at the same time as such: `oS.setLinear()`
* You may want to use setFbos to set different interpolation methods for `mag` and `min`. For example: `oS.setFbos({ mag: 'linear', min: 'nearest' })`

#### Wrapping methods

If you want to change Hydra's wrapping mode I'd recommend using hydra-wrap. But if you're sure that what you want to do is change the fbos wrapping settings you may also use the following methods.

| Method | Description |
|---|---|
| o0.setRepeat() | Sets the wrapping to repeat |
| o0.setMirror() | Sets the wrapping to mirror |
| o0.setClamp()  | Sets the wrapping to clamp  |
