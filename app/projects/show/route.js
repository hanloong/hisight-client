import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var project =  this.store.find('project', params.project_id);
    return Ember.RSVP.hash({
      project: project,
      ideas: project.get('ideas')
    });
  }
});
