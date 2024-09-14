module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Bookings', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        toolId: {
          type: Sequelize.UUID,
          references: {
            model: 'Tools',
            key: 'id',
          },
        },
        userId: {
          type: Sequelize.UUID,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        startDate: Sequelize.DATEONLY,
        endDate: Sequelize.DATEONLY,
        status: {
          type: Sequelize.STRING,
          defaultValue: 'Pending',
        },
        totalPrice: Sequelize.DECIMAL,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Bookings');
    },
  };
  