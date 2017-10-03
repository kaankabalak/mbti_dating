// require mongoose
var mongoose = require('mongoose');
// create the schema
var UserSchema = new mongoose.Schema({
 name: {type: String, required: true, maxlength: 50},
 age: {type: Number},
 image: {type: String},
 description: {type: String, maxlength: 150},
 personality: {type: String}
})
var User = mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'