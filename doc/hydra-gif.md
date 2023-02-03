# hydra-gif

Load `.gif` files to Hydra sources.

## Overview

This extension uses [this GIF to canvas script](https://stackoverflow.com/questions/48234696/how-to-put-a-gif-with-canvas). This method has to completely uncompress the GIF so try to keep your GIFs light. Each source gets their own `.gif` property which allows you to change how the gif plays.

## Usage

### .initGif()

`s0.initGif(url, delay, params)`

Initialize a running GIF in the given source. `delay` allows you to set a delay in milliseconds from frame to frame, however this argument is optional and you can change it later. `params` is an object with properties for the regl texture that will act as the source, as the same with any other `.init` method.

### s0.gif

`s0.gif`

This is the object representing the gif, here are some of its useful properties:

* `s0.gif.delay` : change the delay in milliseconds from frame to frame
* `s0.gif.playSpeed` : change the play speed overall, you can set to negative values to go on reverse
* `s0.gif.width`
* `s0.gif.height`