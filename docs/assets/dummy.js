"use strict";

define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/code-example', ['exports', 'ember-code-example-component/components/code-example'], function (exports, _codeExample) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _codeExample.default;
    }
  });
});
define("dummy/components/code-snippet", ["exports", "dummy/snippets"], function (exports, _snippets) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /* global require */
  var Highlight = self.require('highlight.js');

  exports.default = Ember.Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n").filter(function (l) {
        return l !== '';
      });
      for (var i = 0; i < lines.length; i++) {
        match = /^[ \t]*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
      }
      return src;
    },

    source: Ember.computed('name', function () {
      var snippet = this.get('name').split('/').reduce(function (dir, name) {
        return dir && dir[name];
      }, _snippets.default);

      return this._unindent((snippet || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: Ember.computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
define('dummy/components/custom-render', ['exports', 'dummy/templates/components/custom-render'], function (exports, _customRender) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _customRender.default,
    tagName: 'td'
  });
});
define('dummy/components/custom-tr', ['exports', 'dummy/templates/components/custom-tr'], function (exports, _customTr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _customTr.default,
    tagName: ''
  });
});
define('dummy/components/d-filter', ['exports', 'ember-dyna-table/components/d-filter'], function (exports, _dFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dFilter.default;
    }
  });
});
define('dummy/components/d-footer', ['exports', 'ember-dyna-table/components/d-footer'], function (exports, _dFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dFooter.default;
    }
  });
});
define('dummy/components/d-header', ['exports', 'ember-dyna-table/components/d-header'], function (exports, _dHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dHeader.default;
    }
  });
});
define('dummy/components/d-pagination', ['exports', 'ember-dyna-table/components/d-pagination'], function (exports, _dPagination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dPagination.default;
    }
  });
});
define('dummy/components/d-sorter', ['exports', 'ember-dyna-table/components/d-sorter'], function (exports, _dSorter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dSorter.default;
    }
  });
});
define('dummy/components/d-table', ['exports', 'ember-dyna-table/components/d-table'], function (exports, _dTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dTable.default;
    }
  });
});
define('dummy/components/d-tbody', ['exports', 'ember-dyna-table/components/d-tbody'], function (exports, _dTbody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dTbody.default;
    }
  });
});
define('dummy/components/d-tr', ['exports', 'ember-dyna-table/components/d-tr'], function (exports, _dTr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dTr.default;
    }
  });
});
define('dummy/components/dtab/selectable-cell', ['exports', 'ember-dyna-table/components/dtab/selectable-cell'], function (exports, _selectableCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _selectableCell.default;
    }
  });
});
define('dummy/components/dtab/selectable-header', ['exports', 'ember-dyna-table/components/dtab/selectable-header'], function (exports, _selectableHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _selectableHeader.default;
    }
  });
});
define('dummy/components/header-with-action', ['exports', 'dummy/templates/components/header-with-action'], function (exports, _headerWithAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'td',
    layout: _headerWithAction.default,
    click: function click() {
      this.get('d-header.someAction')();
    }
  });
});
define('dummy/components/pagination-manager', ['exports', 'dummy/templates/components/pagination-manager'], function (exports, _paginationManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paginationManager.default
  });
});
define('dummy/components/snippets/basic-pagination', ['exports', 'dummy/templates/components/snippets/basic-pagination'], function (exports, _basicPagination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // BEGIN-SNIPPET basic-pagination
  var changeData = function changeData() {
    var length = 30;
    var data = this.get('table.data');
    data.clear();
    while (length--) {
      data.pushObject({
        foo: 30 - length,
        bar: Math.floor(Math.random() * 100),
        baz: Math.floor(Math.random() * 100)
      });
    }
    // later(this, changeData, 1000)
  };

  exports.default = Ember.Component.extend({
    layout: _basicPagination.default,
    init: function init() {
      this._super.apply(this, arguments);
      Ember.run.later(this, changeData, 100);
    },

    table: Ember.computed(function () {
      return {
        state: {
          pagination: {
            pageSize: 5,
            currentPage: 2
          }
        },
        columns: Ember.A([{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }]),
        data: Ember.A([])
      };
    })
  });
});
define('dummy/components/snippets/basic-usage-code-style', ['exports', 'dummy/templates/components/snippets/basic-usage-code-style'], function (exports, _basicUsageCodeStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // BEGIN-SNIPPET basic-usage-code-style
  var changeData = function changeData() {
    var length = 5;
    var data = this.get('table.data');
    data.clear();
    while (length--) {
      data.pushObject({
        foo: Math.floor(Math.random() * 100),
        bar: Math.floor(Math.random() * 100),
        baz: Math.floor(Math.random() * 100)
      });
    }
    if (Math.random() > 0.3) {
      var columns = this.get('table.columns');
      columns.pushObject(columns.shiftObject());
    }
    Ember.run.later(this, changeData, 1000);
  };

  exports.default = Ember.Component.extend({
    layout: _basicUsageCodeStyle.default,
    init: function init() {
      this._super.apply(this, arguments);
      Ember.run.later(this, changeData, 2000);
    },

    table: Ember.computed(function () {
      return {
        columns: Ember.A([{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }]),
        data: Ember.A([{ foo: '5', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }])
      };
    })
  });
});
define('dummy/components/snippets/basic-usage-template-style', ['exports', 'dummy/templates/components/snippets/basic-usage-template-style'], function (exports, _basicUsageTemplateStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // BEGIN-SNIPPET basic-usage-template-style
  var changeData = function changeData() {
    var length = 5;
    var data = this.get('table.data');
    data.clear();
    while (length--) {
      data.pushObject({
        foo: Math.floor(Math.random() * 100),
        bar: Math.floor(Math.random() * 100),
        baz: Math.floor(Math.random() * 100)
      });
    }
    Ember.run.later(this, changeData, 1000);
  };

  exports.default = Ember.Component.extend({
    layout: _basicUsageTemplateStyle.default,
    init: function init() {
      this._super.apply(this, arguments);
      Ember.run.later(this, changeData, 2000);
    },

    table: Ember.computed(function () {
      return {
        columns: Ember.A([]),
        data: Ember.A([{ foo: '5', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }])
      };
    })
  });
});
define('dummy/components/sorting-header', ['exports', 'dummy/templates/components/sorting-header'], function (exports, _sortingHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _sortingHeader.default,
    tagName: 'td',
    changeSorting: function changeSorting(key) {
      var sorting = this.get('state.sorting') || [];
      var newSorting = [];
      var keyCheck = [sorting.indexOf(key), sorting.indexOf(key + ':asc'), sorting.indexOf(key + ':desc')];
      if (keyCheck[0] >= 0) {
        newSorting = sorting.slice(0, keyCheck[0]).concat(key + ':desc', sorting.slice(keyCheck[0] + 1));
      } else if (keyCheck[1] >= 0) {
        newSorting = sorting.slice(0, keyCheck[1]).concat(key + ':desc', sorting.slice(keyCheck[1] + 1));
      } else if (keyCheck[2] >= 0) {
        newSorting = sorting.slice(0, keyCheck[2]).concat(sorting.slice(keyCheck[2] + 1));
      } else {
        newSorting = sorting.concat(key + ':asc');
      }
      this.set('state.sorting', newSorting);
    },
    click: function click() {
      var key = this.get('col.key');
      this.changeSorting(key);
      // this.get('extra.actionChangeSort')(this.get('col'));
    }
  });
});
define('dummy/controllers/doc-pages/docs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('dummy/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    table: Ember.computed(function () {
      return {
        settings: {},
        state: {},
        columns: [{
          key: 'foo',
          header: {
            component: 'sorting-header'
          }
        }, { key: 'bar' }, { key: 'baz', header: { component: 'header-with-action' } }],
        data: [{ foo: '5', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
      };
    }),
    sorting: Ember.computed(function () {
      return ["foo:asc"];
    }),
    bigData: function (length) {
      var i = length;
      var result = [];
      while (i-- > 0) {
        result.push({
          foo: String(Math.floor(Math.random() * 100)),
          bar: String(Math.floor(Math.random() * 100)),
          baz: String(Math.floor(Math.random() * 100))
        });
      }
      return result;
    }(100),
    currentPage: 1,
    pageSize: 10,
    actions: {
      headerAction: function headerAction() {
        Ember.debug('its from header-with-action');
      }
    }
  });
});
define('dummy/ember-dyna-table/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/d-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-filter.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/d-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-footer.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/d-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-header.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/d-pagination.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-pagination.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/d-sorter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-sorter.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/d-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-table.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/d-tbody.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-tbody.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/d-tr.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/d-tr.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/dtab/selectable-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/dtab/selectable-cell.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/dtab/selectable-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/dtab/selectable-header.js should pass ESLint\n\n');
  });
});
define('dummy/ember-dyna-table/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/d-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-filter.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/d-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-footer.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/d-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-header.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/d-pagination.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-pagination.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/d-sorter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-sorter.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/d-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-table.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/d-tbody.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-tbody.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/d-tr.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/d-tr.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/dtab/selectable-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/dtab/selectable-cell.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/dtab/selectable-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/dtab/selectable-header.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('dummy/helpers/array', ['exports', 'ember-array-helper/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
});
define('dummy/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('dummy/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('dummy/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('dummy/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('dummy/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('dummy/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('dummy/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('dummy/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('dummy/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('doc-pages', function () {
      this.route('docs');
      this.route('cookbook');
    });
  });

  exports.default = Router;
});
define('dummy/routes/doc-pages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('dummy/routes/doc-pages/cookbook', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('dummy/routes/doc-pages/docs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('dummy/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel() {
      // this.transitionTo('doc-pages.docs')
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "basic-pagination.hbs": "{{#d-pagination\n        table=table as |p|}}\n    {{#d-table class=\"table table-striped\" table=p.table as |dtab|}}\n        <thead class=\"thead-dark\">\n        <tr>\n            {{#each dtab.columns as |col|}}\n                <th scope=\"col\">{{col.key}}</th>\n            {{/each}}\n        </tr>\n        </thead>\n        {{d-tbody d-table=dtab}}\n    {{/d-table}}\n    <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n            <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" {{action (mut p.pagination.currentPage) 1}}>\n                    First\n                </a></li>\n            <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" {{action p.pagination.changePrevious}}>\n                    Previous\n                </a></li>\n            <li class=\"page-item\">\n                {{input class=\"page-link\" name=\"pn\" size=\"4\" value=p.pagination.currentPage}}\n            </li>\n            <li class=\"page-item\">\n                {{input class=\"page-link\" name=\"pn\" size=\"4\" value=p.pagination.pageSize}}\n            </li>\n            <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" {{action p.pagination.changeNext}}>\n                    Next\n                </a></li>\n            <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" {{action (mut p.pagination.currentPage)\n                                                       p.pagination.lastPage}}>\n                    Last\n                </a></li>\n        </ul>\n    </nav>\n{{/d-pagination}}",
    "basic-pagination.js": "import {A} from '@ember/array';\nimport {later} from '@ember/runloop';\nimport Component from '@ember/component';\nimport layout from '../../templates/components/snippets/basic-pagination';\nimport {computed} from '@ember/object';\n\nconst changeData = function () {\n  let length = 30;\n  let data = this.get('table.data');\n  data.clear()\n  while (length--) {\n    data.pushObject({\n      foo: 30 - length,\n      bar: Math.floor(Math.random() * 100),\n      baz: Math.floor(Math.random() * 100),\n    })\n  }\n  // later(this, changeData, 1000)\n}\n\nexport default Component.extend({\n  layout,\n  init() {\n    this._super(...arguments);\n    later(this, changeData, 100);\n  },\n  table: computed(() => ({\n    state: {\n      pagination: {\n        pageSize: 5,\n        currentPage: 2\n      }\n    },\n    columns: A([{key: 'foo'}, {key: 'bar'}, {key: 'baz'}]),\n    data: A([])\n  }))\n});",
    "basic-usage-code-style.hbs": "{{d-table table=table}}",
    "basic-usage-code-style.js": "import {A} from '@ember/array';\nimport {later} from '@ember/runloop';\nimport Component from '@ember/component';\nimport layout from '../../templates/components/snippets/basic-usage-code-style';\nimport {computed} from '@ember/object';\n\nconst changeData = function () {\n  let length = 5;\n  let data = this.get('table.data');\n  data.clear()\n  while (length--) {\n    data.pushObject({\n      foo: Math.floor(Math.random() * 100),\n      bar: Math.floor(Math.random() * 100),\n      baz: Math.floor(Math.random() * 100),\n    })\n  }\n  if (Math.random() > 0.3) {\n    let columns = this.get('table.columns');\n    columns.pushObject(columns.shiftObject());\n  }\n  later(this, changeData, 1000)\n}\n\nexport default Component.extend({\n  layout,\n  init() {\n    this._super(...arguments);\n    later(this, changeData, 2000);\n  },\n  table: computed(() => ({\n    columns: A([{key: 'foo'}, {key: 'bar'}, {key: 'baz'}]),\n    data: A([\n      {foo: '5', bar: '2', baz: '3'},\n      {foo: '4', bar: '5', baz: '6'},\n      {foo: '7', bar: '8', baz: '9'},\n    ])\n  }))\n});",
    "basic-usage-template-style.hbs": "{{#d-table table=table as |dtab|}}\n    {{#d-header d-table=dtab}}\n        <thead>\n            <tr>\n                <td>foo</td>\n                <td>bar</td>\n                <td>baz</td>\n            </tr>\n        </thead>\n    {{/d-header}}\n    {{#d-tbody d-table=dtab as |zbody|}}\n        {{#each dtab.data as |row|}}\n            <tr>\n                <td>{{row.foo}}</td>\n                <td>{{row.bar}}</td>\n                <td>{{row.baz}}</td>\n            </tr>\n        {{/each}}\n    {{/d-tbody}}\n{{/d-table}}",
    "basic-usage-template-style.js": "import {A} from '@ember/array';\nimport {later} from '@ember/runloop';\nimport Component from '@ember/component';\nimport layout from '../../templates/components/snippets/basic-usage-template-style';\nimport {computed} from '@ember/object';\n\nconst changeData = function () {\n  let length = 5;\n  let data = this.get('table.data');\n  data.clear()\n  while (length--) {\n    data.pushObject({\n      foo: Math.floor(Math.random() * 100),\n      bar: Math.floor(Math.random() * 100),\n      baz: Math.floor(Math.random() * 100),\n    })\n  }\n  later(this, changeData, 1000)\n}\n\nexport default Component.extend({\n  layout,\n  init() {\n    this._super(...arguments);\n    later(this, changeData, 2000);\n  },\n  table: computed(() => ({\n    columns: A([]),\n    data: A([\n      {foo: '5', bar: '2', baz: '3'},\n      {foo: '4', bar: '5', baz: '6'},\n      {foo: '7', bar: '8', baz: '9'},\n    ])\n  }))\n});\n"
  };
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "miclDbcq", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I3g5LP0b", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"source\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
define("dummy/templates/components/custom-render", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+lWiw5LS", "block": "{\"symbols\":[],\"statements\":[[0,\"$\"],[1,[18,\"value\"],false],[0,\"$$\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/custom-render.hbs" } });
});
define("dummy/templates/components/custom-tr", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K7WRips4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"tr\"],[7],[0,\"\\n    \"],[1,[18,\"rInd\"],false],[0,\";\"],[11,1],[0,\":\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/custom-tr.hbs" } });
});
define("dummy/templates/components/header-with-action", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dxIMa2BS", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"value\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/header-with-action.hbs" } });
});
define("dummy/templates/components/pagination-manager", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0Obk6A1M", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"d-pagination-manage\"],[7],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],[20,[\"pagination\",\"changePrevious\"]]]],[7],[0,\"<\"],[8],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"class\",\"value\"],[\"current-page\",[20,[\"pagination\",\"currentPage\"]]]]],false],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"class\",\"value\"],[\"page-size\",[20,[\"pagination\",\"pageSize\"]]]]],false],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],[20,[\"pagination\",\"changeNext\"]]]],[7],[0,\">\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/pagination-manager.hbs" } });
});
define("dummy/templates/components/snippets/basic-pagination", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s403b/oK", "block": "{\"symbols\":[\"partialName\"],\"statements\":[[4,\"code-example\",null,[[\"hbs\",\"js\"],[\"basic-pagination.hbs\",\"basic-pagination.js\"]],{\"statements\":[[0,\"    \"],[12,[19,1,[]],[1]],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":true}", "meta": { "moduleName": "dummy/templates/components/snippets/basic-pagination.hbs" } });
});
define("dummy/templates/components/snippets/basic-usage-code-style", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RntLuL+M", "block": "{\"symbols\":[\"partialName\"],\"statements\":[[4,\"code-example\",null,[[\"hbs\",\"js\"],[\"basic-usage-code-style.hbs\",\"basic-usage-code-style.js\"]],{\"statements\":[[0,\"    \"],[12,[19,1,[]],[1]],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":true}", "meta": { "moduleName": "dummy/templates/components/snippets/basic-usage-code-style.hbs" } });
});
define("dummy/templates/components/snippets/basic-usage-template-style", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JDxoDkGd", "block": "{\"symbols\":[\"partialName\"],\"statements\":[[4,\"code-example\",null,[[\"activeTab\",\"hbs\",\"js\"],[\"hbs\",\"basic-usage-template-style.hbs\",\"basic-usage-template-style.js\"]],{\"statements\":[[0,\"    \"],[12,[19,1,[]],[1]],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":true}", "meta": { "moduleName": "dummy/templates/components/snippets/basic-usage-template-style.hbs" } });
});
define("dummy/templates/components/sorting-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TtDQWiQ+", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"value\"],false]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/sorting-header.hbs" } });
});
define("dummy/templates/doc-pages", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DJzXU7/L", "block": "{\"symbols\":[],\"statements\":[[6,\"header\"],[9,\"class\",\"nav-header\"],[7],[0,\"\\n    \"],[6,\"nav\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"logo\"],[7],[0,\"\\n            \"],[6,\"h1\"],[7],[0,\"Ember-dyna-table\"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"links\"],[7],[0,\"\\n            \"],[4,\"link-to\",[\"doc-pages.docs\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Docs\"]],\"parameters\":[]},null],[0,\"\\n            \"],[4,\"link-to\",[\"doc-pages.cookbook\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Cookbook\"]],\"parameters\":[]},null],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"https://github.com/ember-dyna-table/ember-dyna-table\"],[9,\"class\",\"link\"],[9,\"target\",\"_blank\"],[7],[0,\"Github\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"main\"],[9,\"class\",\"content\"],[7],[0,\"\\n    \"],[6,\"nav\"],[9,\"class\",\"navigation\"],[7],[0,\"\\n        \"],[6,\"section\"],[7],[0,\"Docs\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"doc-pages.docs\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Docs\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"section\"],[7],[0,\"Cookbook\"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"doc-pages.cookbook\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Cookbook\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"doc-page\"],[7],[0,\"\\n        \"],[1,[18,\"outlet\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"footer\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"copyright\"],[7],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/doc-pages.hbs" } });
});
define("dummy/templates/doc-pages/cookbook", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/7NE21RI", "block": "{\"symbols\":[],\"statements\":[[0,\"Examples of this page will use Bootstrap for styling. It is not included into the addon, therefore if you plan to use\\nbootsrap, please include it in your application by yourself\\n\\n\"],[6,\"h2\"],[7],[0,\"Basic Pagination\"],[8],[0,\"\\n\"],[1,[18,\"snippets/basic-pagination\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/doc-pages/cookbook.hbs" } });
});
define("dummy/templates/doc-pages/docs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hvr66U3H", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"Overview\"],[8],[0,\"\\nThis addon gives you a table component with the following features:\\n\"],[6,\"ul\"],[7],[0,\"\\n    \"],[6,\"li\"],[7],[0,\"valid HTML\"],[8],[0,\"\\n    \"],[6,\"li\"],[7],[0,\"filtering/sorting/pagination\"],[8],[0,\"\\n    \"],[6,\"li\"],[7],[0,\"dynamic/rearrangeable/toggable columns\"],[8],[0,\"\\n    \"],[6,\"li\"],[7],[0,\"custom rendering component for cells\"],[8],[0,\"\\n    \"],[6,\"li\"],[7],[0,\"possibility to send actions from the cell component to the upper components\"],[8],[0,\"\\n    \"],[6,\"li\"],[7],[0,\"easy i18n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"h1\"],[7],[0,\"Installation\"],[8],[0,\"\\nYou need to run this command in order to install the addon:\\n\"],[6,\"div\"],[9,\"class\",\"code\"],[7],[0,\"\\n    \"],[6,\"code\"],[7],[0,\"$ ember install ember-dyna-table\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\nThis will install the following components into your application: \"],[6,\"code\"],[7],[0,\"d-table\"],[8],[0,\", \"],[6,\"code\"],[7],[0,\"d-pagination\"],[8],[0,\",\\n\"],[6,\"code\"],[7],[0,\"d-header\"],[8],[0,\", \"],[6,\"code\"],[7],[0,\"d-tbody\"],[8],[0,\" and others.\\n\"],[6,\"h1\"],[7],[0,\"Basic usage\"],[8],[0,\"\\nYou can choose one of two styles to describe your table\\n\"],[6,\"h2\"],[7],[0,\"Code style\"],[8],[0,\"\\nWhen you using this style you manage your table via javascript code of the controller (or component) that renders the table.\\n\"],[1,[18,\"snippets/basic-usage-code-style\"],false],[0,\"\\n\"],[6,\"h2\"],[7],[0,\"Template style\"],[8],[0,\"\\nUsing this style you describe your table in the template.\\n\"],[1,[18,\"snippets/basic-usage-template-style\"],false],[0,\"\\n\"],[6,\"p\"],[7],[0,\"For more examples see the \"],[4,\"link-to\",[\"doc-pages.cookbook\"],null,{\"statements\":[[0,\"cookbook\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[6,\"h1\"],[7],[0,\"Styling\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"This addon contains no CSS focusing only on producing correct HTML markup.\\n    That's why it can be used as a base for extention to other addons.\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/doc-pages/docs.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "29pVFQA6", "block": "{\"symbols\":[\"dtab\",\"zBody\",\"row\",\"rInd\"],\"statements\":[[4,\"d-table\",null,[[\"table\",\"class\"],[[20,[\"table\"]],\"some-table\"]],{\"statements\":[[0,\"    \"],[1,[25,\"d-header\",null,[[\"d-table\",\"class\",\"someAction\"],[[19,1,[]],\"some-table-header\",[25,\"action\",[[19,0,[]],\"headerAction\"],null]]]],false],[0,\"\\n\"],[4,\"d-tbody\",null,[[\"d-table\",\"class\"],[[19,1,[]],\"some-table-tbody\"]],{\"statements\":[[4,\"each\",[[19,1,[\"data\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"component\",[[19,2,[\"d-tr\"]]],[[\"row\",\"rInd\"],[[19,3,[]],[19,4,[]]]]],false],[0,\"\\n\"]],\"parameters\":[3,4]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});
define("dummy/templates/snippets/basic-pagination", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "C+4cjixa", "block": "{\"symbols\":[\"p\",\"dtab\",\"col\"],\"statements\":[[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[4,\"d-table\",null,[[\"class\",\"table\"],[\"table table-striped\",[19,1,[\"table\"]]]],{\"statements\":[[0,\"        \"],[6,\"thead\"],[9,\"class\",\"thead-dark\"],[7],[0,\"\\n        \"],[6,\"tr\"],[7],[0,\"\\n\"],[4,\"each\",[[19,2,[\"columns\"]]],null,{\"statements\":[[0,\"                \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[1,[19,3,[\"key\"]],false],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"        \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[1,[25,\"d-tbody\",null,[[\"d-table\"],[[19,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[6,\"nav\"],[9,\"aria-label\",\"Page navigation\"],[7],[0,\"\\n        \"],[6,\"ul\"],[9,\"class\",\"pagination\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],[25,\"mut\",[[19,1,[\"pagination\",\"currentPage\"]]],null],1]],[7],[0,\"\\n                    First\\n                \"],[8],[8],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],[19,1,[\"pagination\",\"changePrevious\"]]]],[7],[0,\"\\n                    Previous\\n                \"],[8],[8],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"class\",\"name\",\"size\",\"value\"],[\"page-link\",\"pn\",\"4\",[19,1,[\"pagination\",\"currentPage\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"class\",\"name\",\"size\",\"value\"],[\"page-link\",\"pn\",\"4\",[19,1,[\"pagination\",\"pageSize\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],[19,1,[\"pagination\",\"changeNext\"]]]],[7],[0,\"\\n                    Next\\n                \"],[8],[8],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"page-item\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"page-link\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],[25,\"mut\",[[19,1,[\"pagination\",\"currentPage\"]]],null],[19,1,[\"pagination\",\"lastPage\"]]]],[7],[0,\"\\n                    Last\\n                \"],[8],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/snippets/basic-pagination.hbs" } });
});
define("dummy/templates/snippets/basic-usage-code-style", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+BONuSxX", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/snippets/basic-usage-code-style.hbs" } });
});
define("dummy/templates/snippets/basic-usage-template-style", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q8L0ztSv", "block": "{\"symbols\":[\"dtab\",\"zbody\",\"row\"],\"statements\":[[4,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[4,\"d-header\",null,[[\"d-table\"],[[19,1,[]]]],{\"statements\":[[0,\"        \"],[6,\"thead\"],[7],[0,\"\\n            \"],[6,\"tr\"],[7],[0,\"\\n                \"],[6,\"td\"],[7],[0,\"foo\"],[8],[0,\"\\n                \"],[6,\"td\"],[7],[0,\"bar\"],[8],[0,\"\\n                \"],[6,\"td\"],[7],[0,\"baz\"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"d-tbody\",null,[[\"d-table\"],[[19,1,[]]]],{\"statements\":[[4,\"each\",[[19,1,[\"data\"]]],null,{\"statements\":[[0,\"            \"],[6,\"tr\"],[7],[0,\"\\n                \"],[6,\"td\"],[7],[1,[19,3,[\"foo\"]],false],[8],[0,\"\\n                \"],[6,\"td\"],[7],[1,[19,3,[\"bar\"]],false],[8],[0,\"\\n                \"],[6,\"td\"],[7],[1,[19,3,[\"baz\"]],false],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/snippets/basic-usage-template-style.hbs" } });
});

define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
