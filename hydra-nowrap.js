const fboSettings = Array(2).fill({
  mag: "nearest",
  min: "nearest",
  width: width,
  height: height,
  wrapS: 'clamp',
  wrapT: 'clamp',
  format: "rgba"
});
choo.state.hydra.hydra.o.forEach((output) => {
  output.fbos = fboSettings.map((x) =>
    output.regl.framebuffer({
      color: output.regl.texture(x),
      depthStencil: false,
    })
  );
});

[
  {
    name: "prev",
    type: "src",
    inputs: [],
    glsl: `return texture2D(prevBuffer, _st);`,
  },
  {
    name: "src",
    type: "src",
    inputs: [
      {
        type: "sampler2D",
        name: "tex",
        default: NaN,
      },
    ],
    glsl: `return texture2D(tex, _st);`,
  },
  {
    name: "scroll",
    type: "coord",
    inputs: [
      {
        type: "float",
        name: "scrollX",
        default: 0.5,
      },
      {
        type: "float",
        name: "scrollY",
        default: 0.5,
      },
      {
        type: "float",
        name: "speedX",
        default: 0,
      },
      {
        type: "float",
        name: "speedY",
        default: 0,
      },
    ],
    glsl: `_st.x += scrollX + time*speedX; _st.y += scrollY + time*speedY; return _st;`,
  },
  {
    name: "scrollX",
    type: "coord",
    inputs: [
      {
        type: "float",
        name: "scrollX",
        default: 0.5,
      },
      {
        type: "float",
        name: "speed",
        default: 0,
      },
    ],
    glsl: `_st.x += scrollX + time*speed; return _st;`,
  },
  {
    name: "modulateScrollX",
    type: "combineCoord",
    inputs: [
      {
        type: "float",
        name: "scrollX",
        default: 0.5,
      },
      {
        type: "float",
        name: "speed",
        default: 0,
      },
    ],
    glsl: `_st.x += _c0.r*scrollX + time*speed; return _st;`,
  },
  {
    name: "scrollY",
    type: "coord",
    inputs: [
      {
        type: "float",
        name: "scrollY",
        default: 0.5,
      },
      {
        type: "float",
        name: "speed",
        default: 0,
      },
    ],
    glsl: `_st.y += scrollY + time*speed; return _st;`,
  },
  {
    name: "modulateScrollY",
    type: "combineCoord",
    inputs: [
      {
        type: "float",
        name: "scrollY",
        default: 0.5,
      },
      {
        type: "float",
        name: "speed",
        default: 0,
      },
    ],
    glsl: ` _st.y += _c0.r*scrollY + time*speed; return _st;`,
  },
].forEach((x) => setFunction(x));
