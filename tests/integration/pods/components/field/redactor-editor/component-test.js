import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('field/redactor-editor', 'Integration | Component | field/redactor editor', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{field/redactor-editor}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#field/redactor-editor}}
      template block text
    {{/field/redactor-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
