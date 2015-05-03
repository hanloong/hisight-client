import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var input = this.$('.datepicker').pickadate({
      format: 'Project will expire on dddd, dd mmm, yyyy',
      submitFormat: 'yyyy/mm/dd',
      hiddenName: true
    });
    var picker = input.pickadate('picker');
    picker.set('select', new Date(this.get('expiresAt')));
  },
  isNew: function() {
    var model = this.get('model');
    return model.get('isNew');
  }.property('model'),
  expiresAt: function() {
    var model = this.get('model');
    return model.get('expires_at');
  }.property('model'),
  actions: {
    save: function() {
      var expires_at = this.$('input[name="expires_at"]').val();
      this.sendAction('save', this.get('model'), expires_at);
    }
  }
});
