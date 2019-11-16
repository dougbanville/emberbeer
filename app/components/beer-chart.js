import Component from "@ember/component";
import { computed } from "@ember/object";

import { A } from "@ember/array";

export default Component.extend({
  chartData: computed("model", function() {
    //return this.model;
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
  }),

  chartOptions: computed("model", function() {
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
  })
});
