import Ember from 'ember';
import AuthenticatedUserMixin from 'ilove-me/mixins/authenticated-user';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticated user');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuthenticatedUserObject = Ember.Object.extend(AuthenticatedUserMixin);
  let subject = AuthenticatedUserObject.create();
  assert.ok(subject);
});
