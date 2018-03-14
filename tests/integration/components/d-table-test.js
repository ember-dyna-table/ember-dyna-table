import { findAll, find } from 'ember-native-dom-helpers';
import { run } from '@ember/runloop';
import EmberObject from '@ember/object';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {
  standardTable,
  customRender,
  nestedDataTable
} from '../../datasets/tables';

module('Integration | Component | z table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{d-table}}`);

    assert.equal(find('*').textContent.trim(), '');


  });

  test('it renders basic data by default', async function(assert) {
    this.set('table', standardTable);
    await render(hbs`{{d-table table=table}}`);

    // header
    assert.equal(this.$('table thead tr td').map((i, item)=>item.innerHTML.trim()).toArray().join(','), 'foo,bar,baz');

    //body
    assert.equal(findAll('table tbody tr').length, 3);
    assert.equal(findAll('table tbody td').length, 9);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');
  })

  test('it doesnt renders headers if settings have header = false', async function(assert) {
    this.set('table', Object.assign({}, standardTable, {settings: {header: false}}));
    await render(hbs`{{d-table table=table}}`);

    assert.equal(findAll('table thead').length, 0);
    assert.equal(findAll('table tbody tr').length, 3);
  })

  test('it renders cells with custom component', async function(assert) {
    this.set('table', customRender);
    await render(hbs`{{d-table table=table}}`);
    assert.equal(findAll('table tbody tr').length, 3);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,$2$$,3,4,$5$$,6,7,$8$$,9');
  })


  test('it handles changing data', async function(assert) {
    let changedStandardData = standardTable.data.map(i=>new EmberObject(i));
    changedStandardData[0].set('foo', "2");
    this.set('table', standardTable);
    await render(hbs`{{d-table table=table}}`);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');
    this.set('table', Object.assign({}, standardTable, {
      data: changedStandardData
    }));
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '2,2,3,4,5,6,7,8,9');
    run(function () {
      changedStandardData[0].set('foo', "3");
    })
    return settled().then(() => {
      assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '3,2,3,4,5,6,7,8,9');
    });

  })


  test('it handles changing column order', async function(assert) {
    this.set('table', new EmberObject(standardTable));
    await render(hbs`{{d-table table=table}}`);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');

    this.set('table.columns', [
      {key: 'bar'}, {key: 'foo'}, {key: 'baz'}
    ])
    return settled().then(() => {
      assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '2,1,3,5,4,6,8,7,9');
    });
  })

  test('it renders nested data using nested key', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, nestedDataTable));

    // Template block usage:
    await render(hbs`
              {{d-table table=table}}
    `);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), 'a,b,1,4,c,d,2,5,e,f,3,6');
  });
});