//hydra-pixels
//read pixels from each hydra output
//by RITCHSE

window.regl = o0.regl
regl.attributes.preserveDrawingBuffer = true
window.Output = o0.constructor.prototype

Output.read = function (x = 0, y = 0, w = 1, h = 1) {
    return regl.read({
        framebuffer: this.fbos[0],
        x: x,
        y: y,
        width: w,
        height: h
    })
}
Output.readAll = function () {
    return regl.read({
        framebuffer: this.fbos[0],
        x: 0,
        y: 0,
        width: window.width,
        height: window.height
    })
}