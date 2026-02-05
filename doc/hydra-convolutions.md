# hydra-convolutions

The hydra-convolutions extension adds image convolution functions to Hydra, allowing you to apply blur, sharpen, edge detection, and other kernel-based effects.

## Available convolution functions

| Name              | Description                                      | Has parameter `k` |
|-------------------|--------------------------------------------------|-------------------|
| `sharpen`         | Classic 3x3 sharpen                              | ✓                 |
| `sharpenMore`     | Stronger 3x3 sharpen                             | ✓                 |
| `lineSharpen`     | Horizontal 1x3 sharpen                           | ✓                 |
| `emboss`          | Emboss/relief effect                             | ✓                 |
| `blur`            | Gaussian 3x3 blur                                |                   |
| `blur5`           | Gaussian 5x5 blur                                |                   |
| `blur7`           | Gaussian 7x7 blur                                |                   |
| `boxBlur`         | Box 3x3 blur                                     |                   |
| `boxBlur5`        | Box 5x5 blur                                     |                   |
| `horizontalBlur`  | Horizontal motion blur                           |                   |
| `verticalBlur`    | Vertical motion blur                             |                   |
| `diagonalBlur`    | Diagonal motion blur (top-right to bottom-left)  |                   |
| `diagonalBlur2`   | Diagonal motion blur (top-left to bottom-right)  |                   |
| `lineBlur`        | Horizontal 1x3 blur                              |                   |
| `lineBlur5`       | Horizontal 1x5 blur                              |                   |
| `sobelY`          | Sobel vertical edge detection                    |                   |
| `sobelX`          | Sobel horizontal edge detection                  |                   |
| `sobelDiagonal`   | Sobel diagonal edge detection                    |                   |
| `sobelDiagonal2`  | Sobel diagonal edge detection (other direction)  |                   |
| `prewittY`        | Prewitt vertical edge detection                  |                   |
| `prewittX`        | Prewitt horizontal edge detection                |                   |
| `prewittDiagonal` | Prewitt diagonal edge detection                  |                   |
| `prewittDiagonal2`| Prewitt diagonal edge detection (other direction)|                   |
| `edge`            | Laplacian edge detection                         |                   |

---

## Variants

Each convolution function comes in multiple variants for different use cases:

| Suffix   | Applies to            | Example            |
|----------|-----------------------|--------------------|
| *(none)* | RGB channels          | `blur()`           |
| `Luma`   | Luminance only        | `blurLuma()`       |
| `OnY`    | Y channel (YUV)       | `blurOnY()`        |
| `OnUV`   | UV channels (YUV)     | `blurOnUV()`       |
| `OnIQ`   | IQ channels (YIQ)     | `blurOnIQ()`       |

The `Luma` variant outputs a grayscale image. The `OnY`, `OnUV`, and `OnIQ` variants apply the convolution to specific colorspace channels while preserving the others.

---

## Syntax

All convolution functions are source functions, meaning they take a texture as input and return a processed texture.

### Basic usage

**`convolution( texture, jump, amp )`**

* `texture`: The input texture (default: `o0`)
* `jump`: Pixel jump distance, controls kernel spread (default: `1`)
* `amp`: Output amplitude/strength multiplier (default: `1`)

```js
osc(20,.1,2).out(o0)
blur(o0).out(o1)
```

### With parameter `k`

Some kernels (sharpen, emboss) have a strength parameter:

**`convolution( texture, k, jump, amp )`**

* `k`: Kernel strength parameter (default: `1`)

```js
osc(20,.1,2).out(o0)
sharpen(o0, 2).out(o1)     // stronger sharpening
emboss(o0, 0.5).out(o1)    // subtle emboss
```

---

## Examples

### Blurring

```js
// Simple blur
osc(30,.1,2).out(o0)
blur(o0).out(o1)

// Stronger blur with larger kernel
blur5(o0).out(o1)

// Even stronger
blur7(o0).out(o1)

// Spread the blur further apart
blur(o0, 3).out(o1)
```

### Sharpening

