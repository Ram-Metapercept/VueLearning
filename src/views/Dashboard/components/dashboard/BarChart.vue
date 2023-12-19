<script>
  import * as CanvasJS from '@canvasjs/charts';
  export default {
    data() {
      return {
        options: {
          animationEnabled: true,
          theme: "light2",
          title:{
            text: "User Acquisition Report"
          },
          axisY: {
            title: "Users",
            includeZero: true
          },
          legend: {
            cursor:"pointer",
            itemclick : this.toggleDataSeries
          },
          toolTip: {
            shared: true,
            content: this.toolTipFormatter
          },
          data: [{
            type: "bar",
            showInLegend: true,
            name: "2019",
            color: "#2196F3",
            dataPoints: [
              { y: 11451, label: "Social" },
              { y: 45293, label: "Others" },
              { y: 68560, label: "Referral" },
              { y: 156516, label: "Direct" },
              { y: 658000, label: "Organic Search" },
            ]
          },{
            type: "bar",
            showInLegend: true,
            name: "2018",
            color: "#81D4FA",
            
            dataPoints: [
              { y: 12503, label: "Social" },
              { y: 49884, label: "Others" },
              { y: 67200, label: "Referral" },
              { y: 138516, label: "Direct" },
              { y: 636000, label: "Organic Search" },
              
            ]
          }]
        },
        styleOptions: {
          width: "100%",
          height: "360px"
        }
      }
    },
    methods: {
      toolTipFormatter(e) {
        var content = "";
        var percentageDifference = (e.entries[0].dataPoint.y - e.entries[1].dataPoint.y) / e.entries[1].dataPoint.y;
        content += "<strong>" + e.entries[0].dataPoint.label + "</strong>";
        content += " (<span style=\"color: " +  (percentageDifference >= 0  ? "green \"> ↑ " : "red\"> ↓ ") +  CanvasJS.formatNumber(Math.abs(percentageDifference), "#0.##%") + "</span>)<br/>";
        for (var i = 0; i < e.entries.length; i++){
          content += "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;		
        }
        return content;
      },
      toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        }
        else {
          e.dataSeries.visible = true;
        }
        chart.render();
      }
    }
  }
</script>
<template>
  <CanvasJSChart :options="options" :styles="styleOptions"/>
</template>                             