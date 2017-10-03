var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    find_all: function(req,res) {
        User.find({}).sort({_id:-1})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    },
    create: function(req, res) {
        console.log('POST DATA', req.body);
        User.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
            console.log('error');
        })
    }
}