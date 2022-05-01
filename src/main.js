console.log("Hello World");

document.addEventListener("DOMContentLoaded", ()=>{
    if (document.body !== null) {
        let canvas = document.createElement("canvas");
        canvas.setAttribute("height", "350");
        canvas.setAttribute("width", "750");
        document.body.appendChild(canvas);
        let ctx = canvas.getContext("2d");
        console.log("success...");
    }
    else {
        console.warn("can not load body");
    }
});