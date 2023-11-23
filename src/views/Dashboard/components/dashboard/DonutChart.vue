<!-- <template>
  <div>
    <apexchart :options="chartOptions" :series="series"></apexchart>
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
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut',
        },
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
</script>  -->

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
  

   <!-- <template>
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
            data: [
              { x: 'Team A', y: 44 },
              { x: 'Team B', y: 55 },
              { x: 'Team C', y: 13 },
              { x: 'Team D', y: 43 },
              { x: 'Team E', y: 22 },
            ],
          },
        ],
        chartOptions: {
          chart: {
            width: 450,
            type: 'area',
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
    computed: {
      isDesktop() {
        return window.innerWidth > 480; // Adjust the breakpoint as needed
      },
      mobileChartWidth() {
        return 250; // Adjust the width as needed
      },
      mobileChartHeight() {
        return 250; // Adjust the height as needed
      },
    },
  };
  </script> -->
  


<!-- 
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
          // Add more series as needed
        ],
        chartOptions: {
          chart: {
            width: 500,
            type: 'area',
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
    computed: {
      isDesktop() {
        return window.innerWidth > 480; // Adjust the breakpoint as needed
      },
      mobileChartWidth() {
        return 250; // Adjust the width as needed
      },
      mobileChartHeight() {
        return 250; // Adjust the height as needed
      },
    },
  };
  </script>
  
 -->




<!-- 
   <template>
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