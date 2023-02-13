const Model = require('sequelize').Model;

module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model { }
  Medicine.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Medicine'
  });
  return Medicine;
}
