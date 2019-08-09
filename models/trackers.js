"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trackers = sequelize.define("Trackers", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    todo: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  Trackers.associate = function(models) {
    Trackers.belongsTo(models.User, {foreignKey: "UserId", as: "user"});
    Trackers.belongsToMany(models.Weeks, {through: "Weeks", foreignKey: "WeeksId", as: "weeks"});
    Trackers.belongsToMany(models.Months, {through: "Months", foreignKey: "MonthsId", as: "months"}),
    Trackers.belongsToMany(models.Journals, {through: "Journals", foreignKey: "JournalsId", as: "journals"}),
    Trackers.belongsToMany(models.Todays, {through: "Todays", foreignKey: "TodaysId", as: "todays"})
  };
  return Trackers;
};