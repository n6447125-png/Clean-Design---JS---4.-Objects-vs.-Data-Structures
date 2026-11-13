const { summing } = require('./CalculationUtil');

module.exports = class Assignment {
    #worker;
    #zones;
    #vendorBonus;

    constructor(worker, zones, vendorBonus) {
        this.#worker = worker;
        this.#zones = zones;
        this.#vendorBonus = vendorBonus;
    }

    set vendorBonus(vendorBonus) {
        this.#vendorBonus = vendorBonus;
    }

    calculateWorkerPayment() {
        const salary = this.#worker.calculateSalary(this.#getTotalArea());
        return salary + this.#worker.calculateBonus(this.#vendorBonus);
    }

    calculateBill(billCalculator) {
        return summing(this.#zones, zone => billCalculator.calculateZoneBillPrice(zone));
    }

    #getTotalArea() {
        return summing(this.#zones, zone => zone.getArea());
    }
}
