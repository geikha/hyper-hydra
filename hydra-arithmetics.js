window.gS = osc().constructor.prototype;

function wrapColorCombine(name, color, combine) {
  gS[name] = function (arg, ...args) {
    isArgument =
      typeof arg == "number" ||
      typeof arg == "function" ||
      typeof arg == "string" ||
      arg.constructor.name == "Array";
    return isArgument
      ? this[color](arg)
      : args.length
      ? this[combine](arg, ...args)
      : this[combine](arg);
  };
}

const noInputs = (
  "abs,sign,fract," +
  "sin,cos,tan,asin,acos,atan," +
  "exp,log,exp2,log2,sqrt,inversesqrt"
).split(",");

noInputs.forEach((name) => {
  setFunction({
    name: "_" + name,
    type: "color",
    inputs: [],
    glsl: `return ${name}(_c0);`,
  });
  gS[name] = gS["_" + name];
});

const singleArgument = "mod,min,max,step".split(",");

singleArgument.forEach((name) => {
  setFunction({
    name: "_" + name,
    type: "combine",
    inputs: [],
    glsl: `return ${name}(_c0,_c1);`,
  });
  setFunction({
    name: "_" + name + "_single",
    type: "color",
    inputs: [{ name: "_in", type: "float", default: 1 }],
    glsl: `return ${name}(_c0,_in);`,
  });
  wrapColorCombine(name, "_" + name + "_single", "_" + name);
});

setFunction({
  name: "_div",
  type: "combine",
  inputs: [],
  glsl: `return _c0 / _c1;`,
});
setFunction({
  name: "_div_single",
  type: "color",
  inputs: [{ name: "_in", type: "float", default: 1 }],
  glsl: `return _c0 / _in;`,
});
wrapColorCombine("div", "_div_single", "_div");

setFunction({
  name: "_add",
  type: "combine",
  inputs: [{ type: "float", name: "amount", default: 1 }],
  glsl: `return _c0 + _c1;`,
});
setFunction({
  name: "_add_single",
  type: "color",
  inputs: [{ name: "_in", type: "float", default: 1 }],
  glsl: `return _c0 + _in;`,
});
wrapColorCombine("add", "_add_single", "_add");

setFunction({
  name: "_sub",
  type: "combine",
  inputs: [{ type: "float", name: "amount", default: 1 }],
  glsl: `return _c0 - _c1;`,
});
setFunction({
  name: "_sub_single",
  type: "color",
  inputs: [{ name: "_in", type: "float", default: 1 }],
  glsl: `return _c0 - _in;`,
});
wrapColorCombine("sub", "_sub_single", "_sub");

setFunction({
  name: "_mult",
  type: "combine",
  inputs: [{ type: "float", name: "amount", default: 1 }],
  glsl: `return _c0*(1.0-amount)+(_c0*_c1)*amount;`
});
setFunction({
  name: "_mult_single",
  type: "color",
  inputs: [{ name: "_in", type: "float", default: 1 }],
  glsl: `return _c0 * _in;`,
});
wrapColorCombine("mult", "_mult_single", "_mult");

setFunction({
  name: "amp",
  type: "color",
  inputs: [{ name: "amp", type: "float", default: 1 }],
  glsl: `return _c0 * amp;`,
});
gS.amplitude = gS.amplitude;
setFunction({
  name: "offset",
  type: "color",
  inputs: [{ name: "offset", type: "float", default: 0 }],
  glsl: `return _c0 + offset;`,
});
gS.off = gS.offset;

setFunction({
  name: "_clamp",
  type: "color",
  inputs: [
    { name: "_min", type: "float", default: 0 },
    { name: "_max", type: "float", default: 1 },
  ],
  glsl: `return clamp(_c0, _min, _max);`,
});
gS.clamp = gS._clamp;

setFunction({
  name: "bipolar",
  type: "color",
  inputs: [{ name: "amp", type: "float", default: 1 }],
  glsl: `return ((_c0  * 2.0) - 1.0) * amp;`,
});
setFunction({
  name: "unipolar",
  type: "color",
  inputs: [{ name: "amp", type: "float", default: 1 }],
  glsl: `return ((_c0  + 1.0) * 0.5) * amp;`,
});

setFunction({
  name: "range",
  type: "color",
  inputs: [
    { name: "_min", type: "float", default: 0 },
    { name: "_max", type: "float", default: 1 },
  ],
  glsl: `return _c0 * (_max - _min) + _min;`,
});
setFunction({
  name: "birange",
  type: "color",
  inputs: [
    { name: "_min", type: "float", default: 0 },
    { name: "_max", type: "float", default: 1 },
  ],
  glsl: `return ((_c0  + 1.0) * 0.5) * (_max - _min) + _min;`,
});
