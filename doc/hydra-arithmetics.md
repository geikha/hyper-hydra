# hydra-arithmetics

Adds many functions related to visual arithmetics.

## Operators

All operators in this extension are actually wrappers that let you operate by either a number (or array or function as with regular hydra) or a texture. This basically means you can both do `osc().add(noise())` or `osc().add(1)` and both will work as expected.

### div

`.div( divisor )`

Divide a texture by some value or texture

### add, sub, mult

| single value   | texture                |
|----------------|------------------------|
|`.add( value )` | `.add( tex , amount )` |
|`.sub( value )` | `.sub( tex , amount )` |
|`.mult( value )`| `.mult( tex , amount )`|

These act the same as in regular Hydra, with the added functionality of working with regular values too.

### mod

`.mod( x )`

Calculates the modulo `x` for the texture that calls it.

### min, max

`.min( x )`, `.max( x )`

Returns the minimum or maximum value when compared to the texture that calls it, accordingly.

### step

`.step( x )`

Generates a step function by comparing x to the texture that calls it.

### amp, offset

`.amp( singleValue ) == .amplitude( singleValue )`, `.offset( singleValue ) == .off( singleValue )`

These are basically aliases for `.mult()` and `.add()` for single values.

---

## Bipolar and unipolar

### bipolar

`.bipolar( amp = 1 )`

Takes unipolar values (values ranged from 0 to 1) and turns them to bipolar (ranged from -1 to 1). The `amp` argument let's you multiply the result by some value if needed.

### unipolar

`.unipolar( amp = 1 )`

Takes bipolar values (-1 to 1) and turns them to unipolar (0 to 1). The `amp` argument let's you multiply the result by some value if needed.

---

## Ranges

### range

`.range( min = 0, max = 1 )`

Allows you to change the range the range of unipolar values to one between `min` and `max`.

### birange

`.birange( min = 0, max = 1 )`

Allows you to change the range the range of bipolar values to one between `min` and `max`.

### clamp

`.clamp( min = 0, max = 1 )`

`clamp` will constrain values between a range from `min` to `max`.

---

## Other transformations

This extension also adds many argument-less transforms. You can use them as such, for example: `osc().abs()`.

### abs, fract, sign

#### abs

Returns the absolute value.

#### fract

Returns only the fractional part of a value.

#### sign

Sign function, will return 1 for positive values and -1 for negative values.

### Trigonometic functions

The following are included: `sin`, `cos`, `tan`, `asin`, `acos`, `atan`

### Exponential and rational functions

The following are included: `exp`, `log`, `exp2`, `log2`, `sqrt`, `inversesqrt`