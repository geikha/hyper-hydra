# hydra-debug

Adds tools to make it easier to debug sketches. As of now there's only one tool, but it's a useful one!

## Show fragment shader on screen

### .debug()

`osc().debug()`

The `debug` function will open a pop up inside Hydra showing the resulting fragment shader of any hydra texture.

`osc().debug(output)`

If you pass an output to the debug function, the pop up will be editable and will also have a `>` (run) button, allowing you to edit the fragment shader and re-run it. Note that the highlighting won't update until you press the `>` button.