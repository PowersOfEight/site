

/**
 * appends a new canvas to the body once the DOM content
 * is loaded.
 */
document.addEventListener("DOMContentLoaded", ()=>{

    const canvas = document.createElement("canvas");
    
    canvas.setAttribute("id", "siteCanvas");
    document.body.appendChild(canvas);
    console.log("Canvas \"siteCanvas\" successfully loaded");

});