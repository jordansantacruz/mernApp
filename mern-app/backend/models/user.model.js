const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    passwordHash:{
        type:String,
        required: false,
        trim: true
    },
    accountType: {
        type: String,
        required: true,
        enum: ['customer', 'staff', 'management']
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;