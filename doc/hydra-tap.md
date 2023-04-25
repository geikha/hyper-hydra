# hydra-tap

A tap bpm control for Hydra. Inspired by Resolume's own tap.

## Example

```js
osc(30,.01,beats(1)).out()

osc().rotate(beats_(2).curve(-3)).out()

osc().scale(beats(1).curve(2).range(1,2)).out()

// Ctrl + Space Bar for tapping
// Ctrl + , (Comma) for re-sync
```
[open in hydra](https://hydra.ojack.xyz/?code=YXdhaXQlMjBsb2FkU2NyaXB0KCUyMmh0dHBzJTNBJTJGJTJGaHlkcmEtZXh0ZW5zaW9ucy5nbGl0Y2gubWUlMkZoeWRyYS10YXAuanMlMjIpJTBBJTBBb3NjKDMwJTJDLjAxJTJDYmVhdHMoMSkpLm91dCgpJTBBJTBBb3NjKCkucm90YXRlKGJlYXRzXygyKS5jdXJ2ZSgtMykpLm91dCgpJTBBJTBBb3NjKCkuc2NhbGUoYmVhdHMoMSkuY3VydmUoMikucmFuZ2UoMSUyQzIpKS5vdXQoKSUwQSUwQSUyRiUyRiUyMEN0cmwlMjAlMkIlMjBTcGFjZSUyMEJhciUyMGZvciUyMHRhcHBpbmclMEElMkYlMkYlMjBDdHJsJTIwJTJCJTIwJTJDJTIwKENvbW1hKSUyMGZvciUyMHJlLXN5bmM%3D)

## Usage

### Tap

* `Ctrl + Space Bar` for tapping.
* `Ctrl + , (Comma)` for re-sync (resets time to 0).

### Envelopes

* `beats(n=1)`: A linear ramp from 1 down to 0 every `n` beats
* `beats_(n=1)`: A linear ramp from 0 up to 1 every `n` beats
* `beatsTri(n=1)`: Goes from 1 to 0 on `n` beats, and then back to 1 in the same time, creating a triangle wave.
* `beatsTri_(n=1)`: Same as avobe but inverted.

#### Curve

You can seat the curve of a beat envelope by calling `.curve(q)` on it. Positive values will ease in and negative values will ease out. For example, `beats().curve(3)` would be cubic easing in.

#### Range

You can also set the range for an envelope or a curved envelope by calling `.range(min=0,max=1)` on it. For example: `osc().scale(beatsTri(2).curve(2).range(1,2))`.