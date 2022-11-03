window.oP = o0.constructor.prototype;
oP.fboSettings = Array(2).fill({
  mag: "nearest",
  min: "nearest",
  width: width,
  height: height,
  format: "rgba",
});
oP.setFbos = function (fbo0, fbo1) {
  var colors = fbo1 ? [fbo0, fbo1] : [fbo0, fbo0];
  this.fboSettings = colors.map((x, i) => {
    return { ...this.fboSettings[i], width: width, height: height, ...x };
  });
  this.fbos = this.fboSettings.map((x) =>
    this.regl.framebuffer({
      color: this.regl.texture(x),
      depthStencil: false,
    })
  );
};
oP.setNearest = function () {
  this.setFbos({});
};
oP.setLinear = function () {
  this.setFbos({ mag: "linear", min: "linear" });
};
o0.setWrap = function () {
  this.setFbos({ wrapS: "wrap", wrapT: "wrap" });
};
o0.setClamp = function () {
  this.setFbos({ wrapS: "clamp", wrapT: "clamp" });
};
o0.setMirror = function () {
  this.setFbos({ wrapS: "mirror", wrapT: "mirror" });
};
oS = { outputs: choo.state.hydra.hydra.o };
oS.setNearest = function () {
  this.outputs.forEach((x) => x.setNearest());
};
oS.setLinear = function () {
  this.outputs.forEach((x) => x.setLinear());
};
oS.setWrap = function () {
  this.outputs.forEach((x) => x.setWrap());
};
oS.setClamp = function () {
  this.outputs.forEach((x) => x.setClamp());
};
oS.setMirror = function () {
  this.outputs.forEach((x) => x.setMirror());
};
oS.setFbos = function (x, y) {
  this.outputs.forEach((x) => x.setFbos(x, y));
};
