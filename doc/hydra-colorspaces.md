# hydra-colorspaces

The hydra-colorspaces extension adds lots of functions to work with color in many different colorspaces.

## Available colorspaces

| Colorspace      | Elements | Stands for | Range  | Description   |
|-----------------|----------|------------|--------|---------------|
| rgb             | r,g,b,a  | Red, Green, Blue, Alpha    | [0;1] [0;1] [0;1] [0;1] | Good old RGBA 
| cmyk            | c,m,y,k  | Cyan, Magenta, Yellow, Key | [0;1] [0;1] [0;1] [0;1] | Substractive colorspace used in print
| hsv             | h,s,v    | Hue, Saturation, Value (Brightness) | [0;1] [0;1] [0;1] | Cylindrical colorspace where saturation peaks when brightness is 1 
| hsl             | h,s,l    | Hue, Saturation, Lightness          | [0;1] [0;1] [0;1] | Cylindrical colorspace where saturation peaks when lightness is 0.5
| yuv             | y,u,v    | Luminance, Blue difference, Red difference | [0;1] [-0.5;+0.5] [-0.5;+0.5] | Color model used in PAL systems
| yiq             | y,i,q    | Luminance, In-phase, Quadrature | [0;1] [-0.5;+0.5] [-0.5;+0.5] | Color model used in NTSC systems

## Syntax

This extensions automatically defines functions for the different colorspaces, so listing them all wouldn't make sense. Instead of naming each colorspace, for the purpose of this documentation, I'll be generically refering to all color spaces as `cs`, and to **any** of their elements as `el`. For example, instead of `.cmyk.cOffset()`, which offsets the Cyan element in the CMYK colorspace, I'll write `.cs.elOffset()`.

### Arguments

If you read `el` as the argument for a function, it means there's an argument for each element of the colorspace in order. For example, `cs(el,alpha)` would mean `yuv(y,u,v,alpha)` for that colorspace.

### About alpha

Some functions add alpha as a last argument after the elements of the colorspace. This doesn't apply to RGBA, given it already has alpha in it. For example `cs(el=0, alpha=1)` means `rgb(r=0,g=0,b=0,a=1)`.

---

## Functions

### Solid colors

**`cs( el = 0, alpha = 1 )`**
* Example: `hsv(()=>time,1,1).out()`
* Alias: `cs_solid()`


These functions will act similarly to Hydra's `solid()` function, letting you write a particular color in the given colorspace and filling the screen with it.

### Multiply elements

**`.cs( el = 1, alpha = 1 )`**
* Example: `osc(20,.1,2).yuv(1,1,0).out()`
* Alias: `.cs.color()`, `.cs_color()`

These functions will act similarly to Hydra's `.color()` function, allowing you to multiply the value of each element in the colorspace.

#### Multiply a specific element

**`.cs.elMult( amt = 1 )`**
* Example: `gradient().hsl.sMult(.8).out()`
* Alias: `.cs_el_mult()`

### Offset elements

**`.cs.offset( el = 0, alpha = 0 )`**
* Example: `gradient().hsv.offset(.5,-.2,.5).out()`
* Alias: `.cs_offset()`

Offset an element by a given amount. Basically adds the number you give it to the corresponding element.

#### Offset a specific element

**`.cs.elOffset()`**
* Example: `osc().yiq.qOffset(.2).out()`
* Alias: `.cs_el_offset()`

### Invert elements

**`.cs.invert( el = 1, alpha = 0 )`**
* Example: `gradient().cmyk.invert(1,0,1,0).out()`
* Alias: `.cs_invert()`

Invert an element by a given amount. The argument sets interpolation between the original color and the inverted one, that's why the default for elements is 1 while alpha is 0. An inversion here means `1.0 - el` for most elements. For those elements with a bipolar range, inversion is done by calculating `0.0 - el` instead.

#### Invert a specific element

**`.cs.elInvert()`**
* Example: `osc(5,.1,2).yiq.qInvert().out()`
* Alias: `.cs_el_invert()`

### Converting to a given colorspace


**`.cs.to()`**
* Example: `gradient().cmyk.to().out()`
* Alias: `.cs_to()`

Converts the color values of the texture which calls the method to the given colorspace.

### Converting from a given colorspace to RGBA

**`.cs.from()`**
* Example: `gradient().add(solid(0,0,1)).hsv.from().out()`
* Alias: `.cs_from()`

Let's you convert back to RGBA, or interpret any color values as if they were from the given colorspace.

## Other element specific functions

### Retrieving an element

**`cs.el()`**
* Example: `osc(40,.1,Math.PI/2).hsv.h().out()`
* Alias: `.cs_el()`

These functions will work in the same way as Hydra's `r()`, `b()`, `g()`, and `a()` functions. They will simply replicate the given element's value in all channels except alpha and return an opaque image.

### Setting an element

**`cs.elSet( value = 1 )`**
* Example: `osc(8,.1,2).hsv.sSet(.5).out()`
* Alias: `.cs_el_set()`

Allows you to set the given element to a fixed value for all pixels. Shown in the example being used to set the saturation of a texture.

### Modulating an element by a given texture

**Note:** All the modulating functions take only the first value from the texture, or in other words, the red channel. If you want to modulate by another element in the given texture, simply retrieve that element from the texture as shown just above.

#### Setting by a given texture

**`cs.elFrom( texture , amt = 1 )`**
* Example: `rgb(1,0,0).hsl.sFrom(osc(9)).out()`
* Alias: `.cs_el_from()`

Will set the value of the element to the value in the given texture. The `amt` argument allows you to interpolate between the original value for the element and the texture's value.

#### Multiplying by a given texture

**`cs.elMultFrom( texture, amt = 1 )`**
* Example: `gradient().hsl.sMultFrom(osc(9)).out()`
* Alias: `.cs_el_mult_from()`

Will multiply the given element's value by the given texture. The texture's value will be multiplied by the `amt` parameter.

#### Offseting by a given texture

**`cs.elOffsetFrom( texture, amt = 1 )`**
* Example: `gradient().hsl.hOffsetFrom(noise(1,2),.2).out()`
* Alias: `.cs_el_mult_from()`

Will add the texture to the given value. The texture's value will be multiplied by the `amt` parameter.

### Keying by a given element

**`cs.elKey( topThreshold = 0.5 , topTolerance = 0.05 , bottomThreshold = 0 , bottomTolerance = 0 )`**
* Example: `solid().layer(gradient(1).rgb.rKey(.5,0)).out()`
* Alias: `.cs_el_key()`

Similar to Hydra's `luma()`, but instead of keying by luminance, you can key by any element. THese functions will turn transparent any pixel where the given element isn't between the top threshold and the bottom threshold.

**Note:** These functions work with straight alpha, so you might not see changes directly on screen unless you layer it over something else. Similarly to how `osc().color(1,1,1,0).out()` still appears on screen even though it should be completely transparent. If you are someone familiar with straight and premultiplied alpha, you might be interested to join the discussion in [this issue](https://github.com/hydra-synth/hydra-synth/issues/109) I've opened on the hydra-synth repo.

### Applying a transform to a given element

**`cs.elWith( f )`**
* Example: `osc(10,.1,2).rotate().hsv.hWith(x=>x.pixelate(16,32)).out()`
* Alias: `.cs_el_with()`

Inspired by TidalCycles xWith functions, these functions allow you to apply a transform only to a given element. The `f` argument should be a function which receives a texture and returns a texture.

These are basically syntactic sugar for `texture.cs.elFrom(cloneOfTexture.transform().el())`. This means that in order for these to work Hydra has to render the given texture twice, since its cloning it. So be very cautious about performance when using these.