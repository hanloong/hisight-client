import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['project', 'idea'],
  project: null,
  idea: null,
  currentProject: function() {
    this.set('project', this.get('controllers.project.model'));
  }.observes('controllers.project.model'),
  currentIdea: function() {
    this.set('idea', this.get('controllers.project.model'));
  }.observes('controllers.idea.model')
});
