var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render('index', { title: 'Express' });
});

router.get('/mental', function(req, res, next) {
  res.render('work', {
    title:"Mental",
    picture:"/images/mental.png",
    desc:"Говорят, что от долгих раздумий человек устает еще сильнее, чем от физических нагрузок. Так ли это?"
  });
});

router.get('/manual', function(req, res, next) {
  res.render('work', {
    title:"Manual",
    picture:"/images/manual.png",
    desc:"Ручная работа бывает самой тяжелой."
  });
});

router.get('/sedent', function(req, res, next) {
  res.render('work', {
    title:"Sedent",
    picture:"/images/Sedentary.png",
    desc:"Сидячая работа может плохо сказаться на вашем позвоночнике, не забывайте это."
  });
});

module.exports = router;
