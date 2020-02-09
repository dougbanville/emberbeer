import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class BeerListBeerComponent extends Component {

  constructor(){
    super(...arguments)
    const { beer } = this.args;

    console.log(beer);
  }

  image = (el)=>{
    el.setAttribute("style", `background-image: url(${this.args.beer.image_url}); background-size:80px; background-repeat:no-repeat;`);
  }
}
