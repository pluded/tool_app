module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Reviews', {
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
        toolId: {
          type: Sequelize.UUID,
          references: {
            model: 'Tools',
            key: 'id',
          },
        },
        rating: Sequelize.INTEGER,
        comment: Sequelize.TEXT,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Reviews');
    },
  };
  