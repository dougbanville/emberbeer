import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class BeerListSortableComponent extends Component {
  @action
  reorderItems() {
    console.log("reorder");
  }
}
