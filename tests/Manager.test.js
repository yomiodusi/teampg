const Manager = require("../lib/manager");

test('the school name is correct', () => {
    var manager = new Manager("null","null","null", "number");
    expect(manager.collectNumber()).toBe("number");
  });