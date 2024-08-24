const bcrypt = require("bcrypt");
const Users = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  const user = await Users.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!user)
    return res.status(404).json({ msg: "Incorrect Username or Password" });
  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match)
    return res.status(400).json({ msg: "Incorrect Username or Password" });
  //req.session.userId = user.uuid;
  const token = jwt.sign({ id: user.id }, "bdggewssdgfv", { expiresIn: 300 });

  const uuid = user.uuid;

  const username = user.username;
  const email = user.email;

  res.status(200).json({ uuid, username, email, token });
};

const Me = async (req, res) => {
  const user = await Users.findOne({
    attributes: ["id", "username", "email"],
    where: {
      id: req.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.status(200).json(user);
};

// const logOut = (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.status(400).json({ msg: "Cannot logout" });
//     res.status(200).json({ msg: "You have logout" });
//   });
// };

module.exports = {
  Login,
  //logOut,
  Me,
};
