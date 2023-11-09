<template>
  <div>
    <h1 class="alignment1">
      <span class="material-symbols-outlined"> dashboard </span
      ><span>Dashboard</span>
    </h1>

    <!-- Cards Section -->
    <a-row gutter="16" class="flexBox">
      <a-col :span="6" class="card">
        <center>
          <a-card title="Total User">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              "
            >
              <h1 style="font-size: 54px; margin: 0 auto; padding: 10px">
                84K
              </h1>
              <h2 style="font-size: 16px; margin: 0 auto">56%</h2>
            </div>
          </a-card>
        </center>
      </a-col>

      <a-col :span="6" class="card">
        <center>
          <a-card title="Premium User">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              "
            >
              <h1 style="font-size: 54px; margin: 0 auto; padding: 10px">
                34K
              </h1>
              <h2 style="font-size: 16px; margin: 0 auto">38%</h2>
            </div>
          </a-card>
        </center>
      </a-col>
      <a-col :span="6" class="card">
        <center>
          <a-card title="Net User">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              "
            >
              <h1 style="font-size: 54px; margin: 0 auto; padding: 10px">
                46K
              </h1>
              <h2 style="font-size: 16px; margin: 0 auto">10%</h2>
            </div>
          </a-card>
        </center>
      </a-col>

      <a-col :span="6" class="card">
        <center>
          <a-card title="Gold User">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              "
            >
              <p style="font-size: 54px; margin: 0 auto; padding: 10px">35K</p>
              <p style="font-size: 16px; margin: 0 auto">17%</p>
            </div>
          </a-card>
        </center>
      </a-col>
    </a-row>

    <!-- <a-card title="Chart" style="margin-top: 20px">
      <a-chart
        :options="chartOptions"
        :data="chartData"
        :width="400"
        :height="300"
      ></a-chart>
    </a-card> -->
    <div class="wrapper">
      <!-- <div class="tableSpacing"> -->
      <Bar :data="data" :options="options" id="barchart" />

      <!-- </div> -->

      <div class="pieSpacing">
        <div class="block1">
          <PieChart id="p1"></PieChart>
        </div>
        <div class="block2" id="p2">
          <DonutChart></DonutChart>
        </div>
      </div>
    </div>
  </div>

  <div
    :style="{
      padding: '24px',
      background: '#fff',
      minHeight: '100vh',
      marginTop: '20px',
      overflowX: 'scroll',
    }"
  >
    <Table />

    <router-view></router-view>
  </div>
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import PieChart from "./PieChart.vue";
import Table from "./Table.vue";

import DonutChart from "./DonutChart.vue";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    DonutChart,
    Table,
    PieChart,
    Bar,
  },
  data() {
    return {
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [40, 20, 12, 45, 67, 89, 45, 67, 89, 34, 76, 47],
            backgroundColor: ["#0091D5", "#1C4E80"],
            // barPercentage: 0.8,
            // categoryPercentage: 0.7,
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
};
</script>
<style scoped>
.alignment1 {
  display: flex;
  align-items: center;
}
.wrapper {
  display: flex;
  align-items: center !important;
  padding: 22px !important;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
}
.tableSpacing {
  width: 100% !important;
  max-height: 100vh !important;
  margin-top: 20px;
  padding: auto !important;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
}
a-card {
  margin-bottom: 20px;
}
#barchart {
  width: 60% !important;
  margin: 0px;
  padding: 20px !important;
  background-color: white;

  border-radius: 5px;
}

@media only screen and (max-width: 991px) {
  .part1 {
    width: 100%;
  }
  .part2 {
    display: none;
  }
  form {
    max-width: 100%;
    margin: 20px !important;
  }
}
@media only screen and (min-width: 1100px) {
  #barchart {
    width: 65% !important;
    margin: 0px;
    padding: 20px !important;
    background-color: white;
  
    border-radius: 5px;
  }
}
@media only screen and (max-width: 991px) {
  .wrapper {
    display: block;
    flex-direction: row;
    flex-wrap: wrap;
  }
  #barchart {
    width: 100% !important;
    margin: 0px;
    padding: 0px !important;
    background-color: white;

    border-radius: 5px;
  }

  .pieSpacing {
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

}

.flexBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0px 10px !important;
}
.card {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  flex: 1;
  max-width: calc(25% - 20px) !important; /* 4 cards per row on large screens */

  @media (max-width: 1200px) {
    max-width: calc(
      33.33% - 20px
    ) !important; /* 3 cards per row on medium screens */
  }

  @media (max-width: 768px) {
    max-width: calc(
      50% - 20px
    ) !important; /* 2 cards per row on small screens */
  }

  @media (max-width: 480px) {
    max-width: 100% !important; /* 1 card per row on extra small screens */
  }
}










@media screen and (max-width: 600px) {
  /* Adjust styles for smaller screens */
  .pieSpacing {
    display: flex;
    flex-direction: row !important; 
    justify-content: center;/* Stack blocks vertically on small screens */
    align-items: center;
  }


#apexcharts4aiykc58{
display: flex;
justify-content: center;
align-items: center;
}
}
</style>
