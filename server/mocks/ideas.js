module.exports = function(app) {
  var express = require('express');
  var faker = require('Faker');
  var ideasRouter = express.Router();
  var mockIdeas = [
    {id: 1, name: 'Great Idea', project: 1, description: faker.Lorem.paragraphs(), comments: [1, 2, 3], ratings: [1, 2, 3, 4, 5]},
    {id: 2, name: 'Another Great Idea', project: 1}
  ]

  ideasRouter.get('/', function(req, res) {
    res.send({
      'ideas': mockIdeas
    });
  });

  ideasRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ideasRouter.get('/:id', function(req, res) {
    res.send({
      'ideas': mockIdeas[req.params.id -1]
    });
  });

  ideasRouter.put('/:id', function(req, res) {
    res.send({
      'ideas': mockIdeas[req.params.id -1]
    });
  });

  ideasRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/ideas', ideasRouter);
};
