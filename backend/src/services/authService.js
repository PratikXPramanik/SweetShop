const bcrypt = require("bcrypt");
const User = require("../models/User");

async function register(data) {
  const hashed = await bcrypt.hash(data.password, 10);
  return await User.create({ ...data, password: hashed });
}

async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");

  return user;
}

module.exports = { register, login };
