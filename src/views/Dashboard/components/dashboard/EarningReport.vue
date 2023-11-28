<template>
    <div class="earnings-card">
      <div class="chart-container">
        <canvas ref="weeklyChart"></canvas>
        <!-- <div class="chart-label">
        <strong>Weekly Earnings</strong>
        <p>$2,523</p>
    </div> -->
      </div>
      <div class="chart-container">
        <canvas ref="monthlyChart"></canvas>
  
      </div>

    </div>
  </template>
  
  <script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';  
  export default {
    mounted() {
      this.renderCharts();
    },
    methods: {
      renderCharts() {
        // Weekly Earnings Chart
        const weeklyCtx = this.$refs.weeklyChart.getContext('2d');
        new Chart(weeklyCtx, {
          type: 'doughnut',
          data: {
            labels: ['weekly Earnings', 'weekly Revenue'],
            datasets: [{
              data: [4523, 10000 - 4523], // Adjust the remaining value accordingly
              backgroundColor: ['#36A2EB', 'cyan'],
            }],
          },
          options: {
      cutout: '60%', 
    },
        });
  

        const monthlyCtx = this.$refs.monthlyChart.getContext('2d');
        new Chart(monthlyCtx, {
          type: 'doughnut',
          data: {
            labels: ['Monthly Earnings', 'Revenue'],
            datasets: [{
              data: [21235, (30000 - 21235)], 
              backgroundColor: ['#FF6384', 'cyan'],
            }],
          },
          options: {
      cutout: '60%', 
    },
        });
      },
    },
  };
  </script>
  
  <style scoped>

  
  .chart-container {

    display: flex;
    flex-direction: column !important;
    margin-top: 30px;
    max-width: 25vh;
    max-height: 25vh;
    text-align: center;
  }

 
  
  .chart-label {
    font-size: 20px;
    margin-top:1rem;
  }
  
  .earnings-text {
    text-align: center;
  }
  @media (max-width: 1200px) {
.earnings-card {

    flex-direction: column !important;
        display: block;
        margin: auto;
        justify-content: center !important;
      }
  }


  @media (max-width: 1050px) {
    .earnings-card {
 
        flex-direction: row !important;
            display: block;
            margin: auto;
            justify-content: center !important;
          }
      }
  </style>
  