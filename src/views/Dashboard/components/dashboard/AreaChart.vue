<template>
  <div>
    <apexchart
      :type="chartOptions.chart.type"
      :width="chartOptions.chart.width"
      :height="chartOptions.chart.height"
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
          type: 'area',
          width: '100%',
          height:'150%' // Set width as a percentage
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
     
      },
    };
  },
};
</script>
