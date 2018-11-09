module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    ID : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    UserName : {
      type: DataTypes.STRING,
    }
  }, {
    paranoid: true
  });

  // Users.associate = function(models) {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade"
  //   });
  // };

  return Users;
};