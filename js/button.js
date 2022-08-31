// El render2 puede tener un alias (otro nombre), 
// porque es el que NO se exporta por defecto,
// y se puede importar con el nombre que queramos:
import render, { render2 } from "./render_functions.js";

export default class Button {
    constructor(text) {
        this.text = text;
    }

    /* render() {
        return `<button>${this.text}</button>`;
    } */
}

// Puedo hacer modificaciones a la clase Button
// para cambiar el comportamiento de la función render
// cambio el método render() por el método render2()
Button.prototype.render = render;
// Button.prototype.render = render2;