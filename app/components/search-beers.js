import Component from "@ember/component";
import { task, timeout } from "ember-concurrency";

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set("results", []);
  },

  performSearch: task(function*() {
    yield timeout(250);
    let results = yield fetch(`https://api.punkapi.com/v2/beers?beer_name=${this.keyword}`)
      .then(r => {
        return r.json();
      })
      .then(beers => {
        return beers;
      });
    this.set("results", results);
  }).restartable() //means it can only run once
});
