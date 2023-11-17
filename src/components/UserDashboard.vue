<template>
  <div>
    <h1 class="alignment1">
      <span class="material-symbols-outlined"> dashboard </span
      ><span>Dashboard</span>
    </h1>
    <div class="combine">
      <div class="combine1">
        <a-row gutter="6" class="flexBox">
          <!-- <a-col :span="6" class="card">
            <center>
              <h1 style="font-size: 54px; margin: 0 auto; padding: 10px">
                84K
              </h1>
              <h2 style="font-size: 16px; margin: 0 auto">56%</h2>
            </center>
          </a-col>

          <a-col :span="6" class="card">
            <center>
              <h1 style="font-size: 54px; margin: 0 auto; padding: 10px">
                34K
              </h1>
              <h2 style="font-size: 16px; margin: 0 auto">38%</h2>
            </center>
          </a-col>
          <a-col :span="6" class="card">
            <center>
              <h1 style="font-size: 54px; margin: 0 auto; padding: 10px">
                46K
              </h1>
              <h2 style="font-size: 16px; margin: 0 auto">10%</h2>
            </center>
          </a-col>
          <a-col :span="6" class="card">
            <center>
              <h1 style="font-size: 54px; margin: 0 auto; padding: 10px">
                46K
              </h1>
              <h2 style="font-size: 16px; margin: 0 auto">10%</h2>
            </center>
          </a-col> -->
          <!-- <div id="app"> -->
            <a-col :span="6" class="card" >
              <Card1 title="Total Users" value="1000" label="Users" icon="users" />
            </a-col>
            <a-col :span="6"  class="card" >
              <Card1 title="Revenue" value="$50K" label="USD" icon="dollar-sign" />
            </a-col>
            <a-col :span="6"  class="card" >
              <Card1 title="Active Subscribers" value="500" label="Subscribers" icon="bell" />
            </a-col>
            
            <a-col :span="6"  class="card" >
              <Card1 title="Monthly Visits" value="10K" label="Visits" icon="chart-line" />
            </a-col>
            
            
          <!-- </div> -->
        </a-row>

        <div class="wrapper">
          <div class="strip1">
            <span>Growth Summary</span>
            <span class="material-symbols-outlined"> settings </span>
          </div>
          <Bar :data="data" :options="options" id="barchart" />
        </div>
        <div class="t">
          <div class="t1">
            <span>Average $3456</span>

            <div class="parent">
              <div class="div2">
                <span class="material-symbols-outlined"> moving </span> 43%
              </div>
            </div>
            <div></div>
          </div>

          <div class="t3">
            <span>Current Growth $2345</span>

            <div class="parent">
              <div class="div2">
                <span class="material-symbols-outlined"> moving </span> 56%
              </div>
            </div>
            <div></div>
          </div>
          <div class="t3">
            <span>Previous Growth $8976</span>

            <div class="parent">
              <div class="div2">
                <span class="material-symbols-outlined"> moving </span> 45%
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="combine2">
        <div class="pieSpacing">
          <div class="block1">
            <DonutChart></DonutChart>
          </div>
          <div class="block2" id="p2">
            <Chart1
              width="100%"
              height="600"
              id="chart2"
              type="line"
              title="# of previous Votes"
              :labels="[
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange',
                'Pink',
                'Turquoise',
              ]"
              :data="[3, 14, 8, 25, 17, 10, 40, 56, 78, 34, 23, 45, 98, 67]"
              :border-color="'rgba(153, 102, 255, 1)'"
              border-width="2"
              fill="false"
            ></Chart1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="fraction">
   
    <div class="fraction1">
      <div class="scroll">
      <!-- <Card1 title="Total Users" value="1000" label="Users" icon="fas fa-users" /> -->
      <!-- <Card1 title="Total Users" value="1000" label="Users" icon="users" /> -->
      <!-- <RadarGraph :data="chartData" :labels="chartLabels" title="Performance"></RadarGraph> -->
      <activity-card :activities="activityData" />
    </div>
    </div>
    <div class="fraction2"><CardGraph/></div>
    <div class="fraction3"><PieChart></PieChart></div>
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
import ActivityCard from './ActivityCard.vue';
import PieChart from "./PieChart.vue";
import Table from "./Table.vue";
import Chart1 from "./Chart1.vue";
import DonutChart from "./DonutChart.vue";
import Card1 from "./Card1.vue";

