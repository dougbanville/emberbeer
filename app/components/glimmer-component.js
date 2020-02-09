import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GlimmerComponentComponent extends Component {

  @tracked count = 0;

  @action
  increment(){
    this.count++;
  }

  bgImage = el=>{
    el.setAttribute("style", `background-image: url('${this.args.image}')`);
  }

}
