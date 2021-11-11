const User = require('../models/user.model');

module.exports.addNewUser = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json({
                message: 'User added successfully',
                user
            });
        }
    });
}

module.exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json({
                message: 'User updated successfully',
                user
            });
        }
    });
}

module.exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json({
                message: 'User deleted successfully',
                user
            });
        }
    });
}

module.exports.getAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        } else {
            res.status(200).json({
                message: 'Users fetched successfully',
                users
            });
        }
    });
}
