module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      toolId: DataTypes.UUID,
      userId: DataTypes.UUID,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
      status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
      },
      totalPrice: DataTypes.DECIMAL,
    });
  
    return Booking;
  };
  