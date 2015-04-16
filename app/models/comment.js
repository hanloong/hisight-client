import DS from 'ember-data';

let Comment = DS.Model.extend({
  comment:              DS.attr('string'),
  anonymous:            DS.attr('boolean'),
  user:                 DS.belongsTo('user'),
  idea:                 DS.belongsTo('idea')
});

Comment.reopenClass({
  FIXTURES: [
    {id: 1, comment: 'hey', idea_id: 1},
    {id: 2, comment: 'how you doin', idea_id: 1},
    {id: 3, comment: 'sorry you can\'t get through', idea_id: 1}
  ]
});

export default Comment;
