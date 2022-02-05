//hydra-abbreviations
//shorthands for all the funcs
//by RITCHSE

gs = osc().constructor.prototype

gs.bl = gs.blend
gs.bright = gs.brightness
gs.br = gs.brightness
gs.clr = gs.color
gs.c = gs.color
gs.clrm = gs.colorama
gs.cm = gs.colorama
gs.cntrst = gs.contrast
gs.ct = gs.contrast
gs.df = gs.diff
gs.invrt = gs.invert
gs.inv = gs.invert
gs.i = gs.invert
gs.kld = gs.kaleid
gs.k = gs.kaleid
gs.lyr = gs.layer
gs.ly = gs.layer
gs.lr = gs.layer
gs.l = gs.layer
gs.lm = gs.luma
gs.msk = gs.mask
gs.mod = gs.modulate
gs.m = gs.modulate
gs.modh = gs.modulateHue
gs.mh = gs.modulateHue
gs.mH = gs.modulateHue
gs.modk = gs.modulateKaleid
gs.mk = gs.modulateKaleid
gs.mK = gs.modulateKaleid
gs.modp = gs.modulatePixelate
gs.mp = gs.modulatePixelate
gs.mP = gs.modulatePixelate
gs.modrp = gs.modulateRepeat
gs.mrp = gs.modulateRepeat
gs.mRp = gs.modulateRepeat
gs.modrpx = gs.modulateRepeatX
gs.mrpx = gs.modulateRepeatX
gs.mRpx = gs.modulateRepeatX
gs.mRpX = gs.modulateRepeatX
gs.modrpy = gs.modulateRepeatY
gs.mrpy = gs.modulateRepeatY
gs.mRpy = gs.modulateRepeatY
gs.mRpY = gs.modulateRepeatY
gs.modr = gs.modulateRotate
gs.mr = gs.modulateRotate
gs.mR = gs.modulateRotate
gs.modrt = gs.modulateRotate
gs.mrt = gs.modulateRotate
gs.mRt = gs.modulateRotate
gs.modrot = gs.modulateRotate
gs.mrot = gs.modulateRotate
gs.mRot = gs.modulateRotate
gs.mods = gs.modulateScale
gs.ms = gs.modulateScale
gs.mS = gs.modulateScale
gs.modx = gs.modulateScrollX
gs.mx = gs.modulateScrollX
gs.mX = gs.modulateScrollX
gs.mody = gs.modulateScrollY
gs.my = gs.modulateScrollY
gs.mY = gs.modulateScrollY
gs.mlt = gs.mult
gs.ml = gs.mult
gs.mt = gs.mult
gs.pxlt = gs.pixelate
gs.px = gs.pixelate
gs.p = gs.pixelate
gs.pstr = gs.posterize
gs.ps = gs.posterize
gs.rpt = gs.repeat
gs.rp = gs.repeat
gs.rptx = gs.repeatX
gs.rpx = gs.repeatX
gs.rptX = gs.repeatX
gs.rpX = gs.repeatX
gs.rpty = gs.repeatY
gs.rpy = gs.repeatY
gs.rptY = gs.repeatY
gs.rpY = gs.repeatY
gs.rot = gs.rotate
gs.rt = gs.rotate
gs.strt = gs.saturate
gs.st = gs.saturate
gs.s = gs.scale
gs.sc = gs.scale
gs.scrll = gs.scroll
gs.xy = gs.scroll
gs.x = gs.scrollX
gs.y = gs.scrollY
gs.shft = gs.shift
gs.sh = gs.shift
gs.sb = gs.sub
gs.sm = gs.sum
gs.thrsh = gs.thresh
gs.thr = gs.thresh
gs.th = gs.thresh
gs.t = gs.thresh

gs.__proto__.o = gs.__proto__.out

window.n = noise
window.ns = noise
window.vor = voronoi
window.vr = voronoi
window.v = voronoi
window.shp = shape
window.sh = shape
window.grd = gradient
window.gr = gradient
window.gd = gradient
window.s = solid
window.sl = solid
window.o = osc

// abbreviator
// TODO: refactor this mess:

