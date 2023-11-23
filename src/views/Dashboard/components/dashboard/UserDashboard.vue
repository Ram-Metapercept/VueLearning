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
        <div class="wrapper">
          <div class="strip1">
            <span>Growth Summary</span>
            <span class="material-symbols-outlined"> settings </span>
          </div>
          <Bar :data="data" :options="options" id="barchart" />
          <div class="t">
            <div class="t1">
              <span>Average $3456</span>

              <div class="parent">
                <div class="div2">
                  <span class="material-symbols-outlined"> moving </span>
                  <span>49%</span>
                </div>
              </div>
              <div></div>
            </div>

            <div class="t3">
              <span>Current Growth $2345</span>

              <div class="parent">
                <div class="div2">
                  <span class="material-symbols-outlined"> moving </span>
                  <span>56%</span>
                </div>
              </div>
              <div></div>
            </div>
            <div class="t3">
              <span>Previous Growth $8976</span>

              <div class="parent">
                <div class="div2">
                  <span class="material-symbols-outlined"> moving </span>
                  <span>45%</span>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="combine2">
        <!-- <div class="pieSpacing"> -->
          <div class="block1">
           
            <DonutChart></DonutChart>
           
          </div>
          <div class="block2" id="p2">
            <EarningReport/>
  

        </div>
   
 
   
      </div>
    </div>
  </div>
  <div class="cardAndTable"></div>
  <div class="fraction">
    <div class="fraction1">
      <div>
        <activity-card :activities="activityData" />
      </div>
    </div>
    <div class="fraction2">
      <div class="areaChart">
        <AreaChart></AreaChart>
      </div>
    </div>
    <div class="fraction3">
      <PieChart></PieChart>
    </div>
  </div>
  <div
    :style="{
      padding: '24px',
      background: '#fff',
 
      marginTop: '20px',
      overflowX: 'scroll',
    }"
  >
    <Table />
    <div class="pagination-bar">
    <a-pagination v-model:current="current" :total="50" show-less-items />
</div>
  </div>
</template>
 
<script>
import { Bar } from "vue-chartjs";
import * as chartConfig from "../dashboard/chartConfig"
import PolarChart from "./PolarChart.vue";
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
import { Radar } from 'vue-chartjs'
import Card from "./Card.vue";
import LineChart from "../dashboard/LineChart.vue";
import AreaChart from "./AreaChart.vue";
import { ref } from 'vue';
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
    PolarChart,
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
      chartLabels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],

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


.fraction {
  display: flex;
  width: 100%;
  height: 400px;
  gap: 20px;
  margin: 10px 0px !important;
}

.fraction1 {
  padding-left: 40px;
  min-height: 100%;
  padding-bottom: 50px;
  flex-direction: column !important;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}
.fraction2 {
    min-height: 100% !important;
}

/* For Webkit browsers like Chrome and Safari */
.fraction1::-webkit-scrollbar {
  width: 6px;
}
.cardAndTable{
  display: flex;
  flex-direction: column;
}
.areaChart {
   max-width: 500px !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-top: 30px !important;
}

.Highlight {
  font-weight: bold;
  margin-top: 30px !important;
  margin: 20px;
}

.fraction1,
.fraction2,
.fraction3 {
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  border-radius: 4px;
  width: 33% !important;
}

.parent {
  display: flex;
  flex-direction: row !important;
}

.wrapper {
    margin-top: 20px !important;
  margin-left: -0px;

  display: flex;
  flex-direction: column;

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
  height: 100% !important;

  background-color: white;

  border-radius: 5px;
}

.block1,
.block2,.block3 {

 
  margin: 10px 0px 0px 10px !important;
   padding: 5px!important;
  background-color: white !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px !important;
}

.block2{

  height:63vh !important;
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

.flexBox {
    margin-top: 10px !important;
  display: flex;
  justify-content: space-around;
   gap:10px !important;
  width: 100%;


}
.combine2{

display: flex !important;
flex-direction: column !important;

}
.card {
  border-radius: 4px;
  flex: 1;
  max-width: calc(25% - 20px) !important;
  /* 4 cards per row on large screens */

  @media (max-width: 1200px) {
    max-width: calc(25% - 20px) !important;
    /* 3 cards per row on medium screens */
  }

  @media (max-width: 768px) {
    max-width: calc(50% - 20px)!important;
    /* 2 cards per row on small screens */
  }

  @media (max-width: 480px) {
    max-width:  calc(100%) !important;
    /* 1 card per row on extra small screens */
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

.pagination-bar{
    display:flex;
    justify-content: flex-end !important;

}
@media only screen and (min-width: 1100px ) and (max-width:1280px ){
  .block2{
 
    height:52vh !important;
  }
  .block2{

    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    
    }
}

@media only screen and (min-width: 1100px ) {

  
   #barchart {
      width: 90% !important;
      margin: 0px;
      padding: 20px !important;
      background-color: white;
  
      border-radius: 5px;
    }
  }
  @media only screen and (max-width: 1100px) {
    .combine{
      display:flex;
      flex-direction: column;
    }

    .fraction1,
    .fraction2,
    .fraction3 {
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
      border-radius: 4px;
      width: 100% !important;
    }
  }
  
  @media only screen and (max-width: 991px) {

 
      .fraction {
          display: flex;
          justify-content: space-between;
          flex-direction: column !important;
        
          width: 100%;
          height: 400px;
          gap: 20px;
          margin-top: 10px;
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
  
      border-radius: 5px;
    }
  
    .wrapper .strip1 {
      width: 100%;
    }
  
    .pieSpacing {
      margin-left: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    .fraction {
        display: flex;
        justify-content: space-between;
        flex-direction:column !important;
      
        width: 100%;
        height: 400px;
        gap: 20px;
        margin-top: 10px;
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

  .fraction {
    display: flex !important;
    flex-direction: column !important;
  }
}



@media screen and (max-width: 600px) {
    .fraction1,
    .fraction2,
    .fraction3 {
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: flex;
      flex-direction: column;
      border-radius: 4px;
      width: 100% !important;
      height: 100% !important;
    }
    .t1,
    .t2,
    .t3 {
      display: flex;
      flex-direction: row;
  
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
  
      justify-content: space-around;
      padding: 0px 10px !important;
    }
  
    @media (max-width: 1200px) {
 
        }
  
    #apexcharts4aiykc58 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
