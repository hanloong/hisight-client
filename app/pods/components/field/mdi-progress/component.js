import Ember from 'ember';

export default Ember.Component.extend({
  width: function() {
    return this.get('value') + '%';
  }.property('value')
});
