import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | run-time-components', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:run-time-components');
    assert.ok(route);
  });
});
