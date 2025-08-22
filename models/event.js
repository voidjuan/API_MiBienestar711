'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Evento tiene una Categoria
      Event.belongsTo(models.Category);
      models.Category.hasMany(Event);

      // Evento tiene un Usuario
      Event.belongsTo(models.User);
      models.User.hasMany(Event);
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    state: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};