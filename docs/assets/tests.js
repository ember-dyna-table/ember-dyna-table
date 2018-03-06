'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/custom-render.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/custom-render.js should pass ESLint\n\n');
  });

  QUnit.test('components/custom-tr.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/custom-tr.js should pass ESLint\n\n');
  });

  QUnit.test('components/header-with-action.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/header-with-action.js should pass ESLint\n\n');
  });

  QUnit.test('components/pagination-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pagination-manager.js should pass ESLint\n\n');
  });

  QUnit.test('components/snippets/basic-pagination.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/snippets/basic-pagination.js should pass ESLint\n\n');
  });

  QUnit.test('components/snippets/basic-usage-code-style.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/snippets/basic-usage-code-style.js should pass ESLint\n\n');
  });

  QUnit.test('components/snippets/basic-usage-template-style.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/snippets/basic-usage-template-style.js should pass ESLint\n\n');
  });

  QUnit.test('components/sorting-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sorting-header.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/doc-pages/docs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/doc-pages/docs.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/doc-pages.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/doc-pages.js should pass ESLint\n\n');
  });

  QUnit.test('routes/doc-pages/cookbook.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/doc-pages/cookbook.js should pass ESLint\n\n');
  });

  QUnit.test('routes/doc-pages/docs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/doc-pages/docs.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define('dummy/tests/datasets/tables', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var standardTable = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }],
    data: [{ foo: '1', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
  };

  var customRender = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar', component: 'custom-render' }, { key: 'baz' }],
    data: [{ foo: '1', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
  };

  var customHeaderRender = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar', header: { component: 'custom-render' } }, { key: 'baz' }],
    data: [{ foo: '1', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
  };

  var sortableTable = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }],
    data: [{ foo: '1', bar: '1', baz: '1' }, { foo: '1', bar: '2', baz: '2' }, { foo: '2', bar: '1', baz: '3' }]
  };

  var nestedDataTable = {
    settings: {},
    columns: [{ key: 'foo.one' }, { key: 'foo.two' }, { key: 'bar' }, { key: 'baz' }],
    data: [{ foo: { one: 'a', two: 'b' }, bar: '1', baz: '4' }, { foo: { one: 'c', two: 'd' }, bar: '2', baz: '5' }, { foo: { one: 'e', two: 'f' }, bar: '3', baz: '6' }]
  };

  var paginationTable = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }],
    data: function (length) {
      var i = 0;
      var result = [];
      while (i++ < length) {
        result.push({
          foo: String(i),
          bar: String(i),
          baz: String(i)
        });
      }
      return result;
    }(100)
  };

  exports.standardTable = standardTable;
  exports.customRender = customRender;
  exports.customHeaderRender = customHeaderRender;
  exports.sortableTable = sortableTable;
  exports.nestedDataTable = nestedDataTable;
  exports.paginationTable = paginationTable;
  exports.default = standardTable;
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.Promise.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/d-filter-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-filter', 'Integration | Component | z filter', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "YhmSRW+J",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"d-filter\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "GjTP+ajT",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-filter\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/d-footer-test', ['ember-qunit', 'dummy/tests/datasets/tables'], function (_emberQunit, _tables) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-footer', 'Integration | Component | z footer', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    this.set('table', Object.assign({}, _tables.default, { settings: { footer: true } }));
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "51CYzE3T",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-footer\",null,[[\"d-table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('tfoot tr td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), 'foo,bar,baz');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "S3N6pxAa",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-footer\",null,[[\"d-table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/d-header-test', ['ember-qunit', 'ember-test-helpers/wait', 'dummy/tests/datasets/tables'], function (_emberQunit, _wait, _tables) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-header', 'Integration | Component | z header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    this.set('table', Object.assign({}, _tables.standardTable));
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "4kq+pvwI",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-header\",null,[[\"d-table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('thead tr td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(',').trim(), 'foo,bar,baz');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "g07Ecr38",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-header\",null,[[\"d-table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it doesnt renders if settings header=false', function (assert) {
    this.set('table', Object.assign({}, _tables.standardTable, { settings: { header: false } }));
    this.render(Ember.HTMLBars.template({
      "id": "4kq+pvwI",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-header\",null,[[\"d-table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$().text().trim(), '');
  });

  (0, _emberQunit.test)('it renders custom header component', function (assert) {
    this.set('table', _tables.customHeaderRender);
    this.render(Ember.HTMLBars.template({
      "id": "4kq+pvwI",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-header\",null,[[\"d-table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('thead tr td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), 'foo,$bar$$,baz');
  });

  (0, _emberQunit.test)('it renders header value from column.header.value', function (assert) {
    this.set('table', Object.assign({}, _tables.standardTable, {
      columns: [{ key: 'foo' }, { key: 'bar', header: { value: 'BAR' } }, { key: 'baz' }]
    }));
    this.render(Ember.HTMLBars.template({
      "id": "4kq+pvwI",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-header\",null,[[\"d-table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('thead tr td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), 'foo,BAR,baz');
  });

  (0, _emberQunit.test)('it sends action from header component to header', function (assert) {
    var _this = this;

    var counter = 0;

    // Set any properties with this.set('myProperty', 'value');
    this.set('table', Object.assign(_tables.standardTable, {
      columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz', header: { component: 'header-with-action' } }]
    }));

    this.set('headerAction', function () {
      counter++;
    });

    this.render(Ember.HTMLBars.template({
      "id": "F0UZVv3m",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-header\",null,[[\"d-table\",\"someAction\"],[[20,[\"table\"]],[25,\"action\",[[19,0,[]],[20,[\"headerAction\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    Ember.run(function () {
      return _this.$('td:contains("baz")').click();
    });

    return (0, _wait.default)().then(function () {
      assert.equal(counter, 1);
    });
  });
});
define('dummy/tests/integration/components/d-pagination-test', ['ember-qunit', 'ember-test-helpers/wait', 'dummy/tests/datasets/tables'], function (_emberQunit, _wait, _tables) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-pagination', 'Integration | Component | z pagination', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "jCc6znvb",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"d-pagination\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "nxXHlzXE",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it paginates data', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.paginationTable, {
      state: {
        pagination: {
          pageSize: 5,
          currentPage: 1
        }
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "fCmNEk71",
      "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
  });

  (0, _emberQunit.test)('it shows second page correctly', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.paginationTable, {
      state: {
        pagination: {
          pageSize: 5,
          currentPage: 2
        }
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "fCmNEk71",
      "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '6,6,6,7,7,7,8,8,8,9,9,9,10,10,10');
  });

  (0, _emberQunit.test)('it goes to next page', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.paginationTable, {
      state: {
        pagination: {
          pageSize: 5,
          currentPage: 1
        }
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0EbINykW",
      "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"id\",\"change-next\"],[3,\"action\",[[19,0,[]],[19,1,[\"pagination\",\"changeNext\"]]]],[7],[0,\">\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    this.$('#change-next').click();
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '6,6,6,7,7,7,8,8,8,9,9,9,10,10,10');
  });

  (0, _emberQunit.test)('it goes to previous page', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.paginationTable, {
      state: {
        pagination: {
          pageSize: 5,
          currentPage: 2
        }
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "yHsjxA5B",
      "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"id\",\"change\"],[3,\"action\",[[19,0,[]],[19,1,[\"pagination\",\"changePrevious\"]]]],[7],[0,\">\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    this.$('#change').click();
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
  });

  (0, _emberQunit.test)('it changes data when pageSize is changed', function (assert) {
    var _this = this;

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.paginationTable, {
      state: {
        pagination: {
          pageSize: 5,
          currentPage: 1
        }
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "yHsjxA5B",
      "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"id\",\"change\"],[3,\"action\",[[19,0,[]],[19,1,[\"pagination\",\"changePrevious\"]]]],[7],[0,\">\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
    this.set('table.state.pagination.pageSize', 2);
    return (0, _wait.default)().then(function () {
      assert.equal(_this.$('table tbody td').map(function (i, item) {
        return item.innerHTML;
      }).toArray().join(','), '1,1,1,2,2,2');
    });
  });

  (0, _emberQunit.test)('it calculates lastPage right for length 100 and pageSize 33', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.paginationTable, {
      state: {
        pagination: {
          pageSize: 33,
          currentPage: 1
        }
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "JismTswC",
      "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n            \"],[6,\"div\"],[9,\"id\",\"last-page\"],[7],[1,[19,1,[\"pagination\",\"lastPage\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('#last-page').html(), '4');
  });

  (0, _emberQunit.test)('it calculates lastPage right for length 100 and pageSize 2', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.paginationTable, {
      state: {
        pagination: {
          pageSize: 2,
          currentPage: 1
        }
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "JismTswC",
      "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n            \"],[6,\"div\"],[9,\"id\",\"last-page\"],[7],[1,[19,1,[\"pagination\",\"lastPage\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('#last-page').html(), '50');
  });
});
define('dummy/tests/integration/components/d-sorter-test', ['ember-qunit', 'dummy/tests/datasets/tables'], function (_emberQunit, _tables) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-sorter', 'Integration | Component | z sorter', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "SloF/6Sb",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"d-sorter\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Kd+Onuec",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it sorts data using 1 key', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.sortableTable, {
      state: {
        sorting: ['foo:desc']
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "k3xufa2K",
      "block": "{\"symbols\":[\"s\"],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '2,1,3,1,1,1,1,2,2');
  });

  (0, _emberQunit.test)('it sorts data using 2 keys', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.sortableTable, {
      state: {
        sorting: ['foo:desc', 'bar:desc']
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "k3xufa2K",
      "block": "{\"symbols\":[\"s\"],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '2,1,3,1,2,2,1,1,1');
  });

  (0, _emberQunit.test)('it sorts nested data using nested key', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.nestedDataTable, {
      state: {
        sorting: ['foo.one:desc']
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "k3xufa2K",
      "block": "{\"symbols\":[\"s\"],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,[[\"table\"],[[20,[\"table\"]]]],{\"statements\":[[0,\"            \"],[1,[25,\"d-table\",null,[[\"table\"],[[19,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), 'e,f,3,6,c,d,2,5,a,b,1,4');
  });
});
define('dummy/tests/integration/components/d-table-test', ['ember-qunit', 'ember-test-helpers/wait', 'dummy/tests/datasets/tables'], function (_emberQunit, _wait, _tables) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-table', 'Integration | Component | z table', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "LOKRnWz0",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"d-table\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');
  });

  (0, _emberQunit.test)('it renders basic data by default', function (assert) {
    this.set('table', _tables.standardTable);
    this.render(Ember.HTMLBars.template({
      "id": "VnoivbzO",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    // header
    assert.equal(this.$('table thead tr td').map(function (i, item) {
      return item.innerHTML.trim();
    }).toArray().join(','), 'foo,bar,baz');

    //body
    assert.equal(this.$('table tbody tr').length, 3);
    assert.equal(this.$('table tbody td').length, 9);
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '1,2,3,4,5,6,7,8,9');
  });

  (0, _emberQunit.test)('it doesnt renders headers if settings have header = false', function (assert) {
    this.set('table', Object.assign({}, _tables.standardTable, { settings: { header: false } }));
    this.render(Ember.HTMLBars.template({
      "id": "VnoivbzO",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('table thead').length, 0);
    assert.equal(this.$('table tbody tr').length, 3);
  });

  (0, _emberQunit.test)('it renders cells with custom component', function (assert) {
    this.set('table', _tables.customRender);
    this.render(Ember.HTMLBars.template({
      "id": "VnoivbzO",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody tr').length, 3);
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '1,$2$$,3,4,$5$$,6,7,$8$$,9');
  });

  (0, _emberQunit.test)('it handles changing data', function (assert) {
    var _this = this;

    var changedStandardData = _tables.standardTable.data.map(function (i) {
      return new Ember.Object(i);
    });
    changedStandardData[0].set('foo', "2");
    this.set('table', _tables.standardTable);
    this.render(Ember.HTMLBars.template({
      "id": "VnoivbzO",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '1,2,3,4,5,6,7,8,9');
    this.set('table', Object.assign({}, _tables.standardTable, {
      data: changedStandardData
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '2,2,3,4,5,6,7,8,9');
    Ember.run(function () {
      changedStandardData[0].set('foo', "3");
    });
    return (0, _wait.default)().then(function () {
      assert.equal(_this.$('table tbody td').map(function (i, item) {
        return item.innerHTML;
      }).toArray().join(','), '3,2,3,4,5,6,7,8,9');
    });
  });

  (0, _emberQunit.test)('it handles changing column order', function (assert) {
    var _this2 = this;

    this.set('table', new Ember.Object(_tables.standardTable));
    this.render(Ember.HTMLBars.template({
      "id": "VnoivbzO",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), '1,2,3,4,5,6,7,8,9');

    this.set('table.columns', [{ key: 'bar' }, { key: 'foo' }, { key: 'baz' }]);
    return (0, _wait.default)().then(function () {
      assert.equal(_this2.$('table tbody td').map(function (i, item) {
        return item.innerHTML;
      }).toArray().join(','), '2,1,3,5,4,6,8,7,9');
    });
  });

  (0, _emberQunit.test)('it renders nested data using nested key', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.nestedDataTable));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "RoCSpNMe",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n            \"],[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false],[0,\"\\n  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody td').map(function (i, item) {
      return item.innerHTML;
    }).toArray().join(','), 'a,b,1,4,c,d,2,5,e,f,3,6');
  });
});
define('dummy/tests/integration/components/d-tbody-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-tbody', 'Integration | Component | z tbody', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "rzh9Um6K",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"d-tbody\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "/mBNOOxm",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-tbody\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/d-tr-test', ['ember-qunit', 'dummy/tests/datasets/tables'], function (_emberQunit, _tables) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('d-tr', 'Integration | Component | z tr', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "tfe6Qdeu",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"d-tr\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "4slPEv3f",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-tr\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it renders custom tr component', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set('table', Object.assign({}, _tables.standardTable, {
      settings: {
        rowComponent: 'custom-tr'
      }
    }));

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "jtrUOceW",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n        \"],[1,[25,\"d-table\",null,[[\"table\"],[[20,[\"table\"]]]]],false],[0,\"\\n  \"]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('table tbody').text().replace(/[^\w|;|:]/g, ''), '0;123:1;456:2;789:');
  });
});
define('dummy/tests/integration/components/dtab/selectable-cell-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('dtab/selectable-cell', 'Integration | Component | dtab/selectable cell', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "/irLwPjx",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"dtab/selectable-cell\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0I1KnvA8",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"dtab/selectable-cell\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/dtab/selectable-header-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('dtab/selectable-header', 'Integration | Component | dtab/selectable header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "EkozWB9J",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"dtab/selectable-header\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "O3PFtg4u",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"dtab/selectable-header\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('dummy/tests/page-object', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fullScope = exports.getContext = exports.findElement = exports.findElementWithAssert = exports.buildSelector = exports.visitable = exports.value = exports.triggerable = exports.text = exports.property = exports.notHasClass = exports.isVisible = exports.isPresent = exports.isHidden = exports.is = exports.hasClass = exports.focusable = exports.selectable = exports.fillable = exports.create = exports.count = exports.contains = exports.collection = exports.clickable = exports.clickOnText = exports.attribute = exports.alias = undefined;
  Object.defineProperty(exports, 'buildSelector', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(exports, 'findElementWithAssert', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(exports, 'findElement', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(exports, 'getContext', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(exports, 'fullScope', {
    enumerable: true,
    get: function () {
      return _emberCliPageObject.fullScope;
    }
  });
  exports.alias = _emberCliPageObject.alias;
  exports.attribute = _emberCliPageObject.attribute;
  exports.clickOnText = _emberCliPageObject.clickOnText;
  exports.clickable = _emberCliPageObject.clickable;
  exports.collection = _emberCliPageObject.collection;
  exports.contains = _emberCliPageObject.contains;
  exports.count = _emberCliPageObject.count;
  exports.create = _emberCliPageObject.create;
  exports.fillable = _emberCliPageObject.fillable;
  exports.selectable = _emberCliPageObject.fillable;
  exports.focusable = _emberCliPageObject.focusable;
  exports.hasClass = _emberCliPageObject.hasClass;
  exports.is = _emberCliPageObject.is;
  exports.isHidden = _emberCliPageObject.isHidden;
  exports.isPresent = _emberCliPageObject.isPresent;
  exports.isVisible = _emberCliPageObject.isVisible;
  exports.notHasClass = _emberCliPageObject.notHasClass;
  exports.property = _emberCliPageObject.property;
  exports.text = _emberCliPageObject.text;
  exports.triggerable = _emberCliPageObject.triggerable;
  exports.value = _emberCliPageObject.value;
  exports.visitable = _emberCliPageObject.visitable;
  exports.default = {
    alias: _emberCliPageObject.alias,
    attribute: _emberCliPageObject.attribute,
    blurrable: _emberCliPageObject.blurrable,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    focusable: _emberCliPageObject.focusable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isPresent: _emberCliPageObject.isPresent,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };


  Ember.deprecate('Importing from "test-support" is now deprecated. Please import directly from the "ember-cli-page-object" module instead.', false, {
    id: 'ember-cli-page-object.import-from-test-support',
    until: "2.0.0",
    url: "https://gist.github.com/san650/17174e4b7b1fd80b049a47eb456a7cdc#file-import-from-test-support-js"
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('datasets/tables.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'datasets/tables.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-footer-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-header-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-pagination-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-pagination-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-sorter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-sorter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-table-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-tbody-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-tbody-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/d-tr-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/d-tr-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/dtab/selectable-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dtab/selectable-cell-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/dtab/selectable-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dtab/selectable-header-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
