<template>
  <div>
    <apexchart
      v-if="isDesktop"
      type="donut"
      :width="chartOptions.chart.width"
      :options="chartOptions"
      :series="series"
     id="donutChart"></apexchart>
    <apexchart
      v-else
      type="donut"
      :width="mobileChartWidth"
      :height="mobileChartHeight"
      :options="chartOptions"
      :series="series"
      id="donutChart"></apexchart>
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
      series: [44, 55 ],
      chartOptions: {
        chart: {
          width: 380,
          type: 'donut',
        },
        
      
        labels: ['Paid User', 'Unpaid User', ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
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
      return 250;
    },
  },
};
</script>

<style scoped>

.apexcharts-canvas {
  left: 50px !important;
  position: relative !important;
  user-select: none;
}
@media (max-width: 1200px) {
#donutChart{
  display: block;
  margin: 0 auto !important;

}
}
</style>
  
