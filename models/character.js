module.exports = function(sequelize, DataTypes) {
  const Character = sequelize.define("Character", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false
    },

    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weapon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    selected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Character;
};
