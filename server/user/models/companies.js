'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Companies.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Your email already available'
      },
      validate: {
        notNull: {
          msg: 'Email cannot be empty'
        },
        isEmail: {
          msg: 'You must be input email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password cannot be empty'
        }
      }
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Your company name already available'
      },
    },
    label_company: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate(company) {
        const salt = bcrypt.genSaltSync(10);
        company.password = bcrypt.hashSync(company.password, salt);
      }
    },
    modelName: 'Companies',
  });
  return Companies;
};