# hydra-text

A text source for Hydra

## hydraText

`hydraText` are the default settings for hydra-text, which you can change:

```js
hydraText.font = "serif";

// these are the defaults:
hydraText = {
        font: "sans-serif",
        fontStyle: "normal",
        textAlign: "center",
        fillStyle: "white",
        strokeStyle: "white",
        lineWidth: 8,
    };
```

Settings are set to a CanvasRenderingContext2D, find more about it [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle). However note that the hydra-text `font` setting doesn't work the same as the context's `font` property. On hydra-text, `font` should only specify the font-family. This is because it needs to do some resizing and measurements of the text before writing it while the context's `font` property allows you to resize it.

## text

`text( str, config )`

* str: the text you want to write
* config: either an object with the properties you want to set, or a string with the font you want

## strokeText

`strokeText( str, config )`

Same as `text` but draws the outline of the text instead

## strokeFillText

`strokeFillText( str, config )`