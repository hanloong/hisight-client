import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateProject: function(tempProject, expires_at) {
      tempProject.set('expires_at', new Date(expires_at));
      tempProject.save().then((project) => {
        this.transitionTo('project.show', project);
      }).catch(function() {
      });
    },
    cancel: function(project) {
      this.transitionTo('project.show', project);
    }
  }
});
