'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Containers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Containers.init({
    CompanyId: DataTypes.INTEGER,
    container_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Containers',
  });
  return Containers;
};