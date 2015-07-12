import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var idea = this.modelFor('idea')
    return Ember.RSVP.hash({
      idea: idea,
      areas: this.store.find('area', {project_id: idea.project_id})
    });
  }
});
