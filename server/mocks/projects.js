module.exports = function(app) {
  var express = require('express');
  var projectsRouter = express.Router();
  var mockProjects = [
    {id: 1, name: 'Sandbox', description: 'This is a playground for stuff', ideas: [1, 2], areas: [1]},
    {id: 2, name: 'Ithaka Public', description: 'A place to give feedback, make suggestions and help buid the new generation of ideation software.'},
  ];

  projectsRouter.get('/', function(req, res) {
    res.send({
      'projects': mockProjects
    });
  });

  projectsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  projectsRouter.get('/:id', function(req, res) {
    res.send({
      'projects': mockProjects[req.params.id - 1]
    });
  });

  projectsRouter.put('/:id', function(req, res) {
    res.send({
      'projects': mockProjects[req.params.id - 1]
    });
  });

  projectsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/projects', projectsRouter);
};
