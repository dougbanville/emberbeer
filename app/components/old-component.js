import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';

export default Component.extend({

  count: 0,

  bgImage: computed("image", function(){
    return htmlSafe(`background-image: url('${this.get("image")}');`)
  }),

  actions: {
    increment(){
      this.set("count", this.count + 1)
    }
  }
});
