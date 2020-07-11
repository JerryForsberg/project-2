module.exports = function(sequelize, DataTypes) {
    const characters = sequelize.define("characters", {
      // The email cannot be null, and must be a proper email before creation
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      // The password cannot be null
      race: {
        type: DataTypes.STRING,
        allowNull: false
      }
    ,
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

    }
})
};