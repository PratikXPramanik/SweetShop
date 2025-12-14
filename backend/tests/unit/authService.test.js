const authService = require("../../src/services/authService");

test("password should be hashed", async () => {
  const user = await authService.register({
    name: "Amit",
    email: "amit@test.com",
    password: "123456"
  });
  expect(user.password).not.toBe("123456");
});
