import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$('.tooltipped').tooltip({delay: 50});
  }
});
