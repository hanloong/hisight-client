import Ember from 'ember';

export default Ember.Component.extend({
  activeFactors: function() {
    return this.get('area').get('factors').filter((factor) => {
      return !factor.get('delete');
    });
  }.property('area.factors.@each.delete'),

  actions: {
    newFactor: function(area) {
      this.sendAction('newFactor', area);
    },
    destroyFactor: function(factor) {
      factor.set('delete', true);
    },
    destroyArea: function(area) {
      area.set('delete', true);
    }
  }
});
