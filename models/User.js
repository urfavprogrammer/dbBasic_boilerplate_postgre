const {DataTypes} = require('sequelize');
const db = require('../utils/db');

// Define a User model
const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;