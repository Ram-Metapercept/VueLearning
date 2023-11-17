<!-- <template>
  <canvas :width="width" :height="height" :id="id"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

  export default {
      props: ['id','width','height','type','title','labels','data', 'fill', 'backgroundColor', 'borderColor', 'borderWidth'],
      mounted() {
          var ctx = document.getElementById(this.id).getContext('2d');
          new Chart(ctx, {
              type: this.type ? this.type : 'bar',
              data: {
                  labels: this.labels,
                  datasets: [{
                      label: this.title,
                      data: this.data,
                      fill: this.fill,
                      backgroundColor: this.backgroundColor,
                      borderColor: this.borderColor,
                      borderWidth: this.borderWidth ? this.borderWidth : 1
                  }]
              }
          });
      }
  }
</script> -->



<template>
    <canvas ref="chartCanvas" :width="width" :height="height"></canvas>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    props: ['id', 'width', 'height', 'type', 'title', 'labels', 'data', 'fill', 'backgroundColor', 'borderColor', 'borderWidth'],
    mounted() {
      // Use this.$refs to access the ref
      var ctx = this.$refs.chartCanvas.getContext('2d');
      new Chart(ctx, {
        type: this.type ? this.type : 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: this.title,
            data: this.data,
            fill: this.fill,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth ? this.borderWidth : 1
          }]
        }
      });
    }
  };
  </script>
  