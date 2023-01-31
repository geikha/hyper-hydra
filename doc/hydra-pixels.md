# hydra-pixels

---
This extension adds a functionality to each Hydra output that allows you to read the content of the pixels displayed.

## Example

```js
osc(40,.09,1.5)
 .diff(osc(20).luma())
.out()

oct = ()=> shape(8,.3).diff(shape(8,.28)).luma()
src(o0)
 .layer(
    oct()
          .color(1,0,0)
          .scale(()=>1+(pixel[0]/255))
    )
   .layer(
    oct()
          .color(0,0,1)
          .scale(()=>1+(pixel[2]/255))
    )
 .layer(src(o0).scale(128).mask(shape(4,.03,0)))
 .out(o1)

render(o1)

update = ()=> {
  pixel = o0.read(width/2,height/2) // center of the screen
}
```

[open in hydra](https://hydra.ojack.xyz/?sketch_id=EOQUdowhyZmbRJIj)

---

## Functions

`Output` refers to a hydra output such as `o0`, `o1`, etc.

### Output.read()

`Output.read( x = 0, y = 0, w = 1, h = 1 )`

* `x` ::  x position from which to start reading
* `y` :: y position from which to start reading
* `w` :: width of the area to be read
* `y` :: height of the area to be read

By default this function returns only the pixel at the position specified by the two first arguments.

### Output.readAll()

`Output.read()`

Returns all pixels in the output.

## How to use them

Any of the mentioned functions will return an array (actually, a Uint8Array) with all the pixels components in order. For example, retrieving one pixel with return something like `[255,0,20,240]`, each value corresponding to rgba accordingly. Retrieving two pixels will return something like `[255,0,20,240,250,0,10,240]`, with the rgba components of each pixel every 4 elements. Users of p5 will be familiar with this way of using arrays.

### Making Hydra react to pixels

If you want Hydra to react to pixels you can't simply `osc().rotate(()=>o0.read()[0]).out()`, this will create a feedback between framebuffers or something like that (it throws an error and doesn't do what it's expected, that's the important bit innit?). In order to retrieve values every frame you have to first assign them to a variable in Hydra's `update` function. This is a function that runs every time a frame is processed, similar to p5's `draw`. The [example](#example) above shows this in action in the following bit:

```js
update = ()=> {
  pixel = o0.read(innerWidth/2,innerHeight/2) // center of the screen
}
```

Now you can use `pixel` in your Hydra code.

### Warning

Sending `read` values bigger than the width or height of the canvas as xy positions, or exceeding the canvas when sending values for the width and height of the area to read, can crash Hydra entirely.
