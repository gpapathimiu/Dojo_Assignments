const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup : {
        type: String,
        required: [true, 'There is no joke without a setup!'],
        minlength: [10, 'Generous, are we?']
    },
    punchline: {
        type: String,
        required: [true, 'If there is no punchline, no one will laugh!'],
        minlength: [3, 'Generous, are we?']
    }
},
{ timestamps: true });

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;