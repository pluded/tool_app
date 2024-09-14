module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Tools', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        userId: {
          type: Sequelize.UUID,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        category: Sequelize.STRING,
        price: Sequelize.DECIMAL,
        availability: Sequelize.JSON,
        images: Sequelize.ARRAY(Sequelize.STRING),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Tools');
    },
  };
  