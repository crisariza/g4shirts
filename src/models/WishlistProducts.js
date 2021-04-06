const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('WishlistProducts', {

  }, {
    timestamps: false,
    tableName: 'wishlist_products'
    //freezeTableName: true
  });
};