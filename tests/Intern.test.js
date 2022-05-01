const Intern = require("../lib/intern");

test('the school name is correct', () => {
    var intern = new Intern("null","null","null", "western");
    expect(intern.collectSchool()).toBe("western");
  });
  