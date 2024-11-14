const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })
schema.methods.work = function(){
    console.log(this.name + " начало работу")
}
const work = mongoose.model('work', schema);
const hard_work = new work({name: 'sedent_work'});
hard_work.save().then(() =>hard_work.work());