var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

router.get('/', function (req, res, next) {
  req.session.greeting = "Hi!!!";
  res.render('index', { title: 'Express', counter: req.session.counter });
});

/* GET login/registration page. */
router.get('/logreg', function (req, res, next) {
  res.render('logreg', { title: 'Вход' });
});

/* POST login/registration page. */
router.post('/logreg', async function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  console.log(username);
  console.log(password);
  var users = await User.find({ username: username });
  console.log(users);
  if (!users.length) {
    //res.send("<h1>Пользователь НЕ найден</h1>");
    var user = new
      User({ username: username, password: password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
  } else {
    //res.send("<h1>Пользователь найден</h1>");
    var foundUser = users[0];
    if (foundUser.checkPassword(password)) {
      req.session.user_id = foundUser._id
      res.redirect('/')
    } else {
      res.render('logreg', { title: 'Вход' });
    }
  }
});

router.get('/mental', function (req, res, next) {
  res.render('work', {
    title: "Mental",
    picture: "/images/mental.png",
    desc: "Говорят, что от долгих раздумий человек устает еще сильнее, чем от физических нагрузок. Так ли это?"
  });
});

router.get('/manual', function (req, res, next) {
  res.render('work', {
    title: "Manual",
    picture: "/images/manual.png",
    desc: "Ручная работа бывает самой тяжелой."
  });
});

router.get('/sedent', function (req, res, next) {
  res.render('work', {
    title: "Sedent",
    picture: "/images/Sedentary.png",
    desc: "Сидячая работа может плохо сказаться на вашем позвоночнике, не забывайте это."
  });
});

module.exports = router;
