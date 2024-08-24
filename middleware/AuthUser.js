const Users = require("../models/UserModel");

const verifyUser = async (req, res, next) => {
  const user = await Users.findOne({
    where: {
      id: req.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });

  req.userName = user.username;
  req.email = user.email;
  next();
};

module.exports = {
  verifyUser,
};
