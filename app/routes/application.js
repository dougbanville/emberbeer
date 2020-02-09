import Route from "@ember/routing/route";
import { inject as service } from '@ember/service';

export default Route.extend({

  moment: service(),
  
  beforeModel() {
    this.get('moment').setTimeZone('America/Los_Angeles');
  },

  model() {
    return fetch("https://api.punkapi.com/v2/beers/?per_page=80")
      .then(r => {
        return r.json();
      })
      .then(beers => {
        return beers;
      });
  },

  actions:{
    changeTz(){
      this.get('moment').setTimeZone('Europe/Dublin');
    }
  }
});
