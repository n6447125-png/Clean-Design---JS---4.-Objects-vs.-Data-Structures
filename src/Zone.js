const { summing } = require('./CalculationUtil');

module.exports = class Zone {
    #type;
    #height;
    #width;
    #apertures;

    constructor(type, height, width, apertures = []) {
        this.#height = height;
        this.#width = width;
        this.#type = type;
        this.#apertures = apertures;
    }

    get type() {
        return this.#type;
    }

    getArea() {
        return this.#height * this.#width - this.#getAperturesArea();
    }

    #getAperturesArea() {
        return summing(this.#apertures, aperture => aperture.getArea());
    }
}
