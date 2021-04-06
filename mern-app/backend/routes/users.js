const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    console.log("req body: " + req.body.username);
    User.find(req.body)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordHash = req.body.passwordHash;
    const newUser = new User({username, password, passwordHash});
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;