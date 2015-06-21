import DS from 'ember-data';

var Area = DS.Model.extend({
  name:         DS.attr('string'),
  factors:      DS.hasMany('factor', {async: true}),
  project:      DS.belongsTo('project'),
  delete:       DS.attr('boolean', {defaultValue: false}),

  nameInputId: function() {
    return 'area_name_' + this.get('id');
  }.property('id'),
});

export default Area;
