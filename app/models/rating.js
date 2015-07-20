import DS from 'ember-data';

export default DS.Model.extend({
  idea:                 DS.belongsTo('idea', {async: true}),
  factor:               DS.belongsTo('factor', {async: true}),
  score:                DS.attr('number')
});
