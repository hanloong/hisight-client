import Ember from 'ember';

export default Ember.Component.extend({
  withinArea: function() {
    return (this.get('area.id') === this.get('factorArea.id'));
  }.property('area', 'rating')
});
