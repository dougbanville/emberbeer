import Component from "@ember/component";
import { run, later } from "@ember/runloop";
import { task, timeout } from "ember-concurrency";

export default Component.extend({
  run: true,
  periodicFetch: task(function*() {
    while (this.run) {
      yield this.task.perform();
      yield timeout(this.interval);
    }
  }).on("didInsertElement"),

  actions: {
    cancelTask() {
      this.set("run", false);
    },
    startTask() {
      this.set("run", true);
    }
  }
});
