const bcrypt = require("bcrypt");
const Users = require("../models/UserModel");

const createUser = async (req, res) => {
  const { userName, password, email } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);
  try {
    await Users.create({
      username: userName,
      password: hashPassword,
      email: email,
    });
    return res.status(201).json({ msg: "Success" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  createUser,
};
