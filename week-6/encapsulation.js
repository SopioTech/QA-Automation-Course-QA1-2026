class ATM {
  #cashInSide = 0;

  deposit(amount) {
    if (amount > 0) {
      const finalAmount = this.#applyBonus(amount);
      this.#cashInSide += finalAmount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#cashInSide) {
      this.#cashInSide -= amount;
      return amount;
    }
    return 0;
  }

  checkBalance() {
    return this.#cashInSide;
  }

  #applyBonus(amount) {
    return amount + amount * 0.01;
  }
}
const atm = new ATM();
atm.deposit(500);
console.log(atm.checkBalance());

const widrwarn = atm.withdraw(200);
console.log(atm.checkBalance());
