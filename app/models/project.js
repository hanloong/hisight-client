import DS from 'ember-data';

let Project = DS.Model.extend({
  name:                 DS.attr('string'),
  description:          DS.attr('string'),
  public:               DS.attr('boolean', {defaultValue: false}),
  incognito:            DS.attr('boolean', {defaultValue: false}),
  voting:               DS.attr('boolean', {defaultValue: true}),
  end_at:               DS.attr('date'),
  user:                 DS.belongsTo('user', {async: true}),
  ideas:                DS.hasMany('idea', {async: true}),
  areas:                DS.hasMany('area', {async: true}),
});

export default Project;