window.Abbreviator = {
    abbreviations: {
        functions: {
            'blend': 'bl',
            'bright': 'br',
            'color': 'c',
            'colorama': 'cm',
            'contrast': 'ct',
            'diff': 'df',
            'invert': 'inv',
            'kaleid': 'k',
            'layer': 'l',
            'luma': 'lm',
            'mask': 'msk',
            'modulate': 'm',
            'modulateHue': 'mH',
            'modulateKaleid': 'mK',
            'modulatePixelate': 'mP',
            'modulateRepeat': 'mRp',
            'modulateRepeatX': 'mRpX',
            'modulateRepeatY': 'mRpY',
            'modulateRotate': 'mR',
            'modulateScale': 'mS',
            'modulateScrollX': 'mX',
            'modulateScrollY': 'mY',
            'mult': 'mlt',
            'pixelate': 'p',
            'posterize': 'ps',
            'repeat': 'rp',
            'repeatX': 'rpX',
            'repeatY': 'rpY',
            'rotate': 'rt',
            'saturate': 'st',
            'scale': 'sc',
            'scroll': 'xy',
            'scrollX': 'x',
            'scrollY': 'y',
            'shift': 'sh',
            'sub': 'sb',
            'sum': 'sm',
            'thresh': 'th'
        },
        sources: {
            'noise': 'ns',
            'voronoi': 'vr',
            'shape': 'sh',
            'gradient': 'grd',
            'solid': 'sl',
        }
    }, // here comes some ugly code:
    getKeyFromValue(object,value) {
        return Object.keys(object).find(key => object[key] === value);
    },
    checkAndUnabbreviateSource(match, offset, string) {
        k = match.replace('(','')
        replace = Abbreviator.getKeyFromValue(Abbreviator.abbreviations.sources,k) + '('
        if (offset == 0)
            return replace
        pch = string[offset - 1]
        if ("\n\t;( ".includes(pch))
            return replace
        else
            return match
    },
    checkAndUnabbreviateFunction(match, offset, string) {
        k = match.replace('(','').replace('.','')
        replace = '.' + Abbreviator.getKeyFromValue(Abbreviator.abbreviations.functions,k) +'('
        if (offset == 0)
            return match
        pch = string[offset - 1]
        if ("\n\t )".includes(pch))
            return replace
        else
            return match
    },
    checkAndAbbreviateSource(match, offset, string) {
        k = match.replace('(','')
        replace = Abbreviator.abbreviations.sources[k] + '('
        if (offset == 0)
            return replace
        pch = string[offset - 1]
        if ("\n\t;( ".includes(pch))
            return replace
        else
            return match
    },
    checkAndAbbreviateFunction(match, offset, string) {
        k = match.replace('(','').replace('.','')
        replace = '.' + Abbreviator.abbreviations.functions[k] +'('
        if (offset == 0)
            return match
        pch = string[offset - 1]
        if ("\n\t )".includes(pch))
            return replace
        else
            return match
    },
    removeSpacing(code){
        return code.replaceAll(' ','').replaceAll('\n','').replaceAll('\t','')
    },
    abbreviate(code,noSpacing=false) {
        Object.keys(Abbreviator.abbreviations.functions)
            .forEach((k) => {
                code = code.replaceAll('.' + k + '(', Abbreviator.checkAndAbbreviateFunction)
            })
        Object.keys(Abbreviator.abbreviations.sources)
            .forEach((k) => {
                code = code.replaceAll(k + "(", Abbreviator.checkAndAbbreviateSource)
            })
        code = noSpacing ? Abbreviator.removeSpacing(code) : code
        console.log(code)
        return code
    },
    unabbreviate(code) {
        Object.keys(Abbreviator.abbreviations.sources)
            .forEach((k) => {
                k = Abbreviator.abbreviations.sources[k]
                code = code.replaceAll(k + "(", Abbreviator.checkAndUnabbreviateSource)
            })
        Object.keys(Abbreviator.abbreviations.functions)
            .forEach((k) => {
                k = Abbreviator.abbreviations.functions[k]
                code = code.replaceAll('.' + k + '(', Abbreviator.checkAndUnabbreviateFunction)
            })
        console.log(code)
        return code
    }
}
window.abbreviate = Abbreviator.abbreviate.bind(Abbreviator)
window.unabbreviate =Abbreviator.unabbreviate.bind(Abbreviator)