```js
// Basic sharpen
osc(30,.1,2).out(o0)
sharpen(o0).out(o1)

// Adjust sharpening strength with k parameter
sharpen(o0, 0.5).out(o1)   // subtle
sharpen(o0, 2).out(o1)     // strong
```

### Edge detection

```js
// Detect vertical edges
osc(10).out(o0)
sobelY(o0).out(o1)

// Detect horizontal edges
sobelX(o0).out(o1)

// Detect all edges (Laplacian)
edge(o0).out(o1)

// Combine edge detection with original
osc(10).out(o0)
src(o0).add(edge(o0), 0.5).out(o1)
```

### Motion blur effects

```js
// Horizontal motion blur
osc(30).out(o0)
horizontalBlur(o0, 2).out(o1)

// Diagonal streaks
diagonalBlur(o0, 3).out(o1)
```

### Emboss

```js
// Emboss effect
gradient().out(o0)
emboss(o0, 1).out(o1)
```

### Colorspace-aware convolutions

```js
// Blur only the luminance (keeps colors sharp)
osc(20,.1,2).out(o0)
blurOnY(o0).out(o1)

// Blur only the color information (keeps edges sharp)
blurOnUV(o0).out(o1)

// Sharpen luminance only
sharpenLuma(o0, 1).out(o1)
```

### Chaining convolutions

```js
// Blur then sharpen (unsharp mask-like effect)
osc(30,.1,2).out(o0)
blur(o0).out(o1)
src(o0).blend(sharpen(o1, 2), 0.5).out(o2)
```

---

## Custom kernels

You can define your own convolution kernels using `setConvolutionFunction()`:

```js
setConvolutionFunction({
    name: "myBlur",
    kernel: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ],
    multiplier: 1/9
})

// Now you can use it
osc().out(o0)
myBlur(o0).out(o1)
```

### Kernel definition

| Property     | Description                                              |
|--------------|----------------------------------------------------------|
| `name`       | The function name (required)                             |
| `kernel`     | 2D array of weights (required)                           |
| `multiplier` | Value to multiply the result by (optional, default: `1`) |

### Using parameters in kernels

You can use the string `"k"` in your kernel to create a parameterized convolution:

```js
setConvolutionFunction({
    name: "customSharpen",
    kernel: [
        [0, "-k", 0],
        ["-k", "(4.0*k)+1.0", "-k"],
        [0, "-k", 0]
    ]
})

// k becomes a parameter
customSharpen(o0, 2).out(o1)  // k = 2
```

**Note:** When you define a custom kernel, all five variants (regular, Luma, OnY, OnUV, OnIQ) are automatically generated.

---

## Notes

### Performance

Larger kernels (5x5, 7x7) are more computationally expensive. Use them sparingly or consider using the line blur variants for directional effects. You can also try different `jump` values, which can act some-what similarly.

### Multiple outputs and ping-pong desync

Hydra outputs use double framebuffers (ping-pong buffers). This means each frame is rendered to buffer A, then B, then A again and so on, for all buffers. If you create feedback loops across multiple outputs that depend on each other's previous frame, you will run into a problem. Such a feedback system would actually require Hydra to do a proper renderpass, which it can't do. The two outputs will become desynchronized, this often leads to a visible strobing.

For example, this pattern is prone to that behaviour:

```js
sharpenOnY(o1,1.2).blend(noise(),.01).out(o0)
blur(o0).scale(1.1).out(o1)
```

Because each output updates against its own ping-pong buffer, the feedback loop effectively alternates states between frames, producing a strobe or period-doubling bifurcation in the visual result. Effectively, two different feedback systems are running, one in frames A and the other in frames B.

You can reduce (not eliminate) that instability by adding temporal persistence: mixing a bit of the previous output back into the current update. This softens the desync and produces a more continuous visual transition, for example:

```js
sharpenOnY(o1,1.2)
    .blend(noise(),.01)
    .blend(o0,.4)
    .out(o0)

blur(o0).scale(1.1).out(o1)
```

Here `.blend(o0,.4)` feeds some of `o0` back into its own update so the alternating states are dampened. Note this changes the system's dynamics (it is not a strict fix and your visual would look different without the desync), but it is a practical technique to reduce strobing when using multiple interdependent outputs.