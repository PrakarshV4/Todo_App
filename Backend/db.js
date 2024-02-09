/*
    Todos{
        title: String,
        description: String
        completed: Boolean
    }
*/
const mongoose = require('mongoose');

//keep in .env file
mongoose.connect('mongodb+srv://Prakarsh1248:pro1248@cluster0.njkoh3k.mongodb.net/todos');

const todoschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos',todoschema);

module.exports = {
    todo
}