const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Recipe",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dishSummary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
      },
      healthy: {
        type: DataTypes.INTEGER,
      },
      instructions: {
        type: DataTypes.TEXT,
      },
      created: {
        type: DataTypes.VIRTUAL,
        get() {
          return true;
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
