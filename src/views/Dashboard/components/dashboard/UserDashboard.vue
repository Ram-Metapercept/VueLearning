<template>
  <div>
    <div class="combine">
      <div class="combine1">
        <a-row gutter="6" class="flexBox">
          <a-col :span="24" sm="12" md="8" lg="6" xl="6" class="card">
            <Card title="Total Users" value="1000" label="Users" icon="users" />
          </a-col>
          <a-col :span="24" sm="12" md="8" lg="6" xl="6" class="card">
            <Card title="Revenue" value="$50K" label="USD" icon="dollar-sign" />
          </a-col>
          <a-col :span="24" sm="12" md="8" lg="6" xl="6" class="card">
            <Card
              title="Active Subscribers"
              value="500"
              label="Subscribers"
              icon="bell"
            />
          </a-col>
          <a-col :span="24" sm="12" md="8" lg="6" xl="6" class="card">
            <Card
              title="Monthly Visits"
              value="10K"
              label="Visits"
              icon="chart-line"
            />
          </a-col>
        </a-row>
      </div>
      <div class="combine2">
        <div class="wrapper">
          <div class="strip1">
            <span>Growth Summary</span>
            <span class="material-symbols-outlined"> settings </span>
          </div>
          <Bar :data="data" :options="options" id="barchart" />
          <div class="t">
            <div class="t1">
              <span>Average Growth</span>
              
              <div class="parent">
                <div class="div1">
                  $3468
                </div>
                <div class="div2">
                  <span class="material-symbols-outlined"> moving </span>
                  <span>49%</span>
                </div>
              </div>
              <div></div>
            </div>

            <div class="t2">
              <span>Current Growth </span>

              <div class="parent">
                <div class="div1">
                  $2345
                </div>
                <div class="div2">
                  <span class="material-symbols-outlined"> moving </span>
                  <span>56%</span>
                </div>
              </div>
              <div></div>
            </div>
            <div class="t3">
              <span>Previous Growth</span>

              <div class="parent">
                <div class="div1">
                  $8976
                </div>
                <div class="div2">
                  <span class="material-symbols-outlined"> moving </span>
                  <span>45%</span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="block2">
          <div class="earningReport">
            <EarningReport />
          </div>
        </div>
      </div>
    </div>
  </div>

  <CardStats />

  <div class="parent1">
    <div class="child1"><activity-card :activities="activityData" /></div>
    <div class="child2">
      <div class="areaChart">
        <AreaChart></AreaChart>
      </div>
    </div>
    <div class="child3"><PieChart></PieChart></div>
  </div>

  <div
    class="tableClass"
    :style="{

      background: '#fff',
      borderRadius: '8px',
      overflowX: 'auto',
    }"
  >
    <Table />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import EarningReport from "./EarningReport.vue";
import ActivityCard from "./ActivityCard.vue";
import PieChart from "./PieChart.vue";
import Table from "./Table.vue";
import DonutChart from "./DonutChart.vue";
import { Radar } from "vue-chartjs";
import Card from "./Card.vue";
import LineChart from "../dashboard/LineChart.vue";
import AreaChart from "./AreaChart.vue";
import {ref} from "vue";
import CardStats from "../dashboard/Cardstates.vue";
const current = ref(2);
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,

  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default {
  components: {
    CardStats,
    EarningReport,
    Radar,
    Table,
    AreaChart,
    ActivityCard,
    Card,
    LineChart,
    DonutChart,
    PieChart,
    Bar,
  },
  data() {
    return {
      series: {
        monthDataSeries1: {
          dates: ["2023-01-01", "2023-01-02", "2023-01-03"],
          prices: [100, 105, 98],
        },
        monthDataSeries2: {
          dates: ["2023-01-01", "2023-01-02", "2023-01-03"],
          prices: [80, 85, 88],
        },
      },
      activityData: [
        {
          date: "2020-04-28T00:07:00",
          details: "Responded to need “Volunteer Activities”",
        },
        {
          date: "2020-04-28T00:07:00",
          details: "Responded to need “Volunteer Activities”",
        },
        {
          date: "2020-04-21T20:01:00",
          details: "Added an interest “Volunteer Activities”",
        },
        {
          date: "2020-04-17T09:23:00",
          details: "Joined the group “Boardsmanship Forum”",
        },
        {
          date: "2020-04-11T17:10:00",
          details: "Responded to need “In-Kind Opportunity”",
        },
        {
          date: "2020-04-07T12:47:00",
          details: "Created need “Volunteer Activities”",
        },
        {
          date: "2020-04-05T15:09:00",
          details: "Attending the event “Some New Event”",
        },
        {
          date: "2020-04-02T00:07:00",
          details: "Responded to need “In-Kind Opportunity”",
        },
      ],
      chartData: [10, 20, 30, 40, 50], // Replace with your data
      chartLabels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],

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
            barPercentage: 0.8,
            categoryPercentage: 0.7,
          },
        ],
      },
      options: {
        responsive: true,
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style scoped>
.totalChart {
  display: flex !important;
  flex-direction: row !important;
}


.combine2 {
  display: flex;
  flex-direction: row;
}
.parent1 {
  margin: 20px 0px !important;
  gap: 20px !important;
  display: flex;
  flex-direction: row;
}
.child1,
.child2,
.child3 {
  background-color: #fff;
  border-radius: 8px !important;
  width: 100%;
  height: 40vh;
}
.child1 {
  padding-left: 40px;

  padding-bottom: 50px;
  flex-direction: column !important;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
/* For Webkit browsers like Chrome and Safari */
.child1::-webkit-scrollbar {
  width: 6px;
}
.cardAndTable {
  display: flex;
  flex-direction: column;
}
.areaChart {
  display: block;
  margin-top: 30px !important;
  height: 100% !important;
}

.Highlight {
  font-weight: bold;
  margin-top: 30px !important;
  margin: 20px;
}



.parent {
  display: flex;
  justify-content:flex-start;
  align-items: center;
  gap:5px !important;
  flex-direction: row !important;
}

.wrapper {
  box-sizing: border-box;
  margin-top: 20px !important;
  margin-left: -0px;

  display: flex;
  flex-direction: column;

  background-color: white;
  width: 70%;
  border-radius: 8px;
}

a-card {
  margin-bottom: 20px;
}
.earningReport {
  display: flex;
  justify-content: flex-start;
}

.block2 {
  width: 30%;
  display: block !important;
  margin: 0 auto;
  margin: 20px 0px 0px 20px !important;
  padding: 5px !important;
  background-color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px !important;
}
.wrapper .strip1 {
  border-radius: 8px 8px 0px 0px;
  display: flex;
  align-items: center !important;
  width: 100%;
  height: 50px;
  font-weight: 700;
  background-color: lightgrey;
  justify-content: space-between !important;
  padding: 0 30px !important;
}

#barchart {
  width: 100% !important;
  margin: 0px;
  height: 100% !important;

  background-color: white;

  border-radius: 8px;
}

#app {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.combine {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flexBox {
  margin-top: 20px !important;
  display: flex;
  gap: 15px;

  width: 100%;
}

