const server = require("express").Router();
const { WishlistProducts, User, Product } = require("../db.js");

// Ruta para obtener todas las wishlists
server.get("/", async (req, res) => {
  try {
    const wishLists = await WishlistProducts.findAll({
      include: { model: User, model: Product },
    });
    res.json(wishLists);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

// Ruta para obtener las wishlists de un usuario particular
server.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id > 0) {
      const userWishList = await WishlistProducts.findAll({
        include: { model: User, model: Product },
        where: { userId: id },
      });
      res.json(userWishList);
    } else {
      res.send("You must send a userId greater than 0.");
    }
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

// Ruta para obtener las wishlists en la que se encuentre un producto
server.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (id > 0) {
      const productWishList = await WishlistProducts.findAll({
        include: { model: User, model: Product },
        where: { productId: id },
      });
      res.json(productWishList);
    } else {
      res.send("You must send a productId greater than 0.");
    }
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

// Ruta para obtener las wishlists en la que se encuentre un producto
server.post("/add", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    if (userId > 0 && productId > 0) {
      const add = await WishlistProducts.findOrCreate({
        where: { userId: userId, productId: productId },
      });
      if (add) {
        res.send(
          `The product with the id of: ${productId} and the user with the if of: ${userId} were linked together.`
        );
      } else {
        res.send(
          `The product with the id of: ${productId} and the user with the if of: ${userId} were linked before.`
        );
      }
    } else {
      res.send("You must send a userId and productId greater than 0.");
    }
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

// Ruta para obtener las wishlists en la que se encuentre un producto
server.post("/remove", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    if (userId > 0 && productId > 0) {
      const add = await WishlistProducts.destroy({
        where: { userId: userId, productId: productId },
      });
      if (add) {
        res.send(
          `The relation of the product with the id of: ${productId} and the user with the if of: ${userId} were destroyed.`
        );
      } else {
        res.send(
          `The relation of the product with the id of: ${productId} and the user with the if of: ${userId} were not found.`
        );
      }
    } else {
      res.send("You must send a userId and productId greater than 0.");
    }
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

module.exports = server;
