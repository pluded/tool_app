module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        email: {
          type: Sequelize.STRING,
          unique: true,
        },
        password: Sequelize.STRING,
        profileImage: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
    },
  };
  