const User = require('../models/User');

const getUsers = async (req, res) => {
    try {
        let userId = req.params.userId;
        let user = await User.findOne({
            _id: userId
        });
        if (user) res.send({
            error: false,
            user: user
        });
    } catch (error) {
        res.status(404);
        res.send({
            error: true,
            message: error
        });
    }
};

const postUsers = async (req, res) => {
    try {
        let user = {
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            picture: req.body.picture,
            biography: req.body.bio,
        };

        let newUser = await User.create(user);
        await newUser.save();
        console.log("new user created: ", newUser);
        res.status(200);
        res.send({
            error: false,
            user: newUser
        });
    } catch (error) {
        res.send({
            error: true,
            message: error
        });
    }

};

const updateUsers = async (req, res) => {
    try {
        let user = {
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            picture: req.body.picture,
            biography: req.body.bio,
        };
        if (!user) {
            res.send({
                error: true,
                message: "No user found!"
            });
        } else {
            let userId = req.params.userId;
            let updatedUser = await User.findById(userId, (err, response) => {
                if (!err && response) {
                    response = user;
                    await response.save();
                }
            });
            res.status(302);
        }
        console.log("user updated: ", updatedUser);
        res.send({
            error: false,
            user: updatedUser
        });
    } catch (error) {
        res.send({
            error: true,
            message: error
        });
    }
};

const deleteUsers = async (req, res) => {
    const userId = req.params.userId;

    try {
        await User.findByIdAndDelete(userId, (err, user) => {
            if (!err) res.redirect("/" + userId + "/users");
        })
    } catch (error) {
        res.send("Couldn't delete User");
    }
}


exports.getUsers = getUsers
exports.postUsers = postUsers
exports.updateUsers = updateUsers
exports.deleteUsers = deleteUsers