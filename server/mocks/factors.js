module.exports = function(app) {
  var express = require('express');
  var factorsRouter = express.Router();
  var mockFactors = [
    {id: 1, name: 'Productivity', weight: 1.0, negative: false, area_id: 1},
    {id: 2, name: 'Happiness', weight: 1.0, negative: false, area_id: 1},
    {id: 3, name: 'Risk', weight: 1.0, negative: true, area_id: 1},
    {id: 4, name: 'Upfront cost', weight: 1.0, negative: true, area_id: 2},
    {id: 5, name: 'Revenue', weight: 1.0, negative: false, area_id: 2},
  ]

  factorsRouter.get('/', function(req, res) {
    res.send({
      'factors': mockFactors
    });
  });

  factorsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  factorsRouter.get('/:id', function(req, res) {
    res.send({
      'factors': mockFactors[req.params.id - 1]
    });
  });

  factorsRouter.put('/:id', function(req, res) {
    res.send({
      'factors': mockFactors[req.params.id - 1]
    });
  });

  factorsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/factors', factorsRouter);
};
