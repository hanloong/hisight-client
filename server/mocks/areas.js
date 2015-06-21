module.exports = function(app) {
  var express = require('express');
  var areasRouter = express.Router();
  var mockAreas = [
    {id: 1, name: 'General', project_id: 1, factors: [1, 2, 3]}
  ]

  areasRouter.get('/', function(req, res) {
    res.send({
      'areas': mockAreas
    });
  });

  areasRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  areasRouter.get('/:id', function(req, res) {
    res.send({
      'areas': mockAreas[req.params.id - 1]
    });
  });

  areasRouter.put('/:id', function(req, res) {
    res.send({
      'areas': mockAreas[req.params.id - 1]
    });
  });

  areasRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/areas', areasRouter);
};
