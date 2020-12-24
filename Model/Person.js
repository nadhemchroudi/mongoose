const moongoose = require('mongoose');
const validator = require('validator');

const personModel = new schema ({
    name: String, 
    age: Number, 
    favoutiteFood : [String]
})

module.exports = mongoose.model('Person', personModel);
