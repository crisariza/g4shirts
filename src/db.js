require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Category,
  Product,
  ProductPhotos,
  ProductCategories,
  ProductSizes,
  Order,
  OrderDetails,
  Role,
  User,
  Review,
  WishlistProducts
} = sequelize.models;

Category.belongsToMany(Product, {
  through: "ProductCategories",
});
Product.belongsToMany(Category, {
  through: "ProductCategories",
});

Product.hasMany(ProductSizes, {
  foreingKey: "products_id",
  sourceKey: "id",
});
ProductSizes.belongsTo(Product, {
  foreingKey: "products_id",
  sourceKey: "id",
});

Product.hasMany(ProductPhotos, {
  foreingKey: "products_id",
  sourceKey: "id",
});
ProductPhotos.belongsTo(Product, {
  foreingKey: "products_id",
  sourceKey: "id",
});

Role.hasMany(User, { foreingKey: "roles_id", sourceKey: "id" });
User.belongsTo(Role, { foreingKey: "roles_id", sourceKey: "id" });

User.hasMany(Order, { foreingKey: "users_id", sourceKey: "id" });
Order.belongsTo(User, { foreingKey: "users_id", sourceKey: "id" });

Order.hasMany(OrderDetails, { foreingKey: "orders_id", sourceKey: "id" });
OrderDetails.belongsTo(Order, { foreingKey: "orders_id", sourceKey: "id" });

Product.hasMany(OrderDetails, { foreingKey: "products_id", sourceKey: "id" });
OrderDetails.belongsTo(Product, { foreingKey: "products_id", sourceKey: "id" });

// User.belongsToMany(Product, { through: 'Review' });
// Product.belongsToMany(User, { through: 'Review' });

User.hasMany(Review, { foreingKey: "users_id", sourceKey: "id" });
Review.belongsTo(User, { foreingKey: "users_id", sourceKey: "id" });

// Product.hasMany(Review, { foreingKey: "products_id", sourceKey: "id" });
// Review.belongsTo(Product, { foreingKey: "products_id", sourceKey: "id" });

User.belongsToMany(Product, {
  through: "review",
});Category.belongsToMany(Product, {
  through: "ProductCategories",
});
Product.belongsToMany(Category, {
  through: "ProductCategories",
});
Product.belongsToMany(User, {
  through: "review",
});

Product.hasMany(Review);

User.belongsToMany(Product, {
  through: "WishlistProducts",
});
Product.belongsToMany(User, {
  through: "WishlistProducts",
});

//wishlist_products con user y productid

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};