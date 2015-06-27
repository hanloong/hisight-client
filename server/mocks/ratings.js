module.exports = function(app) {
  var express = require('express');
  var ratingsRouter = express.Router();
  var mockRatings = [
    {id: 1, idea: 1, factor: 1, value: 40, description: 'Some text here'},
    {id: 2, idea: 1, factor: 2, value: 30, description: 'Some text here'},
    {id: 3, idea: 1, factor: 3, value: 90, description: 'Some text here'},
  ]

  ratingsRouter.get('/', function(req, res) {
    res.send({
      'ratings': mockRatings
    });
  });

  ratingsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ratingsRouter.get('/:id', function(req, res) {
    res.send({
      'ratings': mockRatings[req.params.id -1]
    });
  });

  ratingsRouter.put('/:id', function(req, res) {
    res.send({
      'ratings': mockRatings[req.params.id -1]
    });
  });

  ratingsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/ratings', ratingsRouter);
};
