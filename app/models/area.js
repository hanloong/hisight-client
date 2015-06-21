import DS from 'ember-data';

var Area = DS.Model.extend({
  name:         DS.attr('string'),
  factors:      DS.hasMany('factor', {async: true}),
  project:      DS.belongsTo('project')
});

export default Area;
