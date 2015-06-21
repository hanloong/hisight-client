import Ember from 'ember';

export default Ember.Route.extend({
  project: null,
  deactivate: function() {
    var idea = this.controller.get('model');
    if (idea.get('isNew')) {
      idea.destroyRecord();
    }
  },
  model: function() {
    var project = this.modelFor('ideas');
    this.set('project', project);
    return this.store.createRecord('idea', {
      project: project
    });
  },
  actions: {
    createIdea: function(tempIdea) {
      tempIdea.save().then((idea) => {
        this.transitionTo('idea.show', idea);
      }).catch(function(errors) {
        console.log(errors);
      });
    },
    cancel: function(idea) {
      this.transitionTo('project.show', this.modelFor('ideas'));
    }
  }
});
