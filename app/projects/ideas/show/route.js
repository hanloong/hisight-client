import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('idea', params.idea_id).then(function(idea) {
      return Ember.RSVP.hash({
        idea: idea,
        comments: idea.get('comments')
      });
    });
  }
});
