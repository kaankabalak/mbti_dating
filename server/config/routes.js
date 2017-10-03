var users = require('../controllers/users.js');
module.exports = function(app) {
    app.get('/results', function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        users.find_all(req,res);
    })

    app.post('/create', function(req, res) {
        users.create(req,res);
    })

    app.all('*', (req, res) => {
        res.sendFile(path.resolve
        ('public/dist/index.html'));
    });
}