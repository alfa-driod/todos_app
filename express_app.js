const express = require('express');
const todoController = require('./controllers/todoController');
const server = express();
const mongoose = require('mongoose')

const mongo_db_url = 'mongodb+srv://tee_bhagg:Acorner123@cluster0.y5z2z.mongodb.net/todo_db?retryWrites=true&w=majority'

server.get('/todo', function (req,res) {
    res.status(200).json('All todos have been updated');
});
server.post('/todo', function (req,res) {
    res.status(200).json('All a new todos');
    },)
server.put('/todo', function (req,res) {
    res.status(200).json('All todos have been modified');
    },)
server.delete('/todo', function (req,res) {
    res.status(200).json('All todos have been deleted');
    },)

server.listen(4000, function () {
    console.log('Server has started running in express');
    mongoose.connect(mongo_db_url).then(function () {
        console.log('DB is connected');
    }).catch(function (error) {
        console.log('DB is not connected: ', error.message);
    });
})