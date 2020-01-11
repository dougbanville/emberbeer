import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | test home page", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /test-home-page", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
  });
});
