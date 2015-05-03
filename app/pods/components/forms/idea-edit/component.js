import Ember from 'ember';

export default Ember.Component.extend({
  isNew: function() {
    var model = this.get('model');
    if (model) {
      return model.get('isNew');
    } else {
      return false;
    }
  }.property('model'),
  actions: {
    save: function() {
      this.sendAction('save', this.get('model'));
    }
  }
});
