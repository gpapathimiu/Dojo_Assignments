const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/authors', AuthorController.findAllAuthors);
    app.post('/authors/new', AuthorController.createAuthor);
    app.get('/authors/:id', AuthorController.findAuthor);
    app.delete('/authors/:id', AuthorController.deleteAuthor);
    app.put('/authors/edit/:id', AuthorController.updateAuthor);
}