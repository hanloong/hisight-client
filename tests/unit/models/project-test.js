import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('project', {
  // Specify the other units that are required for this test.
  needs: ['model:idea', 'model:user', 'model:comment']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
