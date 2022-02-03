//hydra-gsls
//code glsl on the fly inside Hydra code
//by RITCHSE
//docs: https://github.com/ritchse/hydra-extensions/blob/main/doc/hydra-glsl.md

gS = osc().constructor.prototype

window.glslExtension = {
	inputArray: ()=> new Array(10)
		.fill("i")
		.map((x, i) => ({ name: x + i, type: "float", default: 1 })),
	nodeCount: 0,
	prefix: "vec2 uv = _st; vec2 st = _st;\n",
	checkCode: function (code) {
		code = code.trim();
		lines = code.split(";");
		if (!lines.at(-1)) lines.pop();
		ll = lines.length - 1;
		lines[ll] = lines[ll].trim();
		lines[ll] =
			"\n" +
			(lines[ll].substring(0, 6) != "return"
				? "return " + lines[ll]
				: lines[ll]) +
			";";
		code = lines.join(";");
		return code;
	},
	getObjAndArgs: function (type, args) {
		inputArray = false;
		if (args[0] instanceof Array) {
			inputArray = this.inputArray().map((x, i) => {
				x.name = args[i] ? args[i][0] : x.name;
				return x;
			});
            inputArray = inputArray.slice(0,args.length)
			args = args.map((x) => x[1]);
		}
		obj = {
			name: "glsl_ext_NODE_" + this.nodeCount,
			type: type,
			inputs: inputArray || this.inputArray(),
		};
		this.nodeCount++;
		return [obj, args];
	},
	glslSource: function (code, ...args) {
		prefix = [
			!code.includes("vec2 uv") ? "vec2 uv = _st;\n" : '',
			!code.includes("vec2 st") ? "vec2 st = _st;\n" : '',
            !code.includes("vec2 xy") ? "vec2 xy = _st;\n" : '',
		].join('');
		data = this.getObjAndArgs("src", args);
		obj = data[0];
		args = data[1];
		obj.glsl = prefix + this.checkCode(code);
		setFunction(obj);
		return globalThis[obj.name](...args);
	},
	glslColor: function (self, code, ...args) {
		prefix = [
			!code.includes("vec4 c0") ? "vec4 c0 = _c0;\n" : '',
			!code.includes("vec4 color") ? "vec4 color = _c0;\n" : '',
		].join('');
		data = this.getObjAndArgs("color", args);
		obj = data[0];
		args = data[1];
		obj.glsl = prefix + this.checkCode(code);
		setFunction(obj);
		return gS[obj.name].bind(self)(...args);
	},
	glslCoord: function (self, code, ...args) {
		prefix = [
			!code.includes("vec2 uv") ? "vec2 uv = _st;\n" : '',
			!code.includes("vec2 st") ? "vec2 st = _st;\n" : '',
            !code.includes("vec2 xy") ? "vec2 xy = _st;\n" : '',
		].join('');
		data = this.getObjAndArgs("coord", args);
		obj = data[0];
		args = data[1];
		obj.glsl = prefix + this.checkCode(code);
		setFunction(obj);
		return gS[obj.name].bind(self)(...args);
	},
    glslCombine: function (self, code, texture,...args) {
		prefix = [
			!code.includes("vec4 c0") ? "vec4 c0 = _c0;\n" : '',
			!code.includes("vec4 color0") ? "vec4 color0 = _c0;\n" : '',
            !code.includes("vec4 c1") ? "vec4 c1 = _c1;\n" : '',
			!code.includes("vec4 color1") ? "vec4 color1 = _c1;\n" : '',
		].join('');
		data = this.getObjAndArgs("combine", args);
		obj = data[0];
		args = data[1];
        args.unshift(texture)
		obj.glsl = prefix + this.checkCode(code);
		setFunction(obj);
		return gS[obj.name].bind(self)(...args)
	},
    glslCombineCoord: function (self, code, texture,...args) {
		prefix = [
			!code.includes("vec4 c0") ? "vec4 c0 = _c0;\n" : '',
			!code.includes("vec4 color") ? "vec4 color = _c0;\n" : '',
            !code.includes("vec2 uv") ? "vec2 uv = _st;\n" : '',
			!code.includes("vec2 st") ? "vec2 st = _st;\n" : '',
            !code.includes("vec2 xy") ? "vec2 xy = _st;\n" : '',
		].join('');
		data = this.getObjAndArgs("combineCoord", args);
		obj = data[0];
		args = data[1];
        args.unshift(texture)
		obj.glsl = prefix + this.checkCode(code);
		setFunction(obj);
		return gS[obj.name].bind(self)(...args)
	}
};

window.glsl = glslExtension.glslSource.bind(glslExtension)
gS.glslColor = function(code,...args){
    return glslExtension.glslColor(this,code,...args)
}
gS.glslCoord = function(code,...args){
    return glslExtension.glslCoord(this,code,...args)
}
gS.glslCombine = function(code,texture,...args){
    return glslExtension.glslCombine(this,code,texture,...args)
}
gS.glslCombineCoord = function(code,texture,...args){
    return glslExtension.glslCombineCoord(this,code,texture,...args)
}
