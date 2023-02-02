// blend modes
// https://www.shadertoy.com/view/XdS3RW
// https://www.w3.org/TR/compositing-1
// https://raw.githubusercontent.com/samarthgulati/hydra-blockly/master/image-editing-glsl-functions.js

console.log("hydra-blending-modes is deprecated, I recomment using hydra-blend instead")

var blendmodes_glsl_fns = [
  // vec3 darken( vec3 s, vec3 d )
  // {
  // 	return min(s,d);
  // }
  {
    name: "darken",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(min(_c0a,_c1a), _c0.a);`
  },

  // vec3 multiply( vec3 s, vec3 d )
  // {
  // 	return s*d;
  // }
  {
    name: "multiply",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a * _c1a, _c0.a);`
  },

  // vec3 colorBurn( vec3 s, vec3 d )
  // {
  // 	return 1.0 - (1.0 - d) / s;
  // }
  {
    name: "colorBurn",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(1.0 - (1.0 - _c1a) / _c0a, _c0.a);`
  },

  // vec3 linearBurn( vec3 s, vec3 d )
  // {
  // 	return s + d - 1.0;
  // }
  {
    name: "linearBurn",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a - 1.0, _c0.a);`
  },

  // vec3 darkerColor( vec3 s, vec3 d )
  // {
  // 	return (s.x + s.y + s.z < d.x + d.y + d.z) ? s : d;
  // }
  {
    name: "darkerColor",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return (_c0a.r + _c0a.g + _c0a.b < _c1a.r + _c1a.g + _c1a.b) ? vec4(_c0a, _c0.a) : vec4(_c1a, _c0.a);`
  },

  // vec3 lighten( vec3 s, vec3 d )
  // {
  // 	return max(s,d);
  // }
  {
    name: "lighten",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(max(_c0a,_c1a), _c0.a);`
  },

  // vec3 screen( vec3 s, vec3 d )
  // {
  // 	return s + d - s * d;
  // }
  {
    name: "screen",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a - _c0a * _c1a, _c0.a);`
  },

  // vec3 colorDodge( vec3 s, vec3 d )
  // {
  // 	return d / (1.0 - s);
  // }
  {
    name: "colorDodge",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return _c0a == vec3(0.) ? vec4(0.) : _c1a == vec3(1.) ? vec4(1.) : vec4(_c1a / (1.0 - _c0a), _c0.a);`
  },

  // vec3 linearDodge( vec3 s, vec3 d )
  // {
  // 	return s + d;
  // }
  {
    name: "linearDodge",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a, _c0.a);`
  },

  // vec3 lighterColor( vec3 s, vec3 d )
  // {
  // 	return (s.x + s.y + s.z > d.x + d.y + d.z) ? s : d;
  // }
  {
    name: "lighterColor",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return (_c0a.r + _c0a.g + _c0a.b > _c1a.r + _c1a.g + _c1a.b) ? vec4(_c0a, _c0.a) : vec4(_c1a, _c0.a);`
  },

  // float overlay( float s, float d )
  // {
  // 	return (d < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);
  // }
  // vec3 overlay( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = overlay(s.x,d.x);
  // 	c.y = overlay(s.y,d.y);
  // 	c.z = overlay(s.z,d.z);
  // 	return c;
  // }
  {
    name: "overlay",
    type: "combine",
    inputs: [],
    glsl: `   vec4 o;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   o.r = (_c1a.r < 0.5) ? 2.0 * _c0a.r * _c1a.r : 1.0 - 2.0 * (1.0 - _c0a.r) * (1.0 - _c1a.r);
 	 o.g = (_c1a.g < 0.5) ? 2.0 * _c0a.g * _c1a.g : 1.0 - 2.0 * (1.0 - _c0a.g) * (1.0 - _c1a.g);
   o.b = (_c1a.b < 0.5) ? 2.0 * _c0a.b * _c1a.b : 1.0 - 2.0 * (1.0 - _c0a.b) * (1.0 - _c1a.b);
   o.a = _c0.a;
 	 return o;`
  },

  // float softLight( float s, float d )
  // {
  // 	return (s < 0.5) ? d - (1.0 - 2.0 * s) * d * (1.0 - d)
  // 		: (d < 0.25) ? d + (2.0 * s - 1.0) * d * ((16.0 * d - 12.0) * d + 3.0)
  // 					 : d + (2.0 * s - 1.0) * (sqrt(d) - d);
  // }
  // vec3 softLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = softLight(s.x,d.x);
  // 	c.y = softLight(s.y,d.y);
  // 	c.z = softLight(s.z,d.z);
  // 	return c;
  // }
  {
    name: "softLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (_c0a.r < 0.5) ? _c1a.r - (1.0 - 2.0 * _c0a.r) * _c1a.r * (1.0 - _c1a.r) : (_c1a.r < 0.25) ? _c1a.r * ((16.0 * _c1a.r - 12.0) * _c1a.r + 4.0) : _c1a.r + (2.0 * _c0a.r - 1.0) * (sqrt(_c1a.r) - _c1a.r);
   c.g = (_c0a.g < 0.5) ? _c1a.g - (1.0 - 2.0 * _c0a.g) * _c1a.g * (1.0 - _c1a.g) : (_c1a.g < 0.25) ? _c1a.g * ((16.0 * _c1a.g - 12.0) * _c1a.g + 4.0) : _c1a.g + (2.0 * _c0a.g - 1.0) * (sqrt(_c1a.g) - _c1a.g);
   c.b = (_c0a.b < 0.5) ? _c1a.b - (1.0 - 2.0 * _c0a.b) * _c1a.b * (1.0 - _c1a.b) : (_c1a.b < 0.25) ? _c1a.b * ((16.0 * _c1a.b - 12.0) * _c1a.b + 4.0) : _c1a.b + (2.0 * _c0a.b - 1.0) * (sqrt(_c1a.b) - _c1a.b);
   c.a = _c0.a;
   //(_c1a.a < 0.5) ? _c0a.a - (1.0 - 2.0 * _c1a.a) * _c0a.a * (1.0 - _c0a.a) : (_c0a.a < 0.25) ? _c0a.a * ((16.0 * _c0a.a - 12.0) * _c0a.a + 4.0) : _c0a.a + (2.0 * _c1a.a - 1.0) * (sqrt(_c0a.a) - _c0a.a);
   return c;`
  },

  // float hardLight( float s, float d )
  // {
  // 	return (s < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);
  // }

  // vec3 hardLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = hardLight(s.x,d.x);
  // 	c.y = hardLight(s.y,d.y);
  // 	c.z = hardLight(s.z,d.z);
  // 	return c;
  // }

  {
    name: "hardLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (_c0a.r < 0.5) ? 2.0 * _c0a.r * _c1a.r : 1.0 - 2.0 * (1.0 - _c0a.r) * (1.0 - _c1a.r);
   c.g = (_c0a.g < 0.5) ? 2.0 * _c0a.g * _c1a.g : 1.0 - 2.0 * (1.0 - _c0a.g) * (1.0 - _c1a.g);
   c.b = (_c0a.b < 0.5) ? 2.0 * _c0a.b * _c1a.b : 1.0 - 2.0 * (1.0 - _c0a.b) * (1.0 - _c1a.b);
   c.a = _c0.a;
   return c;`
  },

  // float vividLight( float s, float d )
  // {
  // 	return (s < 0.5) ? 1.0 - (1.0 - d) / (2.0 * s) : d / (2.0 * (1.0 - s));
  // }

  // vec3 vividLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = vividLight(s.x,d.x);
  // 	c.y = vividLight(s.y,d.y);
  // 	c.z = vividLight(s.z,d.z);
  // 	return c;
  // }

  {
    name: "vividLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (_c0a.r < 0.5) ? 1.0 - (1.0 - _c1a.r) / (2.0 * _c0a.r) : _c1a.r / (2.0 * (1.0 - _c0a.r));
   c.g = (_c0a.g < 0.5) ? 1.0 - (1.0 - _c1a.g) / (2.0 * _c0a.g) : _c1a.g / (2.0 * (1.0 - _c0a.g));
   c.b = (_c0a.b < 0.5) ? 1.0 - (1.0 - _c1a.b) / (2.0 * _c0a.b) : _c1a.b / (2.0 * (1.0 - _c0a.b));
   c.a = _c0.a;
   return c;`
  },

  // vec3 linearLight( vec3 s, vec3 d )
  // {
  // 	return 2.0 * s + d - 1.0;
  // }

  {
    name: "linearLight",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(2.0 * _c0a + _c1a - 1.0, _c0.a);`
  },

  // float pinLight( float s, float d )
  // {
  // 	return (2.0 * s - 1.0 > d) ? 2.0 * s - 1.0 : (s < 0.5 * d) ? 2.0 * s : d;
  // }

  // vec3 pinLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = pinLight(s.x,d.x);
  // 	c.y = pinLight(s.y,d.y);
  // 	c.z = pinLight(s.z,d.z);
  // 	return c;
  // }

  {
    name: "pinLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (2.0 * _c0a.r - 1.0 > _c1a.r) ? 2.0 * _c0a.r - 1.0 : (_c0a.r < 0.5 * _c1a.r) ? 2.0 * _c0a.r : _c1a.r;
   c.g = (2.0 * _c0a.g - 1.0 > _c1a.g) ? 2.0 * _c0a.g - 1.0 : (_c0a.g < 0.5 * _c1a.g) ? 2.0 * _c0a.g : _c1a.g;
   c.b = (2.0 * _c0a.b - 1.0 > _c1a.b) ? 2.0 * _c0a.b - 1.0 : (_c0a.b < 0.5 * _c1a.b) ? 2.0 * _c0a.b : _c1a.b;
   c.a = _c0.a;
   return c;`
  },

  // vec3 hardMix( vec3 s, vec3 d )
  // {
  // 	return floor(s + d);
  // }

  {
    name: "hardMix",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(floor(_c0a + _c1a), _c0.a);`
  },

  // vec3 difference( vec3 s, vec3 d )
  // {
  // 	return abs(d - s);
  // }

  {
    name: "difference",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(abs(_c1a - _c0a), _c0.a);`
  },

  // vec3 exclusion( vec3 s, vec3 d )
  // {
  // 	return s + d - 2.0 * s * d;
  // }
  {
    name: "exclusion",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a - 2.0 * _c0a * _c1a, _c0.a);`
  },

  // vec3 subtract( vec3 s, vec3 d )
  // {
  // 	return s - d;
  // }
  {
    name: "subtract",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a - _c1a, _c0.a);`
  },

  // vec3 divide( vec3 s, vec3 d )
  // {
  // 	return s / d;
  // }
  {
    name: "divide",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a / _c1a, _c0.a);`
  },

  // //	rgb<-->hsv functions by Sam Hocevar
  // //	http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl
  // vec3 rgb2hsv(vec3 c)
  // {
  // 	vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  // 	vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  // 	vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  // 	float d = q.x - min(q.w, q.y);
  // 	float e = 1.0e-10;
  // 	return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  // }

  // vec3 hsv2rgb(vec3 c)
  // {
  // 	vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  // 	vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  // 	return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  // }

  // vec3 hue( vec3 s, vec3 d )
  // {
  // 	d = rgb2hsv(d);
  // 	d.x = rgb2hsv(s).x;
  // 	return hsv2rgb(d);
  // }
  {
    name: "hueBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   _c1a = _rgbToHsv(_c1a);
   _c1a.x = _rgbToHsv(_c0a).x;
   return vec4(_hsvToRgb(_c1a), _c0.a);`
  },

  // vec3 color( vec3 s, vec3 d )
  // {
  // 	s = rgb2hsv(s);
  // 	s.z = rgb2hsv(d).z;
  // 	return hsv2rgb(s);
  // }

  {
    name: "colorBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   _c0a = _rgbToHsv(_c0a);
   _c0a.z = _rgbToHsv(_c1a).z;
   return vec4(_hsvToRgb(_c0a), _c0.a);`
  },

  // vec3 saturation( vec3 s, vec3 d )
  // {
  // 	d = rgb2hsv(d);
  // 	d.y = rgb2hsv(s).y;
  // 	return hsv2rgb(d);
  // }

  {
    name: "saturationBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   _c1a = _rgbToHsv(_c1a);
   _c1a.y = _rgbToHsv(_c0a).y;
   return vec4(_hsvToRgb(_c1a), _c0.a);`
  },

  // vec3 luminosity( vec3 s, vec3 d )
  // {
  // 	float dLum = dot(d, vec3(0.3, 0.59, 0.11));
  // 	float sLum = dot(s, vec3(0.3, 0.59, 0.11));
  // 	float lum = sLum - dLum;
  // 	vec3 c = d + lum;
  // 	float minC = min(min(c.x, c.y), c.z);
  // 	float maxC = max(max(c.x, c.y), c.z);
  // 	if(minC < 0.0) return sLum + ((c - sLum) * sLum) / (sLum - minC);
  // 	else if(maxC > 1.0) return sLum + ((c - sLum) * (1.0 - sLum)) / (maxC - sLum);
  // 	else return c;
  // }
  {
    name: "luminosityBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   float dLum = dot(_c1a, vec3(0.3, 0.59, 0.11));
	 float sLum = dot(_c0a, vec3(0.3, 0.59, 0.11));
	 float lum = sLum - dLum;
	 vec3 c = _c1a + lum;
	 float minC = min(min(c.x, c.y), c.z);
	 float maxC = max(max(c.x, c.y), c.z);
	 if(minC < 0.0) return vec4(sLum + ((c - sLum) * sLum) / (sLum - minC), _c0.a);
	 else if(maxC > 1.0) return vec4(sLum + ((c - sLum) * (1.0 - sLum)) / (maxC - sLum), _c0.a);
	 else return vec4(c, _c0.a);`
  }
];

blendmodes_glsl_fns.forEach((fn) => {setFunction(fn)})
blendmodes_list = blendmodes_glsl_fns.map(a => a.name)

console.log(blendmodes_list)
