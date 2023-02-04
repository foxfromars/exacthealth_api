const Model = require('sequelize').Model;

module.exports = (sequelize, DataTypes) => {
  class User extends Model { }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isLowercase: {
          args: true,
          msg: "Username must contain only lowcase letters"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 32],
          msg: "Password must be between 8-32 characters"
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [8, 256],
          msg: "Email must be between 8-256 characters"
        },
        isEmail: {
          args: true,
          msg: "Must be a valid email",
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
}