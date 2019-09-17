import Controller from "@ember/controller";
import { task, timeout } from "ember-concurrency";

export default Controller.extend({
  interval: 3000,

  randomBeers: task(function*() {
    let randomBeer = yield fetch(`https://api.punkapi.com/v2/beers/random`)
      .then(r => {
        return r.json();
      })
      .then(random => {
        return random;
      });

    this.set("randomBeer", randomBeer[0]);
    yield randomBeer;
  }),

  actions: {
    getBeer() {
      this.randomBeers.perform();
    }
  }
});
