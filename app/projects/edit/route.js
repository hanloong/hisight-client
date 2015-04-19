import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('project', params.project_id);
  },
  actions: {
    updateProject: function(editProject, expires_at) {
      editProject.set('expires_at', new Date(expires_at));
      editProject.save().then((project) => {
        console.log(project);
        this.transitionTo('projects.show', project);
      }).catch(function() {
      });
    }
  }
});
