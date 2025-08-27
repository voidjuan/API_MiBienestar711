'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol, {
        foreignKey: 'rolId',
        as: 'rols'
      });
      models.Rol.hasMany(User, {
        foreignKey: 'rolId',
        as: 'users'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    document: DataTypes.STRING,
    gender: DataTypes.STRING,
    state: DataTypes.STRING,
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'rolId'
    },
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};