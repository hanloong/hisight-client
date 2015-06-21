import DS from 'ember-data';

let Project = DS.Model.extend({
  name:                 DS.attr('string'),
  description:          DS.attr('string'),
  public:               DS.attr('boolean'),
  sandbox:              DS.attr('boolean'),
  allow_anonymous:      DS.attr('boolean'),
  expires_at:           DS.attr('date'),
  user:                 DS.belongsTo('user'),
  ideas:                DS.hasMany('idea', {async: true}),
  areas:                DS.hasMany('area', {async: true}),
});

export default Project;
