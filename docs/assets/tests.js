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
define('dummy/tests/components/ember-ace', ['exports', 'ember-ace/test-support/components/ember-ace'], function (exports, _emberAce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAce.default;
    }
  });
});
define('dummy/tests/datasets/tables', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const standardTable = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }],
    data: [{ foo: '1', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
  };

  const customRender = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar', component: 'custom-render' }, { key: 'baz' }],
    data: [{ foo: '1', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
  };

  const customHeaderRender = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar', header: { component: 'custom-render' } }, { key: 'baz' }],
    data: [{ foo: '1', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
  };

  const sortableTable = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }],
    data: [{ foo: '1', bar: '1', baz: '1' }, { foo: '1', bar: '2', baz: '2' }, { foo: '2', bar: '1', baz: '3' }]
  };

  const nestedDataTable = {
    settings: {},
    columns: [{ key: 'foo.one' }, { key: 'foo.two' }, { key: 'bar' }, { key: 'baz' }],
    data: [{ foo: { one: 'a', two: 'b' }, bar: '1', baz: '4' }, { foo: { one: 'c', two: 'd' }, bar: '2', baz: '5' }, { foo: { one: 'e', two: 'f' }, bar: '3', baz: '6' }]
  };

  const paginationTable = {
    settings: {},
    columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }],
    data: function (length) {
      let i = 0;
      let result = [];
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
define('dummy/tests/helpers/ember-cli-clipboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.triggerSuccess = triggerSuccess;
  exports.triggerError = triggerError;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });

    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  };

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }

  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }

  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }

  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }

  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */
  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }

  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireActionByName(component, actionName) {
    let action = component[actionName];

    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define('dummy/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });

    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });

    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });

    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });

    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  };

  const keyEvent = function keyEvent(app, attributes, type, element) {
    const event = (attributes || '').split('+').reduce((event, attribute) => {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[`${attribute}Key`] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.Promise.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }
    });
  };
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const resolver = _resolver.default.create();

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
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/d-filter-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z filter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "apQliUZu",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"d-filter\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QCCqSQad",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-filter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });
  });
});
define('dummy/tests/integration/components/d-footer-test', ['qunit', 'ember-qunit', '@ember/test-helpers', 'dummy/tests/datasets/tables'], function (_qunit, _emberQunit, _testHelpers, _tables) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      this.set('table', Object.assign({}, _tables.default, { settings: { footer: true } }));
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IhuzsCPO",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-footer\",null,[[\"d-table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.$('tfoot tr td').map((i, item) => item.innerHTML).toArray().join(','), 'foo,bar,baz');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "W55f31Yt",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-footer\",null,[[\"d-table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });
  });
});
define('dummy/tests/integration/components/d-header-test', ['qunit', 'ember-qunit', '@ember/test-helpers', 'dummy/tests/datasets/tables'], function (_qunit, _emberQunit, _testHelpers, _tables) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      this.set('table', Object.assign({}, _tables.standardTable));
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mLb6vIO4",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-header\",null,[[\"d-table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(',').trim(), 'foo,bar,baz');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mLcKlewu",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-header\",null,[[\"d-table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });

    (0, _qunit.test)('it doesnt renders if settings header=false', async function (assert) {
      this.set('table', Object.assign({}, _tables.standardTable, { settings: { header: false } }));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mLb6vIO4",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-header\",null,[[\"d-table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');
    });

    (0, _qunit.test)('it renders custom header component', async function (assert) {
      this.set('table', _tables.customHeaderRender);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mLb6vIO4",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-header\",null,[[\"d-table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(','), 'foo,$bar$$,baz');
    });

    (0, _qunit.test)('it renders header value from column.header.value', async function (assert) {
      this.set('table', Object.assign({}, _tables.standardTable, {
        columns: [{ key: 'foo' }, { key: 'bar', header: { value: 'BAR' } }, { key: 'baz' }]
      }));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mLb6vIO4",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-header\",null,[[\"d-table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(','), 'foo,BAR,baz');
    });

    (0, _qunit.test)('it sends action from header component to header', async function (assert) {
      let counter = 0;

      // Set any properties with this.set('myProperty', 'value');
      this.set('table', Object.assign(_tables.standardTable, {
        columns: [{ key: 'foo' }, { key: 'bar' }, { key: 'baz', header: { component: 'header-with-action' } }]
      }));

      this.set('headerAction', () => {
        counter++;
      });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8m/2j6nt",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-header\",null,[[\"d-table\",\"someAction\"],[[22,[\"table\"]],[26,\"action\",[[21,0,[]],[22,[\"headerAction\"]]],null]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      Ember.run(() => this.$('td:contains("baz")').click());

      return (0, _testHelpers.settled)().then(() => {
        assert.equal(counter, 1);
      });
    });
  });
});
define('dummy/tests/integration/components/d-pagination-test', ['qunit', 'ember-qunit', '@ember/test-helpers', 'dummy/tests/datasets/tables'], function (_qunit, _emberQunit, _testHelpers, _tables) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z pagination', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AhFwDVrB",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"d-pagination\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "70/HnSQv",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });

    (0, _qunit.test)('it paginates data', async function (assert) {

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
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "fC0JJ2x4",
        "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
    });

    (0, _qunit.test)('it shows second page correctly', async function (assert) {

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
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "fC0JJ2x4",
        "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '6,6,6,7,7,7,8,8,8,9,9,9,10,10,10');
    });

    (0, _qunit.test)('it goes to next page', async function (assert) {

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
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Padp9Q6h",
        "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n              \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"id\",\"change-next\"],[3,\"action\",[[21,0,[]],[21,1,[\"pagination\",\"changeNext\"]]]],[8],[0,\">\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('#change-next');
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '6,6,6,7,7,7,8,8,8,9,9,9,10,10,10');
    });

    (0, _qunit.test)('it goes to previous page', async function (assert) {

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
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "D7Zn7aPL",
        "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n              \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"id\",\"change\"],[3,\"action\",[[21,0,[]],[21,1,[\"pagination\",\"changePrevious\"]]]],[8],[0,\">\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      await (0, _testHelpers.click)('#change');
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
    });

    (0, _qunit.test)('it changes data when pageSize is changed', async function (assert) {

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
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "D7Zn7aPL",
        "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n              \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"id\",\"change\"],[3,\"action\",[[21,0,[]],[21,1,[\"pagination\",\"changePrevious\"]]]],[8],[0,\">\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,1,1,2,2,2,3,3,3,4,4,4,5,5,5');
      this.set('table.state.pagination.pageSize', 2);
      return (0, _testHelpers.settled)().then(() => {
        assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,1,1,2,2,2');
      });
    });

    (0, _qunit.test)('it calculates lastPage right for length 100 and pageSize 33', async function (assert) {

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
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7yXLuMyN",
        "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n              \"],[6,\"div\"],[10,\"id\",\"last-page\"],[8],[1,[21,1,[\"pagination\",\"lastPage\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('#last-page').innerHTML, '4');
    });

    (0, _qunit.test)('it calculates lastPage right for length 100 and pageSize 2', async function (assert) {

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
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "7yXLuMyN",
        "block": "{\"symbols\":[\"p\"],\"statements\":[[0,\"\\n\"],[4,\"d-pagination\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n              \"],[6,\"div\"],[10,\"id\",\"last-page\"],[8],[1,[21,1,[\"pagination\",\"lastPage\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('#last-page').innerHTML, '50');
    });
  });
});
define('dummy/tests/integration/components/d-sorter-test', ['qunit', 'ember-qunit', '@ember/test-helpers', 'dummy/tests/datasets/tables'], function (_qunit, _emberQunit, _testHelpers, _tables) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z sorter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rdiqe3Mc",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"d-sorter\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3Gbv9k80",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });

    (0, _qunit.test)('it sorts data using 1 key', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.set('table', Object.assign({}, _tables.sortableTable, {
        state: {
          sorting: ['foo:desc']
        }
      }));

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tmSi8fHM",
        "block": "{\"symbols\":[\"s\"],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '2,1,3,1,1,1,1,2,2');
    });

    (0, _qunit.test)('it sorts data using 2 keys', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.set('table', Object.assign({}, _tables.sortableTable, {
        state: {
          sorting: ['foo:desc', 'bar:desc']
        }
      }));

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tmSi8fHM",
        "block": "{\"symbols\":[\"s\"],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '2,1,3,1,2,2,1,1,1');
    });

    (0, _qunit.test)('it sorts nested data using nested key', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.set('table', Object.assign({}, _tables.nestedDataTable, {
        state: {
          sorting: ['foo.one:desc']
        }
      }));

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tmSi8fHM",
        "block": "{\"symbols\":[\"s\"],\"statements\":[[0,\"\\n\"],[4,\"d-sorter\",null,[[\"table\"],[[22,[\"table\"]]]],{\"statements\":[[0,\"              \"],[1,[26,\"d-table\",null,[[\"table\"],[[21,1,[\"table\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), 'e,f,3,6,c,d,2,5,a,b,1,4');
    });
  });
});
define('dummy/tests/integration/components/d-table-test', ['qunit', 'ember-qunit', '@ember/test-helpers', 'dummy/tests/datasets/tables'], function (_qunit, _emberQunit, _testHelpers, _tables) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mrUCHrsK",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"d-table\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');
    });

    (0, _qunit.test)('it renders basic data by default', async function (assert) {
      this.set('table', _tables.standardTable);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VQCpkakm",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-table\",null,[[\"table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      // header
      assert.equal(this.$('table thead tr td').map((i, item) => item.innerHTML.trim()).toArray().join(','), 'foo,bar,baz');

      //body
      assert.equal((0, _testHelpers.findAll)('table tbody tr').length, 3);
      assert.equal((0, _testHelpers.findAll)('table tbody td').length, 9);
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');
    });

    (0, _qunit.test)('it doesnt renders headers if settings have header = false', async function (assert) {
      this.set('table', Object.assign({}, _tables.standardTable, { settings: { header: false } }));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VQCpkakm",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-table\",null,[[\"table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.findAll)('table thead').length, 0);
      assert.equal((0, _testHelpers.findAll)('table tbody tr').length, 3);
    });

    (0, _qunit.test)('it renders cells with custom component', async function (assert) {
      this.set('table', _tables.customRender);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VQCpkakm",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-table\",null,[[\"table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.findAll)('table tbody tr').length, 3);
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,$2$$,3,4,$5$$,6,7,$8$$,9');
    });

    (0, _qunit.test)('it handles changing data', async function (assert) {
      let changedStandardData = _tables.standardTable.data.map(i => new Ember.Object(i));
      changedStandardData[0].set('foo', "2");
      this.set('table', _tables.standardTable);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VQCpkakm",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-table\",null,[[\"table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');
      this.set('table', Object.assign({}, _tables.standardTable, {
        data: changedStandardData
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '2,2,3,4,5,6,7,8,9');
      Ember.run(function () {
        changedStandardData[0].set('foo', "3");
      });
      return (0, _testHelpers.settled)().then(() => {
        assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '3,2,3,4,5,6,7,8,9');
      });
    });

    (0, _qunit.test)('it handles changing column order', async function (assert) {
      this.set('table', new Ember.Object(_tables.standardTable));
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VQCpkakm",
        "block": "{\"symbols\":[],\"statements\":[[1,[26,\"d-table\",null,[[\"table\"],[[22,[\"table\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');

      this.set('table.columns', [{ key: 'bar' }, { key: 'foo' }, { key: 'baz' }]);
      return (0, _testHelpers.settled)().then(() => {
        assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), '2,1,3,5,4,6,8,7,9');
      });
    });

    (0, _qunit.test)('it renders nested data using nested key', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.set('table', Object.assign({}, _tables.nestedDataTable));

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Dk7WQO/t",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n              \"],[1,[26,\"d-table\",null,[[\"table\"],[[22,[\"table\"]]]]],false],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('table tbody td').map((i, item) => item.innerHTML).toArray().join(','), 'a,b,1,4,c,d,2,5,e,f,3,6');
    });
  });
});
define('dummy/tests/integration/components/d-tbody-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z tbody', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Hs9Vqnj+",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"d-tbody\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Kn42PJuw",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-tbody\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });
  });
});
define('dummy/tests/integration/components/d-tr-test', ['qunit', 'ember-qunit', '@ember/test-helpers', 'dummy/tests/datasets/tables'], function (_qunit, _emberQunit, _testHelpers, _tables) {
  'use strict';

  (0, _qunit.module)('Integration | Component | z tr', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "z52tNMp+",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"d-tr\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vbojvAx/",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"d-tr\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });

    (0, _qunit.test)('it renders custom tr component', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      this.set('table', Object.assign({}, _tables.standardTable, {
        settings: {
          rowComponent: 'custom-tr'
        }
      }));

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "53b18jj9",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n          \"],[1,[26,\"d-table\",null,[[\"table\"],[[22,[\"table\"]]]]],false],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal((0, _testHelpers.find)('table tbody').textContent.replace(/[^\w|;|:]/g, ''), '0;123:1;456:2;789:');
    });
  });
});
define('dummy/tests/integration/components/dtab/selectable-cell-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | dtab/selectable cell', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LC0DQMF5",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"dtab/selectable-cell\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SLLDhwSz",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"dtab/selectable-cell\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });
  });
});
define('dummy/tests/integration/components/dtab/selectable-header-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | dtab/selectable header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {

      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2nWyK9HR",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"dtab/selectable-header\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bWC2IZfd",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"dtab/selectable-header\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
    });
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


  Ember.deprecate(`Importing from "test-support" is now deprecated. Please import directly from the "ember-cli-page-object" module instead.`, false, {
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
