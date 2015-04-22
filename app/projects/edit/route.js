import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  },
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
