const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const work = mongoose.model('work', { name: String });
const hard_work = new work({ name: 'sedent' });
hard_work.save().then(() => console.log('Start work!'));