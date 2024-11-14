var express = require('express');
var router = express.Router();
var Work = require('../models/work').work;

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с works');
});

router.get("/:nick", async function (req, res, next) {
    var works = await Work.find({ nick: req.params.nick });
    console.log(works)
    if (!works.length) return next(new Error("Нет такого вида работы!"))
    var work = works[0];
    res.render('work', {
        title: work.title,
        picture: work.avatar,
        desc: work.desc
    })
});

module.exports = router;