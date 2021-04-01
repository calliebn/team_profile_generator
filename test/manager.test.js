const Manager = require('../lib/manager');

test("Can get office number", () => {
    const officeNumber = 10;
    const e = new Manager("Mickey", "Mouse", 6, officeNumber);
    expect(e.officeNumber).toBe(10);
  });