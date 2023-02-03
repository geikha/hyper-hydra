# hydra-wrap

Allows you to change how Hydra wraps textures, and control the wrapping of generators.

## Overview

This extensions works by changing all coordinate functions (such as `scrollX`, `scale`, etc) and setting them to not wrap at all. This change makes it so that generator functions (such as `osc`, `shape`, etc) don't wrap when you change their coordinates. As for textures (such as `s0`, `o0`), it lets you change the way they wrap (it may be `wrap`, `nowrap`, `mirror`). If you want a generator to wrap in the same way as textures do, you can simply write, for example, `osc().wrap()`.

---

## Functions

You can access the different functions via the `hydraWrap` object.

| Method            | Description                                        |
|-------------------|----------------------------------------------------|
| hydraWrap.setWrap()   | Sets the wrapping on. This is the default.         |
| hydraWrap.setNoWrap() | Disables wrapping. This means textures will clamp. |
| hydraWrap.setMirror() | Sets the wrapping to mirror.                       |
| hydraWrap.setVoid()   | Void does not actually change the wrapping method, but it means that **textures** won't render out of bounds coordinates instead of wrapping. You could use `hydra-src` with `hydraMask` instead. |

As mentioned above, this extensions also adds a new coordinate function named `wrap` which will set any generator to wrap. See the following example:

```js
shape().scale(.2).out(o0)
shape().wrap().scale(.2).out(o1)
render()
```
