import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$('.redactor').redactor({
      toolbarFixed: false
    });
  }
});