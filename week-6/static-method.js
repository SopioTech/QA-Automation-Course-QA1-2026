class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }
  static displayCount() {
    console.log(`Total users created: ${User.count}`);
  }
}

const user1 = new User("alice");
const user2 = new User("bob");
const user3 = new User("ann");

//user1.displayCount();
User.displayCount();
