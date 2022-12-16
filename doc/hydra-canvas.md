# hydra-canvas
This extension provides several methods for modifying the appearance and behavior of a canvas element in a web page.

## The canvas object
canvas: A reference to the canvas element with a class of bg-black. This makes this extension only work within the hydra editor.

## Methods

### `setLinear()`
Sets the imageRendering property of the canvas element to auto, which causes the browser to use a linear interpolation algorithm for scaling the image.

### `setNearest()`
Sets the imageRendering property of the canvas element to pixelated, which causes the browser to use nearest neighbor interpolation for scaling the image. This results in a pixelated appearance when the canvas is scaled.

### `setFullscreen(full=true)`
Sets the width and height of the canvas element to 100% if full is true, or an empty string if full is false. This causes the canvas to fill the available space in the parent element.

### `setAlign(align='right')`
Sets the text-align property of the parent element of the canvas element to the specified value. The default value is 'right'.

### `setRelativeSize(ratio)`
Sets the width and height of the canvas element to a specified ratio of the current width and height.

## Examples

```javascript
// Set the canvas to fill the available space in the parent element
canvas.setFullscreen();

// Set the canvas to use nearest neighbor interpolation for scaling
canvas.setNearest();

// Set the canvas to be 50% of its current size
canvas.setRelativeSize(0.5);

// Set the parent element of the canvas to align its contents to the left
canvas.setAlign('left');
```
