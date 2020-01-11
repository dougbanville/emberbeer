import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  @computed("model")
  get chartData() {
    const charted = [];
    this.model.map(r => {
      charted.push({ name: r.name, y: r.abv });
    });
    return [
      {
        data: charted,
        annotations: [
          {
            labels: [
              {
                point: {
                  x: 0,
                  y: 55,
                  xAxis: 0,
                  yAxis: 55
                },
                text: "x: {x}<br/>y: {y}"
              }
            ]
          }
        ]
      }
    ];
  },

  get chartOptions() {
    const chartOptions = {
      chart: {
        type: "area"
      },
      title: {
        text: "Beer Strength"
      },
      xAxis: {
        categories: ""
      },
      yAxis: {
        title: {
          text: "Beer Strength"
        }
      },
      theme: "defaultTheme"
    };
    return chartOptions;
  }
});
