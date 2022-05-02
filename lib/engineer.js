const Employee = require('../lib/employee.js');

class Engineer extends Employee{
  constructor(name, tag, email, github) {
    super(name, tag, email,)
    this.github = github;
  }

  collectGithub() {
    return this.github;
  }

  collectRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;