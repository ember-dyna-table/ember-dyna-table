import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { sortableTable, nestedDataTable } from '../../datasets/tables';

module('Integration | Component | z sorter', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{d-sorter}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#d-sorter}}
        template block text
      {{/d-sorter}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it sorts data using 1 key', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, sortableTable, {
      state: {
        sorting: ['foo:desc']
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-sorter
                  table=table as |s|}}
              {{d-table table=s.table}}
          {{/d-sorter}}
    `);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '2,1,3,1,1,1,1,2,2');
  });

  test('it sorts data using 2 keys', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, sortableTable, {
      state: {
        sorting: ['foo:desc', 'bar:desc']
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-sorter
                  table=table as |s|}}
              {{d-table table=s.table}}
          {{/d-sorter}}
    `);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '2,1,3,1,2,2,1,1,1');
  });


  test('it sorts nested data using nested key', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, nestedDataTable, {
      state: {
        sorting: ['foo.one:desc']
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-sorter
                  table=table as |s|}}
              {{d-table table=s.table}}
          {{/d-sorter}}
    `);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), 'e,f,3,6,c,d,2,5,a,b,1,4');
  });
});