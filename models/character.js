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
      type: DataTypes.STRING,
      allowNull: false
    },
    hp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dexterity: {
      type: DataTypes.STRING,
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

  Character.associate = function(models) {
    // We're saying that a Character should belong to a user
    Character.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Character;
};
