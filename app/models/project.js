import DS from 'ember-data';

let Project = DS.Model.extend({
  name:                 DS.attr('string'),
  description:          DS.attr('string'),
  public:               DS.attr('boolean'),
  sandbox:              DS.attr('boolean'),
  allow_anonymous:      DS.attr('boolean'),
  expires_at:           DS.attr('date'),
  ideas:                DS.hasMany('idea', {async: true}),
  user:                 DS.belongsTo('user'),
});

Project.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Sandbox', description: 'This is a playground for stuff', ideas: [1, 2]},
    {id: 2, name: 'Ithaka Public', description: 'A place to give feedback, make suggestions and help buid the new generation of ideation software.'},
  ]
});

export default Project;
