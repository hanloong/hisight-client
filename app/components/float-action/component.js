import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$('.tooltipped').tooltip({delay: 50});
  }
});
