module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: DataTypes.UUID,
      toolId: DataTypes.UUID,
      rating: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
    });
  
    return Review;
  };
  