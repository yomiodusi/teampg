const Engineer = require("../lib/engineer");

test('the school name is correct', () => {
    var engineer = new Engineer("null","null","null", "github");
    expect(engineer.collectGithub()).toBe("github");
  });