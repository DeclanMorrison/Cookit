module.exports = function (sequelize, DataTypes) {
  const Favorite = sequelize.define("Favorite", {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    Recipe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Uri: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    Diet: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    Health: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  return Favorite;
};
