window.canvas = document.querySelector("canvas.bg-black")

canvas.setLinear = function(){ this.style.imageRendering = "auto" }
canvas.setNearest = function(){ this.style.imageRendering = "pixelated" }
canvas.setFullscreen = function(full=true){ const set = full ? '100%' : ''; this.style.width = set; this.style.height = set;}
canvas.setAlign = function(align='right'){ this.parentElement .style['text-align'] = align }
canvas.setRelativeSize = function(ratio) { this.style.width = ''+(width*ratio)+'px'; this.style.height = ''+(height*ratio)+'px'; }