//hydra-pixels
//read pixels from each hydra output
//by RITCHSE

window.regl = o0.regl
regl.attributes.preserveDrawingBuffer = true
window.oP = o0.constructor.prototype;

oP.read = function (x = 0, y = 0, w = 1, h = 1) {
    return regl.read({
        framebuffer: this.fbos[this.pingPongIndex],
        x: x,
        y: y,
        width: w,
        height: h
    })
}
oP.readAll = function () {
    return regl.read({
        framebuffer: this.fbos[this.pingPongIndex],
        x: 0,
        y: 0,
        width: window.width,
        height: window.height
    })
}
