class Employee {
  constructor(name, tag, email,) {
    this.name = name;
    this.tag = tag;
    this.email = email;
  }
  
  collectName() {
    return this.name;
  }

  collectTag() {
    return this.tag;
  }

  collectEmail() {
    return this.email;
  }

  collectRole() {
    return 'Employee'
  }
}

module.exports = Employee;
