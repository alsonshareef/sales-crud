module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      username: {
        allowNull: true,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return queryInterface.dropTable('Users');
  }
};
