import { A } from '@ember/array';
import { later } from '@ember/runloop';
import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    let changeData = () => {
      let length = Math.floor(Math.random() * 5) + 3;
      let data = this.get('table.data');
      data.clear()
      while (length--) {
        data.pushObject({
          foo: Math.floor(Math.random() * 100),
          bar: Math.floor(Math.random() * 100),
          baz: Math.floor(Math.random() * 100),
        })
      }
      if (Math.random() > 0.3) {
        let columns = this.get('table.columns');
        columns.pushObject(columns.shiftObject());
      }
      later(changeData, 500)
    }
    later(changeData, 2000);
  },
  table: computed(()=>({
    columns: A([{key: 'foo'}, {key: 'bar'}, {key: 'baz'}]),
    data: A([
      {foo: '5', bar: '2', baz: '3'},
      {foo: '4', bar: '5', baz: '6'},
      {foo: '7', bar: '8', baz: '9'},
    ])
  }))
});
