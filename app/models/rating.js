import DS from 'ember-data';

export default DS.Model.extend({
  idea:         DS.belongsTo('idea'),
  factor:       DS.belongsTo('factor'),
  value:        DS.attr('number')
});
