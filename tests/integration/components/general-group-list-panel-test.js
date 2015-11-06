import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('general-group-list-panel', 'Integration | Component | general group list panel', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{general-group-list-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#general-group-list-panel}}
      template block text
    {{/general-group-list-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
