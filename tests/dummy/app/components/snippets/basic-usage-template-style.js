// BEGIN-SNIPPET basic-usage-template-style
import {A} from '@ember/array';
import {later} from '@ember/runloop';
import Component from '@ember/component';
import layout from '../../templates/components/snippets/basic-usage-template-style';
import {computed} from '@ember/object';

const changeData = function () {
  let length = 5;
  let data = this.get('table.data');
  data.clear()
  while (length--) {
    data.pushObject({
      foo: Math.floor(Math.random() * 100),
      bar: Math.floor(Math.random() * 100),
      baz: Math.floor(Math.random() * 100),
    })
  }
  later(this, changeData, 1000)
}

export default Component.extend({
  layout,
  init() {
    this._super(...arguments);
    later(this, changeData, 2000);
  },
  table: computed(() => ({
    columns: A([]),
    data: A([
      {foo: '5', bar: '2', baz: '3'},
      {foo: '4', bar: '5', baz: '6'},
      {foo: '7', bar: '8', baz: '9'},
    ])
  }))
});

// END-SNIPPET