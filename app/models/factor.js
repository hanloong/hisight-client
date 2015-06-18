import DS from 'ember-data';

var Factor = DS.Model.extend({
  name:         DS.attr('string'),
  weight:       DS.attr('number'),
  negative:     DS.attr('boolean'),
  area:         DS.belongsTo('area'),

  nameInputId: function() {
    return 'factor_name_' + this.get('id');
  }.property('id'),

  negativeInputId: function() {
    return 'factor_neg_' + this.get('id');
  }.property('id')
});

Factor.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Productivity', weight: 1.0, negative: false, area_id: 1},
    {id: 2, name: 'Happiness', weight: 1.0, negative: false, area_id: 1},
    {id: 3, name: 'Risk', weight: 1.0, negative: true, area_id: 1},
  ]
});

export default Factor;
