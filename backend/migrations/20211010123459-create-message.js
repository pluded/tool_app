module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Messages', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        senderId: {
          type: Sequelize.UUID,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        receiverId: {
          type: Sequelize.UUID,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        content: Sequelize.TEXT,
        read: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Messages');
    },
  };
  