// BEGIN-SNIPPET basic-pagination
import { A } from '@ember/array';
import { later } from '@ember/runloop';
import Component from '@ember/component';
import layout from '../../templates/components/snippets/basic-pagination';
import { computed } from '@ember/object';

const changeData = function() {
  let length = 30;
  let data = this.get('table.data');
  data.clear();
  while (length--) {
    data.pushObject({
      foo: 30 - length,
      bar: Math.floor(Math.random() * 100),
      baz: Math.floor(Math.random() * 100),
    });
  }
  // later(this, changeData, 1000)
};

export default Component.extend({
  layout,
  init() {
    this._super(...arguments);
    later(this, changeData, 100);
  },
  table: computed(() => ({
    state: {
      pagination: {
        pageSize: 5,
        currentPage: 2
      }
    },
    columns: A([{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }]),
    data: A([])
  }))
});
// END-SNIPPET