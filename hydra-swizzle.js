// https://stackoverflow.com/questions/34127294/
function getSwizzles(coords) {
    function combinations(input, length, curstr) {
        if (curstr.length == length) return [curstr];
        var ret = [];
        for (var i = 0; i < input.length; i++) {
            ret.push.apply(ret, combinations(input, length, curstr + input[i]));
        }
        return ret;
    }

    let ret = combinations(coords, coords.length, '');
    ret.splice(ret.indexOf("input"), 1);
    return ret;
}

const threeComponents = [].concat(
    getSwizzles("rgb"),
    getSwizzles("xyz")
);
const fourComponents = [].concat(
    getSwizzles("rgba"),
    getSwizzles("xyzw")
);

window.gS = osc().constructor.prototype;

function definePropertyFromMethod(method, newName = "") {
    newName = newName ? newName : method;
    Object.defineProperty(gS, newName, {
        configurable: true,
        get() { return this[method].bind(this)() }
    });
}

threeComponents.forEach(swizzle => {
    const name = "_" + swizzle;
    setFunction({
        name,
        type: 'color',
        inputs: [],
        glsl: `return vec4(_c0.${swizzle},_c0.a);`
    });
    definePropertyFromMethod(name, swizzle);
});
fourComponents.forEach(swizzle => {
    const name = "_" + swizzle
    setFunction({
        name,
        type: 'color',
        inputs: [],
        glsl: `return _c0.${swizzle};`
    });
    definePropertyFromMethod(name, swizzle);
});
Array.from("rgbxyz").forEach(elem => {
    const name = "_swizzle_" + elem;
    setFunction({
        name,
        type: 'color',
        inputs: [],
        glsl: `return vec4(vec3(_c0.${elem}),_c0.a);`
    });
    definePropertyFromMethod(name, elem);
});