import Ember from 'ember';

export default Ember.Route.extend({
  deactivate: function() {
    var idea = this.controller.get('model');
    if (idea.get('isNew')) {
      idea.destroyRecord();
    }
  },
  model: function() {
    var project = this.modelFor('projects.ideas');
    return this.store.createRecord('idea', {
      project: project
    });
  },
  actions: {
    createIdea: function(tempIdea) {
      tempIdea.save().then((idea) => {
        this.transitionTo('projects.ideas.show', idea.get('project'), idea);
      }).catch(function(errors) {
        console.log(errors);
      });
    }
  }
});
