module.exports = class Aperture {
    #height;
    #width;

    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    getArea() {
        return this.#width * this.#height;
    }
}
