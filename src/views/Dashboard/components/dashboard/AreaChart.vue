
<template>
    <div>
      <apexchart
        v-if="isDesktop"
        type="area"
        :width="chartOptions.chart.width"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <apexchart
        v-else
        type="area"
        :width="mobileChartWidth"
        :height="mobileChartHeight"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </template>
  
  <script>
  import VueApexCharts from 'vue3-apexcharts';
  
  export default {
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        series: [
          {
            name: 'Series 1',
            data: [44, 55, 13, 43, 22],
          },
          {
            name: 'Series 2',
            data: [10, 22, 30, 12, 18],
          },

        ],
        chartOptions: {
          chart: {
            width: 360,
            // height: 500,
            type: 'area',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 300,
                  height:300,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      };
    },
    computed: {
      isDesktop() {
        return window.innerWidth > 480; 
      },
      mobileChartWidth() {
        return 250; 
      },
      mobileChartHeight() {
        return 280; 
      },
    },
  };
  </script>



