# Back-End Setup Guide

## Prerequisites

- Node.js v14 or above
- PostgreSQL v12 or above
- Git

## Installation

1. **Clone the Repository**

   ```bash
        git clone https://github.com/yourusername/tool-sharing-platform.git
    ```

2. **Navigate to the Backend Directory**

    ```bash
            cd tool-sharing-platform/backend
    ```
3. **Install Dependencies**
    ```bash
        npm install
    ```
4. **Configure Environment Variables**

    Create a `.env` file in the backend directory with the following content:

    ```env
        PORT=5000
        NODE_ENV=development
        DATABASE_URL=postgres://your_db_user:your_db_password@localhost:5432/tool_sharing_db
        JWT_SECRET=your_jwt_secret
        SMTP_HOST=your_smtp_host
        SMTP_PORT=your_smtp_port
        SMTP_USER=your_smtp_user
        SMTP_PASS=your_smtp_password
5. **Set Up the Database**

    Create the PostgreSQL database:

        createdb tool_sharing_db
    Run migrations:

        npx sequelize-cli db:migrate
    Seed the database (optional):
        
        npx sequelize-cli db:seed:all

6. **Start the Server**
    `npm start`
### Commands
#### Start Server
    
    `npm start`
   
####     Run Migrations

    `px sequelize-cli db:migrate`

#### Undo Migrations

    `npx sequelize-cli db:migrate:undo`

#### Run Seeders

    `npx sequelize-cli db:seed:all`

#### Undo Seeders

    npx sequelize-cli db:seed:undo


## **2. `backend/package.json`**

```json
{
  "name": "tool-sharing-platform-backend",
  "version": "1.0.0",
  "description": "Backend for the Tool Sharing Platform",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "mocha tests/**/*.test.js"
  },
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-validator": "^6.13.0",
    "jsonwebtoken": "^8.5.1",
    "multer": "^1.4.3",
    "nodemailer": "^6.6.3",
    "passport": "^0.4.1",
    "passport-facebook": "^3.0.0",
    "passport-google-oauth20": "^2.0.0",
    "passport-jwt": "^4.0.0",
    "pg": "^8.7.1",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.6.5",
    "socket.io": "^4.1.2",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "mocha": "^9.1.1",
    "nodemon": "^2.0.12",
    "chai": "^4.3.4",
    "supertest": "^6.1.6"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

### Database Schema

We used Sequelize ORM for database migrations and models.
Models
```bash=
    User
        id
        name
        email
        password
        profileImage
        createdAt
        updatedAt

    Tool
        id
        userId (owner)
        name
        description
        category
        price
        availability (date ranges)
        images
        createdAt
        updatedAt

    Booking
        id
        toolId
        userId (renter)
        startDate
        endDate
        status
        totalPrice
        createdAt
        updatedAt

    Message
        id
        senderId
        receiverId
        content
        read
        createdAt
        updatedAt

    Review
        id
        userId
        toolId
        rating
        comment
        createdAt
        updatedAt

```