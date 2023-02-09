# hydra-fractals

Adds mirroring and other functions that can be useful for making fractals. You should also check [`hydra-wrap`](./hydra-wrap.md) for fractals.

## Mirroring functions

All mirroring functions are named after the axis which will be affected.


### mirrorX

`.mirrorX( pos = 0 , coverage = 1 )`

Result: `[1234|4321]`

Leaves the image as is, up until `pos`, where it starts mirroring it. `coverage` is how long until the effect repeats itself. For example:

`.mirrorX(0,0.5)`

Result: `[12|21|12|21]`

### mirrorY

`.mirrorY( pos = 0 , coverage = 1 )`

Same as `mirrorX` but on the other axis.

### mirrorX2

`.mirrorX2( pos = 0 , coverage = 1 )`

Result: `[8765|5678]`

Same as `mirrorX` but mirrors from the other side.

### mirrorY2

`.mirrorY2( pos = 0 , coverage = 1 )`

Same as `mirrorY` but mirrors from the other side.

### mirrorWrap

`.mirrorWrap()`

Will mirror any out of bounds coordinates. For example:

Input: `[-8,-7,-6,-5,-4,-3,-2,-1] [1,2,3,4,5,6,7,8] [9,10,11,12,13,14,15,16]`
Result: `[87654321] [12345678] [87654321]`

## Other functions

### inversion

`.inversion()`

Applies a circular inversion.