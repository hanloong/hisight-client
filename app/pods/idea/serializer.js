import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    user: {serialize: false},
    score: {serialize: false},
    favourites_count: {serialize: false},
  }
});
