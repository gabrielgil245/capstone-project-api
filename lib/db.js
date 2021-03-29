const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 
  "capstone-project-api", // Database needs to be created
  process.env.DB_USER, // "root"
  process.env.DB_PASS, // Enter your local MySQL password here
  {
    host:process.env.DB_HOST, // "localhost"
    dialect:"mysql"
  },
  {
    logging: false
  }
);
module.exports = {sequelize};

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });