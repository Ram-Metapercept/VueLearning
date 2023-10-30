<template>
    <div>
      <h1>User Dashboard</h1>
  
      <!-- Cards Section -->
      <a-row gutter="16">
        <a-col :span="6">
          <a-card  style="height: 200px;  background: linear-gradient(to right, #159957, #155799);">
            <!-- Content for Card 1 -->
            <p><UserAddOutlined/></p>
          </a-card>
        </a-col>
        <a-col :span="6">
            <a-card title="Card 1" style="height: 200px;
            background: linear-gradient(to right, #45B649, #DCE35B);">
              <!-- Content for Card 1 -->
              <p>Card Content 1</p>
            </a-card>
            


          </a-col>
          <a-col :span="6">
            <a-card title="Card 1" style="height: 200px; background: linear-gradient(to right, #659999, #f4791f);">
              <!-- Content for Card 1 -->
              <p>Card Content 1</p>
            </a-card>
          </a-col>
        <a-col :span="6">
          <a-card title="Card 2" style="height: 200px;  background: linear-gradient(to right, #108dc7, #ef8e38)">
            <!-- Content for Card 2 -->
            <p>Card Content 2</p>
          </a-card>
        </a-col>
      </a-row>
  
      <!-- Chart Section -->
      <a-card title="Chart" style="margin-top: 20px">
        <a-chart :options="chartOptions" :data="chartData" :width="400" :height="300"></a-chart>
      </a-card>
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs';
  import { UserAddOutlined, VideoCameraOutlined, LoginOutlined,HomeOutlined } from '@ant-design/icons-vue';
  export default {
    components: {
      Line
    },
    data() {
      return {
        chartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Sample Data',
              borderColor: 'blue',
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
              data: [10, 20, 15, 30, 25, 35],
            },
          ],
        },
        chartOptions: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  a-card {
    margin-bottom: 20px;
  }
  </style>
  