const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 8
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    accountType: {
        type: String,
        required: true,
        enum: ['customer', 'staff', 'management']
    }
}, {timestamps: true});


userSchema.pre('validate', function (next){
    console.log("hashing...");
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password'))
    {
        console.log("user is not modified, returning...");
        return next();
    }

    // generate a salt
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        if (err) return next();

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next();

            // override the cleartext password with the hashed one
            console.log("hashed pw is " + hash);
            user.password = hash;
            return next();
        });
    });        
});


const User = mongoose.model('User', userSchema);

module.exports = User;