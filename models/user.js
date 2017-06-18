var mongoose = require('mongoose');
var Schema = mongoose.Schema
var MUValidator = require('mongoose-unique-validator')

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String. unique: true },
    password: {type: String},
    orders:{type: Schema.Types.ObjectId, ref:'Order'}
})

schema.plugin(MUValidator)


module.exports = mongoose.model('User', schema)