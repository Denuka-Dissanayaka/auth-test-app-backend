const Products = require("../models/ProductModel");

const { Op } = require("sequelize");

const getProducts = async (req, res) => {
  try {
    let response;

    response = await Products.findAll({
      attributes: ["uuid", "name", "price"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getProducts,
};
