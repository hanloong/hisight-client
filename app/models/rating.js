import DS from 'ember-data';

export default DS.Model.extend({
  idea:                 DS.belongsTo('idea', {async: true}),
  factor:               DS.belongsTo('factor', {async: true}),
  value:                DS.attr('number'),
  description:          DS.attr('string')
});