.card {
  border-radius: 8px;
  flex: 1;
  max-width: calc(25% - 10px) !important;
  /* 4 cards per row on large screens */

  @media (max-width: 1200px) {
    max-width: calc(25% - 10px) !important;
    /* 3 cards per row on medium screens */
  }

  @media (max-width: 768px) {
    max-width: calc(50%) !important;
    /* 2 cards per row on small screens */
  }

  @media (max-width: 480px) {
    max-width: calc(100%) !important;
    /* 1 card per row on extra small screens */
  }
}

.t {
  border-top: 1px solid lightgray;
  background-color: #fff;
  border-radius: 0px 0px 8px 8px;
  height: 70px;
  display: flex;
  justify-content: space-around !important;
}

.t1,
.t2,
.t3 {
  display: flex;
  flex-direction: column;

  padding: 15px;
}
.chart-container {
  width: 100% !important;
  height: 60% !important;
}
.t1 span,
.t2 span,
.t3 span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.div2 span {
  font-size: 16px;
  font-weight: normal;
  color: #666;
}

.pagination-bar {
  display: flex;
  justify-content: flex-end !important;
}
@media only screen and (min-width: 1100px) and (max-width: 1280px) {
  .block2 {
    height: 100%;
  }
  .block2 {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }
}

@media only screen and (min-width: 1100px) {
  #barchart {
    width: 90% !important;
    margin: 0px;
    padding: 20px !important;
    background-color: white;

    border-radius: 8px;
  }
}
@media only screen and (max-width: 1100px) {
  .combine {
    display: flex;
    flex-direction: column;
  }
}

.tableClass {
  margin-top: 20px !important;
  overflow-x: auto !important;
}
@media only screen and (max-width: 991px) {
  .wrapper {
    width: 100%;
  }
  .block2 {
    margin: 10px 0px 0px 0px !important;
    width: 100%;
  }
  .combine2 {
    flex-direction: column;
  }

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


  .combine {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

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

    border-radius: 8px;
  }

  .wrapper .strip1 {
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .parent1 {
    display: flex;
    flex-direction: column !important;
  }
  .tableClass {
    background: #fff !important;
    overflow-x: auto !important;
  }

  .chart-container {
    width: 100%;
    height: 60%;
  }
  .parent {
    display: flex;
    flex-direction: row !important;
  }
  .card {
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 600px) {
.t1,
  .t2,
  .t3 {
    display: flex;

    padding: 12px;
  }

  .t1 span,
  .t2 span,
  .t3 span {
    font-size: 10px !important;
    font-weight: bold;
    color: black !important;
  }

  .flexBox {
    display: flex;
    flex-wrap: wrap;
    width: 100% !important;
    gap: 10px;
    justify-content: space-around;
    padding: 0px 10px !important;
  }

  #apexcharts4aiykc58 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
