var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name : {type: String, required: true},
    oderDate: { type: Date, default: Date.now, required: true },
    expectedDate: { type: Date, required: true },    
    expectedDate: { type: Date, required: true },
    user : { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Order', schema)