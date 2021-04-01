const Intern = require('../lib/intern');

test("Can get intern school", () => {
    const schoolName = "University of Oregon"
    const e = new Intern("Peter", "Pan", 4, schoolName);
    expect(e.school).toBe(schoolName);
  });