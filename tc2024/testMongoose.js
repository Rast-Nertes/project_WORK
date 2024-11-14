const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Work = require('./models/work.js').work
var work = new Work({
    title: "Сидячая работа",
    nick:'sedent'
})
work.save();