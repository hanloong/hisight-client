import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('dashboard.index', {path: '/'});

  this.route('projects', {path: '/projects'}, function() {
    this.route('new');
    this.route('show', {path: '/:project_id'});
    this.route('edit', {path: '/:project_id/edit'});

    this.route('ideas', {path: '/:project_id/ideas'}, function() {
      this.route('new');
      this.route('edit', {path: '/:idea_id/edit'});
      this.route('show', {path: '/:idea_id'});
    });
  });

});
