// models/index.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Tool = require('./tool')(sequelize, Sequelize);
db.Booking = require('./booking')(sequelize, Sequelize);
db.Message = require('./message')(sequelize, Sequelize);
db.Review = require('./review')(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Tool, { foreignKey: 'userId' });
db.Tool.belongsTo(db.User, { foreignKey: 'userId' });

db.User.hasMany(db.Booking, { foreignKey: 'userId' });
db.Booking.belongsTo(db.User, { foreignKey: 'userId' });

db.Tool.hasMany(db.Booking, { foreignKey: 'toolId' });
db.Booking.belongsTo(db.Tool, { foreignKey: 'toolId' });

db.User.hasMany(db.Message, { foreignKey: 'senderId', as: 'SentMessages' });
db.User.hasMany(db.Message, { foreignKey: 'receiverId', as: 'ReceivedMessages' });

db.Message.belongsTo(db.User, { foreignKey: 'senderId', as: 'Sender' });
db.Message.belongsTo(db.User, { foreignKey: 'receiverId', as: 'Receiver' });

db.Tool.hasMany(db.Review, { foreignKey: 'toolId' });
db.User.hasMany(db.Review, { foreignKey: 'userId' });

module.exports = db;
