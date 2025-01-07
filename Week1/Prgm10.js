class Bankacct {
  constructor(name, bal = 0) {
    this.name = name;
    this.bal = bal;
  }
  deposit(amt) {
    this.bal += amt;
  }
  withdraw(amt) {
    this.bal -= amt;
  }
  transfer(acct, amt) {
    if (this.bal >= amt) {
      this.withdraw(amt);
      acct.deposit(amt);
    } else {
      console.log(`Insufficient funds`);
    }
  }
}

let acc1 = new Bankacct("P1", 1500);
let acc2 = new Bankacct("p2", 150);

acc1.transfer(acc2, 500);
console.log(acc1.bal + " " + acc2.bal);
