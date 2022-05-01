const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, tag, email, number) {
        super(name, tag, email,)
        this.number = number;
      }

    collectNumber() {
    return this.number;
    }

    collectRole() {
    return 'Manager'
    }
}

module.exports = Manager;