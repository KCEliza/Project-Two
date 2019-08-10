module.exports = (sequelize, DataTypes) => {
  const Journals = sequelize.define("Journals", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {});
  Journals.associate = function (models) {
    Journals.belongsTo(models.User, {
      foreignKey: "UserId",
      as: "user"
    });
    // Journals.belongsToMany(models.Weeks, {
    //   through: "Weeks",
    //   foreignKey: "WeeksId",
    //   as: "weeks"
    // });
    // Journals.belongsToMany(models.Months, {
    //     through: "Months",
    //     foreignKey: "MonthsId",
    //     as: "months"
    //   });
    //   Journals.belongsToMany(models.Todays, {
    //     through: "Todays",
    //     foreignKey: "TodaysId",
    //     as: "todays"
    //   })
  };
  return Journals;
};