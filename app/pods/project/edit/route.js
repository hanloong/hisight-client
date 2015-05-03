import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateProject: function(tempProject, expires_at) {
      tempProject.set('expires_at', new Date(expires_at));
      tempProject.save().then((project) => {
        this.transitionTo('projects.show', project);
      }).catch(function() {
      });
    }
  }
});
