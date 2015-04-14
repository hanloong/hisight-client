import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('projects', {path: '/'})
  this.route('projects', {path: '/projects'}, function() {
    this.route('new');
  });

});
