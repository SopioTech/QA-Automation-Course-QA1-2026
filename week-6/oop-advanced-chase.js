class ChaseBankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }
  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("balance cannot be negative");
    }
  }
}

const account = new ChaseBankAccount("alice", 500);
console.log(account.balance);
account.balance = 1000;
console.log(account.balance);
