/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richestCustomer = 0;

    for (let i = 0; i < accounts.length; i++) {
      let customerIncome = 0;

      for (let j = 0; j < accounts[0].length; j++) {
        customerIncome += accounts[i][j];
      }

      if (customerIncome > richestCustomer) {
        richestCustomer = customerIncome;
      }
    }
    return richestCustomer
};