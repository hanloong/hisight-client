import DS from 'ember-data';

var Factor = DS.Model.extend({
  name:         DS.attr('string'),
  weight:       DS.attr('number', {defaultValue: 50}),
  negative:     DS.attr('boolean'),
  area:         DS.belongsTo('area'),
  delete:       DS.attr('boolean', {defaultValue: false}),

  nameInputId: function() {
    if (this.get('id')) {
      return `factor_name_${this.get('id')}`;
    } else {
      return `factor_name_rand_${Math.floor(Math.random()*999)}`;
    }
  }.property('id'),

  negativeInputId: function() {
    if (this.get('id')) {
      return `factor_neg_${this.get('id')}`;
    } else {
      return `factor_neg_rand_${Math.floor(Math.random()*999)}`;
    }
  }.property('id')
});

export default Factor;
