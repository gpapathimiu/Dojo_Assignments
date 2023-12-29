const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input a name!"],
        minlength: [3, "Name but be at least 3 characters long!"]
    },
    currentUser: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);

