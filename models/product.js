'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category)
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Product Name Required`
        }
      }
    },
    image_url: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: `Price Minimum Rp. 1,-`
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: [0],
          msg: `Stock Minimum 0`
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Product',
  });

  Product.beforeCreate((product, opt) => {
    if (!product.image_url) {
      product.image_url = `https://source.unsplash.com/random`
    }
  })

  return Product;
};