import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',
  classNames: [
    'mdl-layout__header',
    'mdl-color--white',
    'mdl-color--grey-100',
    'mdl-color-text--grey-600'
  ],
  didInsertElement: function() {
  }
});
