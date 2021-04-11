const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcrypt');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    User.find({username: req.body.username})
        .then(users => {
            if(!users || users.length == 0){
                res.status(404).send("User not found");
            }else{
                let bool = bcrypt.compareSync(req.body.password, users[0].password);
                res.json(bool);
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const accountType = req.body.accountType;
    const newUser = new User({username, password, accountType});
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;