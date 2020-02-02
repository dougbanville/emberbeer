import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class RunTimeComponents extends Route{

  model() {
    return fetch("https://api.punkapi.com/v2/beers")
      .then(r => {
        return r.json();
      })
      .then(beers => {

        beers.forEach((b,i)=>{
          beers[i].template = 'normal-beer'
          if(b.abv > 6) beers[i].template = 'strong-beer';
        })
        return beers;
      });
  }
  @action
  someAction(){
    alert('Doug is cool')
  }

}

