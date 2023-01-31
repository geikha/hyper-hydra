window.harrays = {};

harrays.newOperator = function (self, f) {
  return function (arr) {
    for (let i = 0; i < self.length; i++) {
      if (Array.isArray(arr)) {
        self[i] = arr[i] ? f(self[i], arr[i]) : self[i];
      } else {
        self[i] = f(self[i], arr);
      }
    }
    return self;
  };
};
harrays.newWrapOperator = function (self, f) {
  return function (arr) {
    for (let i = 0; i < self.length; i++) {
      if (Array.isArray(arr)) {
        self[i] = f(self[i], arr[i % arr.length]);
      } else {
        self[i] = f(self[i], arr);
      }
    }
    return self;
  };
};

// operators

const operators = {
  add: (x, y) => x + y,
  sub: (x, y) => x - y,
  div: (x, y) => x / y,
  mult: (x, y) => x * y,
  mod: (x, y) => x % y
}
Object.entries(operators).forEach(function ([op, f]) {
  Array.prototype[op] = function (arr) {
    return harrays.newOperator(this, f)(arr)
  }
  Array.prototype[op+"Wrap"] = function (arr) {
    return harrays.newWrapOperator(this, f)(arr)
  }
})

// methods
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

// generators
Array.random = function (l = 10, min = 0, max = 1) {
  return Array.from({ length: l }, () => Math.random() * (max - min + 1) + min);
};
Array.range = function (start, end, step = 1) {
  return start >= end ? [start] : [start, ...range(start + step, end)];
};
Array.run = function (end = 10, step = 1) {
  return Array.range(0, end, step);
};
