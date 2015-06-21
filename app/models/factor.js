import DS from 'ember-data';

var Factor = DS.Model.extend({
  name:         DS.attr('string'),
  weight:       DS.attr('number'),
  negative:     DS.attr('boolean'),
  area:         DS.belongsTo('area'),
  delete:       DS.attr('boolean', {defaultValue: false}),

  nameInputId: function() {
    return 'factor_name_' + this.get('id');
  }.property('id'),

  negativeInputId: function() {
    return 'factor_neg_' + this.get('id');
  }.property('id')
});

export default Factor;
