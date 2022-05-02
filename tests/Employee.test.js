const Employee = require('../lib/employee.js');

// test('the email is correct', () => {
//   var employee = new Employee("employee@gmail.com", "tag", "id");
//   expect(employee.collectEmail()).toBe("employeee@gmail.com");
// });

test('the name is correct', () => {
  var employee = new Employee("yomiodusi","null","null");
  expect(employee.collectName()).toBe("yomiodusi");
});

test('the name is correct', () => {
  var employee = new Employee("null","005","null");
  expect(employee.collectTag()).toBe("005");
});

test('the name is correct', () => {
  var employee = new Employee("null","null","yodusi@gmail.com");
  expect(employee.collectEmail()).toBe("yodusi@gmail.com");
});


// test("user input creates employee", () => { -- pls ignore
//   var inputarray = ["employem@gmail.com",
//   "tag",
//   "name"]
//   expect(cliInput(inputarray)).toBeOfInstance(Employee)
//   expect(cliInput(inputarray).collectEmail()).toBe("employemg")
//   expect(cliHtml)
// }) 