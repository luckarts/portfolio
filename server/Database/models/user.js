'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        required: true,
        validate: {
          len: {
            arg: [5, 20],
            message: 'username has to between 2 and 20 characters'
          },
          is: /^[A-Za-z]+$/i
        }
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
        validate: {
          len: {
            arg: [5, 30],
            message: 'username has to between 2 and 30 characters'
          },
          is: /\S+@\S+\.\S+/
        }
      },

      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        required: true,
        unique: true,
        validate: {
          len: {
            arg: [5, 50],
            message: 'username has to between 2 and 30 characters'
          },
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        }
      },
      imgProfile: {
        type: DataTypes.STRING(150),
        required: true
      },
      description: {
        type: DataTypes.STRING(),
        required: true
      },
      cv: {
        type: DataTypes.STRING(80),

        required: true
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
