import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { standardTable, customHeaderRender } from '../../datasets/tables';

module('Integration | Component | z header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    this.set('table', Object.assign({}, standardTable));
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{d-header d-table=table}}`);

    assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(',').trim(), 'foo,bar,baz');

    // Template block usage:
    await render(hbs`
      {{#d-header d-table=table}}
        template block text
      {{/d-header}}`);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it doesnt renders if settings header=false', async function(assert) {
    this.set('table', Object.assign({}, standardTable, { settings: { header: false } }));
    await render(hbs`{{d-header d-table=table}}`);
    assert.equal(find('*').textContent.trim(), '');
  });

  test('it renders custom header component', async function(assert) {
    this.set('table', customHeaderRender);
    await render(hbs`{{d-header d-table=table}}`);
    assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(','), 'foo,$bar$$,baz');
  });

  test('it renders header value from column.header.value', async function(assert) {
    this.set('table', Object.assign({}, standardTable, {
      columns: [
        { key: 'foo' }, { key: 'bar', header: { value: 'BAR' } }, { key: 'baz' }
      ]
    }));
    await render(hbs`{{d-header d-table=table}}`);
    assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(','), 'foo,BAR,baz');
  });

  test('it sends action from header component to header', async function(assert) {
    let counter = 0;

    // Set any properties with this.set('myProperty', 'value');
    this.set('table', Object.assign(standardTable, {
      columns: [
        { key: 'foo' }, { key: 'bar' }, { key: 'baz', header: { component: 'header-with-action' } }
      ]
    }));

    this.set('headerAction', () => {
      counter++;
    });

    await render(hbs`{{d-header d-table=table someAction=(action headerAction)}}`);
    run(() => this.$('td:contains("baz")').click());

    return settled().then(() => {
      assert.equal(counter, 1);
    });
  });
});
