import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  classNames: ['range-field'],
  classNameBindings: ['isNegative:negative'],
  isNegative: function() {
    return this.get('negative')
  }.property('negative')
});
