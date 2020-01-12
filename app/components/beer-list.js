import Component from "@glimmer/component";
import Sortable from "sortablejs";
import { action } from "@ember/object";

export default class BeerListComponent extends Component {
  constructor() {
    super(...arguments);
    //console.log(document.getElementById("grid"));
    //var sortable = Sortable.create(el);
  }

  makeDraggable = () => {
    var el = document.getElementById("grid");
    this.sortable = Sortable.create(el);
  };
  @action
  saveState() {
    this.array = this.sortable.toArray();
    console.log(this.array);
    //sortable.sort(order.reverse());
  }
  @action
  reverse() {
    this.array = this.sortable.toArray();
    this.sortable.sort(this.array.reverse());
  }
}
