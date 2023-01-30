window.harrays = {};

harrays.newMethod = (self, f) => {
  return (arr) => {
    if (Array.isArray(arr)) {
      for (let i = 0; i < self.length; i++)
        if (arr[i]) self[i] = f(self[i], arr[i]);
    } else for (let i = 0; i < self.length; i++) self[i] = f(self[i], arr);
    return self;
  };
};

Array.prototype.add = function (arr) {
  return harrays.newMethod(this, (x, y) => x + y)(arr);
};
Array.prototype.sub = function (arr) {
  return harrays.newMethod(this, (x, y) => x - y)(arr);
};
Array.prototype.div = function (arr) {
  return harrays.newMethod(this, (x, y) => x / y)(arr);
};
Array.prototype.mult = function (arr) {
  return harrays.newMethod(this, (x, y) => x * y)(arr);
};

Array.prototype.shuffle = function () {
  return this.sort(() => Math.random() - 0.5);
};

Array.prototype.zfill = function (amt, z = 0) {
  for (let i = 0; i < amt; i++) this.push(z);
  return this;
};

Array.prototype.rotate = function (n) {
  const len = this.length;
  this.push(...this.splice(0, ((-n % len) + len) % len));
  return this;
};
Array.prototype.rot = Array.prototype.rotate;
