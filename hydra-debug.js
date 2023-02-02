{
    const script = document.createElement("script");
    script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js";
    document.head.appendChild(script);
}

{
    setTimeout(() => {
        hljs.configure({ ignoreUnescapedHTML: true });
        const brPlugin = {
            "before:highlightBlock": ({ block }) => {
                block.innerHTML = block.innerHTML
                    .replace(/\n/g, "")
                    .replace(/<br[ /]*>/g, "\n");
            },
            "after:highlightBlock": ({ result }) => {
                result.value = result.value.replace(/\n/g, "<br>");
            },
        };
        hljs.addPlugin(brPlugin);
        const script = document.createElement("script");
        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/languages/glsl.min.js";
        document.head.appendChild(script);
    }, 800);
}

{
    const link = document.createElement("link");
    link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/base16/tomorrow-night.min.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}

{
    const script = document.createElement("script");
    script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.7/beautify.js";
    document.head.appendChild(script);
}

{
function cleanCode(code) {
    return js_beautify(code).replace(/\n{2,}/gm, "\n\n") + "\n\n";
}
function logHighlightedCode(glslSource, output) {
    let passes = glslSource.glsl();
    let code = passes[0].frag;

    document.getElementById("hydra-debug")?.remove();

    const pre = document.createElement("pre");
    pre.className = "hljs";
    pre.style.position = "sticky";
    pre.style.height = "96%";
    pre.style.padding = "4%";
    pre.style.overflow = "scroll";
    const codeElement = document.createElement("code");
    codeElement.className = "language-glsl";
    pre.appendChild(codeElement);
    codeElement.innerText = cleanCode(code)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    hljs.highlightElement(pre, {
        language: "glsl",
        ignoreIllegals: true,
    });

    const wrapper = document.createElement("div");
    wrapper.id = "hydra-debug";
    wrapper.style.zIndex = 999;
    wrapper.style.overflow = "hidden";
    wrapper.style.position = "fixed";
    wrapper.style.width = "40%";
    wrapper.style.height = "90%";
    wrapper.style.left = "58%";
    wrapper.style.top = "5%";
    wrapper.style.fontSize = "14px";

    const close = document.createElement("button");
    close.innerText = "x";
    close.style.position = "absolute";
    close.style.right = "0px";
    close.style.top = "2%";
    close.style.fontSize = "20px";
    close.style.backgroundColor = "white";
    close.style.color = "black";
    close.style.border = "none";
    close.onclick = () => {
        document.getElementById("hydra-debug")?.remove();
    };

    wrapper.appendChild(pre);
    wrapper.appendChild(close);

    if (output) {
        pre.contentEditable = "true";
        const run = document.createElement("button");
        run.innerText = ">";
        run.style.position = "absolute";
        run.style.right = "30px";
        run.style.top = "2%";
        run.style.fontSize = "20px";
        run.style.backgroundColor = "white";
        run.style.color = "black";
        run.style.border = "none";
        run.onclick = () => {
            codeElement.innerText = cleanCode(pre.innerText)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            pre.innerHTML = "";
            pre.appendChild(codeElement);
            hljs.highlightElement(pre, {
                language: "glsl",
                ignoreIllegals: true,
            });
            passes[0].frag = pre.innerText;
            output.render(passes);
        };
        wrapper.appendChild(run);
    }

    document.body.append(wrapper);
}

window.gS = osc().constructor.prototype;
gS.debug = function (output) {
    logHighlightedCode(this, output);
    return output ? this.out(output) : this;
};
}