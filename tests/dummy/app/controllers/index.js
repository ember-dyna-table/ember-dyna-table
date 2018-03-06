import {debug} from '@ember/debug';
import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
  table: computed(() => ({
    settings: {},
    state: {},
    columns: [
      {
        key: 'foo',
        header: {
          component: 'sorting-header',
        },
      },
      {key: 'bar'},
      {key: 'baz', header: {component: 'header-with-action'}}
    ],
    data: [
      {foo: '5', bar: '2', baz: '3'},
      {foo: '4', bar: '5', baz: '6'},
      {foo: '7', bar: '8', baz: '9'},
    ]
  })),
  sorting: computed(() => ["foo:asc"]),
  bigData: (function (length) {
    let i = length;
    let result = [];
    while (i-- > 0) {
      result.push({
        foo: String(Math.floor(Math.random() * 100)),
        bar: String(Math.floor(Math.random() * 100)),
        baz: String(Math.floor(Math.random() * 100))
      })
    }
    return result;
  })(100),
  currentPage: 1,
  pageSize: 10,
  actions: {
    headerAction() {
      debug('its from header-with-action');
    }
  }
});
