import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return fetch("https://api.punkapi.com/v2/beers")
      .then(r => {
        return r.json();
      })
      .then(beers => {
        return beers;
      });
  }
});
