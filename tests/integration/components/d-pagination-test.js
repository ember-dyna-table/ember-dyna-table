import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { paginationTable } from '../../datasets/tables';

module('Integration | Component | z pagination', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{d-pagination}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#d-pagination}}
        template block text
      {{/d-pagination}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it paginates data', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, paginationTable, {
      state: {
        pagination: {
          pageSize:5,
          currentPage:1
        }
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-pagination
                  table=table as |p|}}
              {{d-table table=p.table}}
          {{/d-pagination}}
    `);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
  });


  test('it shows second page correctly', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, paginationTable, {
      state: {
        pagination: {
          pageSize:5,
          currentPage:2
        }
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-pagination
                  table=table as |p|}}
              {{d-table table=p.table}}
          {{/d-pagination}}
    `);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '6,6,6,7,7,7,8,8,8,9,9,9,10,10,10');
  });

  test('it goes to next page', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, paginationTable, {
      state: {
        pagination: {
          pageSize:5,
          currentPage:1
        }
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-pagination
                  table=table as |p|}}
              {{d-table table=p.table}}
              <a href="#" id="change-next" {{action p.pagination.changeNext}}>&gt;</a>
          {{/d-pagination}}
    `);
    await click('#change-next');
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '6,6,6,7,7,7,8,8,8,9,9,9,10,10,10');
  });

  test('it goes to previous page', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, paginationTable, {
      state: {
        pagination: {
          pageSize:5,
          currentPage:2
        }
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-pagination
                  table=table as |p|}}
              {{d-table table=p.table}}
              <a href="#" id="change" {{action p.pagination.changePrevious}}>&gt;</a>
          {{/d-pagination}}
    `);
    await click('#change');
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
  });

  test('it changes data when pageSize is changed', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, paginationTable, {
      state: {
        pagination: {
          pageSize:5,
          currentPage:1
        }
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-pagination
                  table=table as |p|}}
              {{d-table table=p.table}}
              <a href="#" id="change" {{action p.pagination.changePrevious}}>&gt;</a>
          {{/d-pagination}}
    `);
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
    this.set('table.state.pagination.pageSize', 2);
    return settled().then(() => {
      assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,1,1,2,2,2');
    });

  });

  test('it calculates lastPage right for length 100 and pageSize 33', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, paginationTable, {
      state: {
        pagination: {
          pageSize:33,
          currentPage:1
        }
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-pagination
                  table=table as |p|}}
              {{d-table table=p.table}}
              <div id="last-page">{{p.pagination.lastPage}}</div>
          {{/d-pagination}}
    `);
    assert.equal(find('#last-page').innerHTML, '4');
  });

  test('it calculates lastPage right for length 100 and pageSize 2', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, paginationTable, {
      state: {
        pagination: {
          pageSize:2,
          currentPage:1
        }
      }
    }));

    // Template block usage:
    await render(hbs`
          {{#d-pagination
                  table=table as |p|}}
              {{d-table table=p.table}}
              <div id="last-page">{{p.pagination.lastPage}}</div>
          {{/d-pagination}}
    `);
    assert.equal(find('#last-page').innerHTML, '50');
  });
});
