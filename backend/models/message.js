module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      senderId: DataTypes.UUID,
      receiverId: DataTypes.UUID,
      content: DataTypes.TEXT,
      read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    return Message;
  };
  