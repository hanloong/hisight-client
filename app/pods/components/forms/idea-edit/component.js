import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      this.sendAction('save', this.get('model'));
    },
    cancel: function() {
      this.get('model').rollbackAttributes();
      this.sendAction('cancel', this.get('model'));
    }
  }
});
