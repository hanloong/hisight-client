import Ember from 'ember';

export default Ember.Component.extend({
  updateTooltip: function() {
    Ember.$('.tooltipped').tooltip({delay: 50});
  }.observes('project', 'idea'),

  didInsertElement: function() {
    this.updateTooltip();
  }
});
