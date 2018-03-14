import { find } from 'ember-native-dom-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { standardTable } from '../../datasets/tables';

module('Integration | Component | z tr', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{d-tr}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#d-tr}}
        template block text
      {{/d-tr}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });


  test('it renders custom tr component', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, standardTable, {
      settings: {
        rowComponent: 'custom-tr'
      }
    }));

    // Template block usage:
    await render(hbs`
          {{d-table table=table}}
    `);
    assert.equal(find('table tbody').textContent.replace(/[^\w|;|:]/g, ''), '0;123:1;456:2;789:');
  });
});
