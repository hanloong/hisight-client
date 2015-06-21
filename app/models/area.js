import DS from 'ember-data';

var Area = DS.Model.extend({
  name:         DS.attr('string'),
  factors:      DS.hasMany('factor', {async: true}),
  project:      DS.belongsTo('project'),
  delete:       DS.attr('boolean', {defaultValue: false}),

  nameInputId: function() {
    if (this.get('id')) {
      return `area_name_${this.get('id')}`;
    } else {
      return `area_name_rand_${Math.floor(Math.random()*111)}`;
    }
  }.property('id'),
});

export default Area;
