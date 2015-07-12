import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$(".sidebar-toggle").sideNav({closeOnClick: false});
    this.$('.modal-trigger').leanModal();
    this.$(".dropdown-button").dropdown();
  }
});
