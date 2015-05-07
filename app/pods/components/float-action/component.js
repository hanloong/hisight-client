import Ember from 'ember';

export default Ember.Component.extend({
  updateTooltip: function() {
    Ember.run.later((function() {
      Ember.$('.tooltipped').tooltip({delay: 50});
    }), 500);
  }.observes('project', 'idea'),

  didInsertElement: function() {
    this.updateTooltip();
  }
});
