<!-- <template>
    <div class="polar-chart-container">
      <canvas ref="polarChart"></canvas>
    </div>
  </template>
  
  <script>

import Chart from 'chart.js/auto';
  
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
      labels: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.polarChart.getContext('2d');
        new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: this.labels,
            datasets: [{
              data: this.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            }],
          },
          options: {
            scale: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .polar-chart-container {
    max-width: 400px; /* Adjust based on your layout */
    margin: auto;
  }
  </style>
   -->




<!--    
   
   <template>
    <div class="polar-chart-container">
      <canvas ref="polarChart"></canvas>
    </div>
  </template>
  
  <script>
 import Chart from 'chart.js/auto';
  
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
      labels: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.polarChart.getContext('2d');
        new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: this.labels,
            datasets: [{
              data: this.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            }],
          },
          options: {
            scale: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .polar-chart-container {
    max-width: 100%; /* Adjust based on your layout */
    margin: auto;
  }
  
  @media only screen and (min-width: 600px) {
    .polar-chart-container {
      max-width: 70%; /* Adjust based on your design */
    }
  }
  
  @media only screen and (min-width: 768px) {
    .polar-chart-container {
      max-width: 50%; /* Adjust based on your design */
    }
  }
  
  @media only screen and (min-width: 1024px) {
    .polar-chart-container {
      max-width: 100%; /* Adjust based on your design */
    }
  }
  </style>
   -->




   <!-- SalesCard.vue -->

<template>
    <div class="sales-card">
      <div class="card-header">
        <h2>Sales Revenue</h2>
      </div>
      <div class="card-body">
        <p class="revenue-amount">$ {{ formattedRevenue }}</p>
        <p class="increase-rate">2.4% increase from previous period</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        revenue: 38452,
        increaseRate: 2.4,
      };
    },
    computed: {
      formattedRevenue() {
        // Format revenue with commas for better readability
        return this.revenue.toLocaleString();
      },
    },
  };
  </script>
  
  <style scoped>
  .sales-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    margin: 20px;
    max-width: 300px;
  }
  
  .card-header {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    text-align: center;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .revenue-amount {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .increase-rate {
    color: #4caf50;
  }
  </style>
  