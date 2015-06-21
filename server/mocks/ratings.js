module.exports = function(app) {
  var express = require('express');
  var ratingsRouter = express.Router();

  ratingsRouter.get('/', function(req, res) {
    res.send({
      'ratings': []
    });
  });

  ratingsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ratingsRouter.get('/:id', function(req, res) {
    res.send({
      'ratings': {
        id: req.params.id
      }
    });
  });

  ratingsRouter.put('/:id', function(req, res) {
    res.send({
      'ratings': {
        id: req.params.id
      }
    });
  });

  ratingsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/ratings', ratingsRouter);
};
