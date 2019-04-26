var db = require("../models");

module.exports = function (app) {

    app.get('/burgers', (req, res) => {
        db.Burger.findAll({}).then(function (burgers) {
            res.render("index", {burgers});
        });
    });
    //"index" refers to index.handlebars and then burgers is the array that we got back from the Sequelize line 6 that is finding all from the Burger database

    app.post('/burgers', (req, res) => {
        // const burgerName = req.body.burger_name;
        console.log(req.body);
        db.Burger.create(req.body).then(newBurger => {
            console.log(newBurger);
            res.send(newBurger);
        }).catch(err => {
            if (err) throw err;
        })
    })

};