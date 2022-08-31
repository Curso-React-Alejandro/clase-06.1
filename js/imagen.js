export default class Image {
    constructor(src) {
        this.src = src;
    }

    render() {
        return `<img src="${this.src}">`;
    }
}