// import {BIconArrowsAngleExpand} from 'bootstrap-vue';
import CardGraph from "./CardGraph.vue";
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
    // BIconArrowsAngleExpand,
    // StackChart,
    // RadarGraph,

    CardGraph,
    ActivityCard,
    Card1,
    Chart1,
    DonutChart,
    Table,
    PieChart,
    Bar,
  },
  data() {
    return {
      activityData: [
        { date: '2020-04-28T00:07:00', details: 'Responded to need “Volunteer Activities”' },
         { date: '2020-04-28T00:07:00', details: 'Responded to need “Volunteer Activities”' },
        { date: '2020-04-21T20:01:00', details: 'Added an interest “Volunteer Activities”' },
        { date: '2020-04-17T09:23:00', details: 'Joined the group “Boardsmanship Forum”' },
        { date: '2020-04-11T17:10:00', details: 'Responded to need “In-Kind Opportunity”' },
        // { date: '2020-04-07T12:47:00', details: 'Created need “Volunteer Activities”' },
        // { date: '2020-04-05T15:09:00', details: 'Attending the event “Some New Event”' },
        // { date: '2020-04-02T00:07:00', details: 'Responded to need “In-Kind Opportunity”' },
     
      ],
      chartData: [65, 59, 90, 81, 56, 55, 40],
      chartLabels: ['Math', 'English', 'History', 'Science', 'Art', 'Physical Education', 'Music'],
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
.fraction {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  gap: 20px;
  margin-top: 20px;
}
.fraction1 {
  overflow-y: auto;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: transparent transparent; /* For Firefox */
}

/* For Webkit browsers like Chrome and Safari */
.fraction1::-webkit-scrollbar {
  width: 6px; /* Adjust the width as needed */
}


.Highlight{
  font-weight: bold;
  margin-top: 30px !important;
  margin:20px;
}
.fraction1,
.fraction2,
.fraction3 {

  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  border-radius: 4px;
  width: 60%;
}

.parent {
  display: flex;
  flex-direction: row;
}
.alignment1 {
  display: flex;
  align-items: center;
}
.wrapper {
  margin-left: -0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center !important;

  background-color: white;

  border-radius: 5px;
}

a-card {
  margin-bottom: 20px;
}
.wrapper .strip1 {
  border-radius: 4px;
  display: flex;
  width: 100%;
  height: 50px;
  font-weight: 700;
  background-color: lightgrey;
  justify-content: space-between !important;
  padding: 0 30px !important;
}
.wrapper .strip1 span {
  margin-top: 15px !important;
}
#barchart {
  width: 100% !important;
  margin: 0px;

  background-color: white;

  border-radius: 5px;
}
.block1,
.block2 {
  margin: 10px !important;
  background-color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px !important;
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
    width: 90% !important;
    margin: 0px;
    padding: 20px !important;
    background-color: white;

    border-radius: 5px;
  }
}
@media only screen and (max-width: 991px) {
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

    border-radius: 5px;
  }
  .wrapper .strip1 {
    width: 100%;
  
    border: 1px solid red !important;
  }
  .pieSpacing {
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
}
#app {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.combine {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.combine1 {

  width: 70%;
}
.combine2 {
  width: 30%;
}
.flexBox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding: 0px 10px !important;
}
.card {
 
  border-radius: 4px;
  height: 150px;
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
  .flexBox {
    display: flex;
    flex-wrap: wrap;
    width: 100% !important;
    justify-content: space-around;
    padding: 0px 10px !important;
  }
  /* Adjust styles for smaller screens */
  .pieSpacing {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: row !important;
    justify-content: center; /* Stack blocks vertically on small screens */
    align-items: center;
  }

  #apexcharts4aiykc58 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.t {
  border-top: 1px solid lightgray;
  background-color: #fff;
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



</style>
