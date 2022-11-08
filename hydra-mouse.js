function Mouse(canvas) {
  this.x = 0;
  this.y = 0;
  this.ax = 0;
  this.ay = 0;
  this.cx = 0;
  this.cy = 0;
  this.rx = 0;
  this.ry = 0;
  this.crx = 0;
  this.cry = 0;
  this.posx = 0;
  this.posy = 0;
  this.cposx = 0;
  this.cposy = 0;
  this.canvas = canvas;
  let self = this;

  this.handlePointerMove = function (ev) {
    const bound = self.canvas.getBoundingClientRect();
    self.x = ev.clientX;
    self.y = ev.clientY;
    self.ax = ev.pageX;
    self.ay = ev.pageY;
    self.cx = self.ax - bound.left;
    self.cy = self.ay - bound.top;
    self.rx = self.x / window.innerWidth;
    self.ry = self.y / window.innerHeight;
    self.crx = self.cx / bound.width;
    self.cry = self.cy / bound.height;
    self.posx = -self.x / window.innerWidth + 0.5;
    self.posy = -self.y / window.innerHeight + 0.5;
    self.cposx = -self.cx / bound.width + 0.5;
    self.cposy = -self.cy / bound.height + 0.5;
  };

  if (window.mouse.handlePointerMove)
    window.removeEventListener("pointermove", window.mouse.handlePointerMove);
  window.addEventListener("pointermove", this.handlePointerMove);
}
if (!window.canvas) window.canvas = document.querySelector("canvas.bg-black");
window.mouse = new Mouse(window.canvas);
