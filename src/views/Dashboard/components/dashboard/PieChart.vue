<script>
 
  export default {
    data() {
      return {
        options: {
          theme: "light2",
          animationEnabled: true,
          title:{
            text: "Visitors By Channel"
          },
          data: [{
            type: "pie",
            indexLabel: "{label} (#percent%)",
            yValueFormatString: "#,##0",
            toolTipContent: "<span style='\"'color: {color};'\"'>{label}</span> {y}(#percent%)",
            dataPoints: [
              { label: "Organic Traffic", y: 130631 },
              { label: "Direct", y: 28874 },
              { label: "Referral", y: 15467 },
              { label: "Social", y: 10543 },
              { label: "Email", y: 5613 },
              { label: "Others", y: 8492 }
            ]
          }]
        },
        styleOptions: {
          width: "100%",
          height: "360px"
        }
      }
    }
  }
</script>
<template>
  <CanvasJSChart :options="options" :styles="styleOptions"/>
</template>           