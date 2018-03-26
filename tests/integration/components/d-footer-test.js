import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import standardTable from '../../datasets/tables';

module('Integration | Component | z footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    this.set('table', Object.assign({}, standardTable, { settings: { footer: true } }));
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{d-footer d-table=table}}`);

    assert.equal(this.$('tfoot tr td').map((i,item)=>item.innerHTML).toArray().join(','), 'foo,bar,baz');

    // Template block usage:
    await render(hbs`
      {{#d-footer d-table=table}}
        template block text
      {{/d-footer}}`);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });
});
