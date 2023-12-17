const JokeController = require('../controllers/joke.controller');

module.exports = function(app){
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findJoke);
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.post('/api/jokes', JokeController.createJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}