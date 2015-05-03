import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateIdea: function(tempIdea) {
      tempIdea.save().then((idea) => {
        this.transitionTo('projects.ideas.show', idea.get('project'), idea);
      }).catch(function(errors) {
        console.log(errors);
      });
    }
  }
});
