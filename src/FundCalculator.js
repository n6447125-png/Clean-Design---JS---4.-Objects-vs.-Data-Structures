const BillCalculator = require('./BillCalculator');

class FundCalculator {
    #billCalculator;

    constructor() {
        this.#billCalculator = new BillCalculator();
    }

    getFundBalance(assignments) {
        let salaries = 0;
        let bill = 0;

        assignments.forEach(assignment => {
            salaries += assignment.calculateWorkerPayment();
            bill += assignment.calculateBill(this.#billCalculator);
        });

        return bill - salaries;
    }
}

module.exports = FundCalculator;
