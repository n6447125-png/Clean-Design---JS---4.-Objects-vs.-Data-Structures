module.exports = class Worker {
    static SENIOR_SALARY_FACTOR = 1.2;
    static SENIOR_BONUS_FACTOR = 1.5;

    #dailyRate;
    #amountPerDay;
    #isJunior;

    constructor(dailyRate, amountPerDay, isJunior = false) {
        this.#dailyRate = dailyRate;
        this.#amountPerDay = amountPerDay;
        this.#isJunior = isJunior;
    }

    calculateSalary(area) {
        const baseSalary = this.#dailyRate * this.#countWorkDays(area);
        return this.#isJunior ? baseSalary : baseSalary * Worker.SENIOR_SALARY_FACTOR;
    }

    calculateBonus(vendorBonus) {
        return this.#isJunior ? vendorBonus : vendorBonus * Worker.SENIOR_BONUS_FACTOR;
    }

    #countWorkDays(area) {
        return Math.ceil(area / this.#amountPerDay);
    }
}
