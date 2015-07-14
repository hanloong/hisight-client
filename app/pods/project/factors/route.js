import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newArea: function(project) {
      return this.store.createRecord('area', {project: project});
    },
    newFactor: function(area) {
      return this.store.createRecord('factor', {area: area});
    },
    save: function(model) {
      model.get('areas').forEach((area) => {
        if (area.get('delete')) {
          area.destroyRecord();
        } else {
          area.save();
        }
        area.get('factors').forEach((factor) => {
          if (factor.get('delete')) {
            factor.destroyRecord();
          } else {
            factor.save();
          }
        });
      });
      this.transitionTo('app.project.edit', model);
    }
  }
});
