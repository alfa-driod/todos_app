const mongoose = require('mongoose');

const todoShema = mongoose.Schema({
    title: String,
    description: String,
    deadline: Date,
    isCompleted: Boolean
}, {timestamp: true});


const todo = mongoose.model('todo');
// export default todo;

module.exports = todo;