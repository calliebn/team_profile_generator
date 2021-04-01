const Engineer = require('../lib/engineer')

test("Can get GitHub user name", () => {
    const gitHub = "awanderpants"
    const e = new Engineer("Alice", "Wanderpants", 7, gitHub)
    expect(e.github).toBe(gitHub);
  });