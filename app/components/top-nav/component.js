import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$(".sidebar-toggle").sideNav({closeOnClick: true});
    this.$('.modal-trigger').leanModal();
  }
});
