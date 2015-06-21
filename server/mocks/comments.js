module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();
  var mockComments = [
    {id: 1, comment: 'hey', idea_id: 1},
    {id: 2, comment: 'how you doin', idea_id: 1},
    {id: 3, comment: 'sorry you can\'t get through', idea_id: 1}
  ]

  commentsRouter.get('/', function(req, res) {
    res.send({
      'comments': mockComments
    });
  });

  commentsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  commentsRouter.get('/:id', function(req, res) {
    res.send({
      'comments': mockComments[req.params.id - 1]
    });
  });

  commentsRouter.put('/:id', function(req, res) {
    res.send({
      'comments': mockComments[req.params.id - 1]
    });
  });

  commentsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/comments', commentsRouter);
};
