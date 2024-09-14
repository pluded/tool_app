// server.js

require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/tools', require('./routes/tools'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/reviews', require('./routes/reviews'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Database
const db = require('./models');

// Server and Socket.io Setup
const server = http.createServer(app);
const io = socketIo(server);
require('./config/socket')(io);

// Port
const PORT = process.env.PORT || 5000;

// Sync Database and Start Server
db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
