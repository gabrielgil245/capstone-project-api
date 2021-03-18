const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  "capstone-project-api", // Database needs to be created
  "root",
  "password", // Enter your local MySQL password here
  {
    host:"localhost",
    dialect:"mysql"
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