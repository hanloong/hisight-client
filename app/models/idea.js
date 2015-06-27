import DS from 'ember-data';

let Idea = DS.Model.extend({
  name:                 DS.attr('string'),
  description:          DS.attr('string'),
  score:                DS.attr('number'),
  anonymous:            DS.attr('boolean'),
  favourites_count:     DS.attr('number'),
  comments_count:       DS.attr('number'),
  project:              DS.belongsTo('project'),
  user:                 DS.belongsTo('user'),
  comments:             DS.hasMany('comment', {async: true}),
  ratings:              DS.hasMany('rating', {async: true})
});

export default Idea;
