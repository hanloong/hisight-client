import DS from 'ember-data';

var Area = DS.Model.extend({
  name:         DS.attr('string'),
  factors:      DS.hasMany('factor', {async: true}),
  project:      DS.belongsTo('project')
});

Area.reopenClass({
  FIXTURES: [
    {id: 1, name: 'General', project_id: 1, factors: [1, 2, 3]}
  ]
});

export default Area;
