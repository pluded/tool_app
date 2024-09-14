module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
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
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
    },
  };
  