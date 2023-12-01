
<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script>
  import VueApexCharts from 'vue-apexcharts';
  
  export default {
    components: {
      apexchart: VueApexCharts,
    },
    props: ['chartOptions', 'series'],
  };
  </script>