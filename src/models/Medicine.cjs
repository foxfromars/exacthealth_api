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
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        Model: "Users",
        key: "id",
      }
    },
  }, {
    sequelize,
    modelName: 'Medicine'
  });

  Medicine.associate = models => {
    Medicine.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
      }
    });
  }

  return Medicine;
}
