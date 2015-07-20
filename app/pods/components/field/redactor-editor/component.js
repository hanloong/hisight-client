import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var _this = this;
    Ember.$('.redactor').redactor({
      changeCallback: function() {
        _this.set('value', this.code.get());
      },
      toolbarFixed: false
    });
  }
});
