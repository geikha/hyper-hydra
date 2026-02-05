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
| o0.clear() | Clears the output framebuffers to transparent black. Useful for resetting feedback loops. |
| o0.setBufferCount(n) | Sets the number of framebuffers to `n` (minimum 2). Useful for avoiding period-doubling in multi-output feedback. |
| o0.resetBuffers() | Resets to default 2 framebuffers with nearest interpolation and clamp wrapping. |
| o0.setFbos(fbo0, fbo1)   | Lets you set texture properties like `mag`, `min`, `wrapS`, `wrapT`. If you only set fbo0, fbo1 will copy those settings. |

* Remember you can change all outputs at the same time as such: `oS.setLinear()`, `oS.clear()`, or `oS.setBufferCount(3)`
* You may want to use setFbos to set different interpolation methods for `mag` and `min`. For example: `oS.setFbos({ mag: 'linear', min: 'nearest' })`

#### Multi-buffer framebuffers

By default, Hydra outputs use 2 framebuffers in a ping-pong pattern. You can increase this number to 3 or more using `setBufferCount()`:

```js
o0.setBufferCount(3)
```

This is particularly useful for avoiding period-doubling bifurcations (strobing effects) in multi-output feedback systems where outputs depend on each other's previous frames. For more details on this issue, see [hydra-convolutions: Multiple outputs and ping-pong desync](./hydra-convolutions.md#multiple-outputs-and-ping-pong-desync).

Using 3 buffers changes the feedback delay characteristics and can smooth out the visual instability that occurs with interdependent outputs. Note that this changes the system dynamics, so it may produce different visual results than the default 2-buffer configuration.

To reset everything back to defaults:

```js
o0.resetBuffers()  // Back to 2 buffers, nearest interpolation, clamp wrapping
```

#### Wrapping methods

If you want to change Hydra's wrapping mode I'd recommend using hydra-wrap. But if you're sure that what you want to do is change the fbos wrapping settings you may also use the following methods.

| Method | Description |
|---|---|
| o0.setRepeat() | Sets the wrapping to repeat |
| o0.setMirror() | Sets the wrapping to mirror |
| o0.setClamp()  | Sets the wrapping to clamp  |
