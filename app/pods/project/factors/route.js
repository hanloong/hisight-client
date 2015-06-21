import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newFactor: function(area) {
      return this.store.createRecord('factor', {area: area});
    },
    destroyFactor: function(factor) {
      factor.set('delete', true);
    },
    newArea: function(project) {
      return this.store.createRecord('area', {project: project});
    },
    destroyArea: function(area) {
      area.set('delete', true);
    },
    save: function(model) {
      model.get('areas').forEach((area) => {
        if (area.get('delete')) {
          area.destroyRecord();
        } else {
          area.save()
        }
        area.get('factors').forEach((factor) => {
          if (factor.get('delete')) {
            factor.destroyRecord();
          } else {
            factor.save()
          }
        });
      });
      this.transitionTo('project.edit', model);
    }
  }
});
