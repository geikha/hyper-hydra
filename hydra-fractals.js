[{
  name: 'mirrorX',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'pos',
      default: 0.5,
    }
  ],
  glsl: `_st.x = 0.0-abs(_st.x-pos)+0.5; return _st;`
},
{
  name: 'mirrorY',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'pos',
      default: 0.5,
    }
  ],
  glsl: `_st.y = 0.0-abs(_st.y-pos)+0.5; return _st;`
},
{
  name: 'mirrorX2',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'pos',
      default: 0.5,
    }
  ],
  glsl: `_st.y = abs(_st.y-pos)+0.5; return _st;`
},
{
  name: 'mirrorY2',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'pos',
      default: 0.5,
    }
  ],
  glsl: `_st.y = abs(_st.y-pos)+0.5; return _st;`
},
{
  name: 'inversion',
  type: 'coord',
  inputs: [],
  glsl: `_st /= dot(_st,_st); return _st;`
}].forEach((x) => setFunction(x))