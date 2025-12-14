const authService = require("../services/authService");

exports.register = async (req, res) => {
  const user = await authService.register(req.body);
  res.status(201).json(user);
};

exports.login = async (req, res) => {
  try {
    const user = await authService.login(req.body.email, req.body.password);
    res.json({ role: user.role });
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
};
