import Ember from 'ember';

export default Ember.Component.extend({
  formattedValue: function() {
    if (this.get('value')) {
      return this.get('value').replace(/(\r\n|\n|\r)/gm, '<br>');
    } else {
      return '';
    }
  }.property('value')
});
