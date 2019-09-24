import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    let geo = navigator.geolocation;
    geo.getCurrentPosition(pos => {
      this.set("lat", pos.coords.latitude);
      this.set("long", pos.coords.longitude);
      this.set("position", pos);
    });
  },

  actions: {
    markerClick() {
      alert("oi");
    }
  }
});
