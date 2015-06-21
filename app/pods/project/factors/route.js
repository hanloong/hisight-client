import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newFactor: function(area) {
      return this.store.createRecord('factor', {area: area});
    },
    updateFactor: function(factor) {
      factor.save().then((model) => {
      }).catch((errors) => {
        console.log(errors);
      });
    },
    destroyFactor: function(factor) {
      factor.destroyRecord();
    },
    newArea: function(project) {
      return this.store.createRecord('area', {project: project});
    },
    updateArea: function(area) {
      area.save().then((model) => {
        console.log('area update');
      }).catch((errors) => {
        console.log(errors);
      });
    },
    destroyArea: function(area) {
      area.destroyRecord();
    },
  }
});
