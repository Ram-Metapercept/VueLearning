<template>
  <div>
    <apexchart
      v-if="isDesktop"
      type="pie"
      :width="chartOptions.chart.width"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <apexchart
      v-else
      type="pie"
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
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
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
  // computed: {
  //   isDesktop() {
  //     return window.innerWidth > 480; // Adjust the breakpoint as needed
  //   },
  //   mobileChartWidth() {
  //     return 250; // Adjust the width as needed
  //   },
  //   mobileChartHeight() {
  //     return 250; // Adjust the height as needed
  //   },
  // },
};
</script> 

  



   <!-- <template>
    <Pie :data="data" :options="options" />
  </template>
  
  <script lang="ts">
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  import * as chartConfig from '../components/chartConfig'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      Pie
    },
    data() {
      return chartConfig
    }
  }
  </script> -->