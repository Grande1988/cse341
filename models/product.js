const getDb = require('../util/database');

class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    save() {
      const db = getDb();
      db.collection('products').insertOne({name: 'A book', price: 12.99});
    }
}

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    allowNull: false,
    primaryKey: true  
    },
    title: Sequelize.STRING,
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;