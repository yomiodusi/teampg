const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, tag, email, school) {
      super(name, tag, email,);
      this.school = school;
    }

    collectSchool() {
      return this.school;
    }

    collectRole() {
      return 'Intern';
    }
}

module.exports = Intern;