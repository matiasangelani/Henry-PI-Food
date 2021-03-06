const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'recipe',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      weightWatcherSmartPoints: {
        type: DataTypes.INTEGER,
      },
      healthScore: {
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
      // image: {
      //   type: DataTypes.VIRTUAL,
      //   get() {
      //     return img2;
      //   },
      // },
    },
    {
      timestamps: false,
    }
  );
};
