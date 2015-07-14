import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateIdea: function(tempIdea) {
      tempIdea.save().then((idea) => {
        this.transitionTo('app.idea.show', idea);
      }).catch(function(errors) {
        console.log(errors);
      });
    },
    cancel: function(idea) {
      this.transitionTo('app.idea.show', idea);
    }
  }
});
