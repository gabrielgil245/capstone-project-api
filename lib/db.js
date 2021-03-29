const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 
  `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/capstone-project-api`, 
  {logging: false});

// const sequelize = new Sequelize(
//   "capstone-project-api", // Database needs to be created
//   process.env.DB_USER, // "root"
//   process.env.DB_PASS, // Enter your local MySQL password here
//   {
//     host:process.env.DB_HOST, // "localhost"
//     dialect:"mysql"
//   },
//   {
//     logging: false
//   }
// );
module.exports = {sequelize};

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });