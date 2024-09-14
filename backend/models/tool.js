module.exports = (sequelize, DataTypes) => {
    const Tool = sequelize.define('Tool', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: DataTypes.UUID,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      category: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      availability: DataTypes.JSON, // Array of available date ranges
      images: DataTypes.ARRAY(DataTypes.STRING),
    });
  
    return Tool;
  };
  