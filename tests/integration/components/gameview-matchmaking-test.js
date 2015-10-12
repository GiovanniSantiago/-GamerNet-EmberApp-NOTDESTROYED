import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gameview-matchmaking', 'Integration | Component | gameview matchmaking', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gameview-matchmaking}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gameview-matchmaking}}
      template block text
    {{/gameview-matchmaking}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
