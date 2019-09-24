import Route from "@ember/routing/route";
import { task, timeout } from "ember-concurrency";

export default Route.extend({
  queryParams: {
    beer_name: {
      refreshModel: true,
      replace: true,
      as: "b"
    }
  },

  getBeers: task(function*(beer_name) {
    let url = "https://api.punkapi.com/v2/beers/?";

    if (beer_name) {
      yield timeout(250);
      url = url + "beer_name=" + beer_name;
    }
    let beers = yield fetch(url)
      .then(r => {
        return r.json();
      })
      .then(beers => {
        return beers;
      });
    return beers;
  }).restartable(),

  model({ beer_name }) {
    return this.getBeers.perform(beer_name);
    /*
    return fetch("https://api.punkapi.com/v2/beers")
      .then(r => {
        return r.json();
      })
      .then(beers => {
        return beers;
      });
    */
  }
});
