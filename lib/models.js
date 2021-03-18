const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
// ORM - Object Relational Mapping

class Category extends Model{

}

Category.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // Pass the connection instance
    modelName: 'Category' // Choose the model name
});

class Question extends Model {

}

Question.init({
    // Model attributes are defined here
    questionText: {
        type: 'LONGTEXT'
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // Pass the connection instance
    modelName: 'Question' // Choose the model name
});

Category.hasMany(Question, {foreignKey: 'categoryId'});
Question.belongsTo(Category, {foreignKey: 'categoryId'});

class Answer extends Model {

}

Answer.init({
    // Model attributes are defined here
    answerText: {
        type: 'LONGTEXT'
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // Pass the connection instance
    modelName: 'Answer' // Choose the model name
});

Question.hasMany(Answer, {foreignKey: 'questionId'});
Answer.belongsTo(Question, {foreignKey: 'questionId'});


sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. 
// Please use only in localhost. I have added a condition that checks
// for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequalize.sync({force: true});
// }

module.exports = {
    Category, Question, Answer
};