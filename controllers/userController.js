const User = require('../models/User')

exports.home = function (req, res) {

    res.render('home')

}
exports.signup = function (req, res) {

    User.signup(
        new User({
            userName: req.body.username,
            email: req.body.email,
            picture: req.body.picture,
            biography: req.body.bio
        }),
        req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                return res.render("signup");
            }

        }
    );

}

exports.signin = function (req, res) {

    res.render('signin')

}

exports.logout = function (req, res) {
    req.logout();
    res.redirect("/home");
};