class CapitalOneBankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  getBalance() {
    return this.#balance;
  }

  setBalance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("balance cannot be negative");
    }
  }
}

const accountTwo = new CapitalOneBankAccount("Alice", 500);
console.log(accountTwo.getBalance());
accountTwo.setBalance(1000);
console.log(accountTwo.getBalance());
