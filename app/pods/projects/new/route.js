import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var project = this.controller.get('model');
    if (project.get('isNew')) {
      project.destroyRecord();
    }
  },
  model: function() {
    return this.store.createRecord('project');
  },
  actions: {
    createProject: function(tempProject, expires_at) {
      tempProject.set('expires_at', new Date(expires_at));
      tempProject.save().then((project) => {
        this.transitionTo('projects.factors', project);
      }).catch(function() {
      });
    },
    cancel: function(project) {
      console.log(project);
      this.transitionTo('projects');
    }
  }
});
