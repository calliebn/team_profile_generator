const Employee = require('../lib/employee')

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test("Can get name via the getName()", () => {
      const userFirstName = "Ted";
      const userLastName = "Bear";
      const e = new Employee(userFirstName, userLastName);
      expect(e.getName()).toBe("Ted Bear");
  });

  test("Can get id via the getId()", () => {
      const userID = 9;
      const e = new Employee("first", "last", userID);
      expect(e.getId()).toBe(`<span class="has-text-weight-bold">ID:</span> ${userID}`);
  });