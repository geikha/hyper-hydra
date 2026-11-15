# hydra-text

A text source for Hydra

## hydraText

`hydraText` are the default settings for hydra-text, which you can change:

```js
hydraText.font = "serif";

// these are the defaults:
window.hydraText = {
        font: "sans-serif",     // the font-family
        fontStyle: "normal",    // normal, bold, etc
        fontSize: "auto",       // must be either "auto", a percentage like "90%", or pixels like "100px" 
        textAlign: "center",    // center, left or right
        fillStyle: "white",     // a css color, CanvasGradient or CanvasPattern
        strokeStyle: "white",   // a css color, CanvasGradient or CanvasPattern
        lineWidth: "2%",        // a percentage of the final fontSize
        lineJoin: "miter",      // miter, bevel or round
        canvasResize: 2,        // a factor by which to resize the canvas that displays the text
        interpolation: "linear",// linear or nearest. represents the interpolation used inside hydra for the text's canvas
    };
```

Settings are set to a CanvasRenderingContext2D, find more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle). However note that the hydra-text `font` setting doesn't work the same as the context's `font` property. On hydra-text, `font` should only specify the font-family. This is because it needs to do some resizing and measurements of the text before writing it while the context's `font` property allows you to resize it.

## Persistent text sources (recommended)

For better performance and memory management, use `createText()` to create reusable text sources:

```js
t0 = createText()
t0.text("Hello World", { font: "Consolas" })

t1 = createText()
t1.strokeFillText("Outlined!", { font: "serif", strokeStyle: "red" })

// Use in your patches - wrap with srcRelMask() to correct aspect ratio
osc().layer(srcRelMask(t0)).layer(srcRelMask(t1)).out()

// Update the text anytime without creating new canvases
t0.text("Updated text!", { font: "Arial" })
```

**Note:** Always use `srcRelMask()` when using persistent text sources to prevent vertical stretching. The one-shot functions (`text()`, `strokeText()`, etc.) do this automatically.

### TextSource methods

All methods return the TextSource instance, allowing you to chain or update:

- `textSource.text(str, config)` - Filled text
- `textSource.strokeText(str, config)` - Outlined text
- `textSource.fillStrokeText(str, config)` - Stroke over fill
- `textSource.strokeFillText(str, config)` - Fill over stroke

### Arrays and functions

Instead of a single string you can pass an array of strings. Just like Hydra's number arrays, the text switches to the next element on each beat, following the global `bpm` and respecting `.fast()` and `.offset()`:

```js
bpm = 120
t0 = createText()
t0.text(["harder", "better", "faster", "stronger"].fast(2))
osc(4, 0.1, 1.2).mask(srcRelMask(t0)).out()

// shift the timing by half a step
t1 = createText()
t1.strokeText(["one", "two", "three"].offset(0.5), { strokeStyle: "red" })
```

You can also pass a function that returns a string. It's checked every frame:

```js
t0.text(() => new Date().toLocaleTimeString())
```

In both cases the text is only redrawn when it actually changes. Arrays and functions work with the one-shot functions too, e.g. `text(["a", "b", "c"])`.

## One-shot functions

These functions create a new canvas each time they're called. Use sparingly as they can fill memory if called repeatedly:

### text

`text( str, config )`

* str: the text you want to write
* config: either an object with the properties you want to set, or a string with the font you want

### strokeText

`strokeText( str, config )`

Same as `text` but draws the outline of the text instead

### strokeFillText

`strokeFillText( str, config )`

Fill over stroke

### fillStrokeText

`fillStrokeText( str, config )`

Stroke over fill