import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('app' , {path: '/app'}, function() {

    this.route('dashboard', {path: '/'});
    this.route('search');

    this.resource('projects', {path: '/projects'}, function() {
      this.route('new');

      this.resource('project', {path: '/:project_id'}, function() {
        this.route('show', {path: ''});
        this.route('edit', {path: '/edit'});
        this.route('factors', {path: '/factors'});

        this.resource('ideas', {path: '/ideas'}, function() {
          this.route('new');
          this.resource('idea', {path: '/:idea_id'}, function() {
            this.route('show', {path: ''});
            this.route('edit', {path: '/edit'});
          });
        });
      });
    });
  });

  this.route('login');
  this.route('home', {path: '/'});
});
