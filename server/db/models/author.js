'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: { type: DataTypes.STRING, allowNull: false},
    lastName: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull:false }
  });

  Author.associate = (models) => {
    // associations can be defined here
    Author.hasMany(models.Blog, {
      as: 'blogs'
    })
  };
  return Author;
};