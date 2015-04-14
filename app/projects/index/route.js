import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var one = this.store.createRecord('project', {
      name: 'Sandbox',
      description: 'This is a playground for stuff'
    });
    var two = this.store.createRecord('project', {
      name: 'Ithaka Public',
      description: 'A place to give feedback, make suggestions and help buid the new generation of ideation software.'
    });
    return {projects: [one, two]};
  }
});
