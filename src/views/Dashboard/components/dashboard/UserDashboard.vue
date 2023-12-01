<template>
  <div>
    <div style="background-color: #ececec; padding: 0px 20px">
      <CardStats />
    </div>
    <div style="background-color: #ececec; padding: 20px 20px 0px 20px">
      <a-row :gutter="16">
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 8, offset: 0, push: 0, pull: 0 }"
          :lg="{ span: 8, offset: 0, push: 0, pull: 0 }"
          :xl="{ span: 8, offset: 0, push: 0, pull: 0 }"
          style="margin-bottom: 16px"
        >
          <a-card
            title="Growth Chart"
            :bordered="false"
            style="height: 100%"
            class="card-height1"
          >
            <!-- Placeholder for Bar Chart -->

            <div class="areaChart">
              <AreaChart></AreaChart>
            </div>
          </a-card>
        </a-col>
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 8, offset: 0, push: 0, pull: 0 }"
          :lg="{ span: 8, offset: 0, push: 0, pull: 0 }"
          :xl="{ span: 8, offset: 0, push: 0, pull: 0 }"
          style="margin-bottom: 16px"
        >
          <a-card title="Earning Report" :bordered="false" class="card-height">
            <div class="donut-chart">
              <EarningReport />
            </div>
          </a-card>
        </a-col>
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 8, offset: 0, push: 0, pull: 0 }"
          :lg="{ span: 8, offset: 0, push: 0, pull: 0 }"
          :xl="{ span: 8, offset: 0, push: 0, pull: 0 }"
          style="margin-bottom: 16px"
        >
          <a-card
            title="Recent Activity Feed"
            :bordered="false"
            class="cardHeight"
          >
            <div class="child1">
              <activity-card :activities="activityData" />
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div style="background-color: #ececec; padding: 0 20px">
      <a-row :gutter="16">
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :lg="{ span: 12, offset: 0, push: 0, pull: 0 }"
          :xl="{ span: 14, offset: 0, push: 0, pull: 0 }"
          style="margin-bottom: 16px"
        >
          <a-card
            title="Growth Chart"
            :bordered="false"
            style="height: 100%"
            class="card-height"
          >
            <div
              style="height: 100%; background-color: #fff; margin-bottom: 16px;overflow-x:auto"
            >
              <Table />
            </div>
          </a-card>
        </a-col>
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :lg="{ span: 12, offset: 0, push: 0, pull: 0 }"
          :xl="{ span: 10, offset: 0, push: 0, pull: 0 }"
          style="margin-bottom: 16px"
        >
          <a-card
            title="Earning Report"
            :bordered="false"
            style="height: 100%"
            class="card-height"
          >
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
                    <div class="div1">$3468</div>
                  </div>
                  <div></div>
                </div>

                <div class="t2">
                  <span>Current Growth </span>

                  <div class="parent">
                    <div class="div1">$2345</div>
                  </div>
                  <div></div>
                </div>

                <div class="t3">
                  <span>Previous Growth</span>

                  <div class="parent">
                    <div class="div1">$8976</div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import StockChart from "./StockChart.vue";
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

import Table from "./Table.vue";
import AreaChart from "./AreaChart.vue";

import CardStats from "../dashboard/Cardstates.vue";

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
    StockChart,
    CardStats,
    EarningReport,
    Table,
    AreaChart,
    ActivityCard,
    Bar,
  },
  data() {
    return {
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

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [40, 20, 12, 45, 67, 89],
            backgroundColor: ["#0091D5", "#1C4E80"],
            barPercentage: 0.8,
            categoryPercentage: 0.7,
          },
        ],
      },
      options: {
        responsive: true,
      },

      series: [
        {
          name: "STOCK ABC",
          data: [100, 96, 56, 83, 45, 78, 43, 45],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
      },
    };
  },
};
</script>

<style scoped>

.donut-chart {
  min-height: 30vh !important;
  max-height: 30vh !important;
}
.child1 {
  width: 100%;
  padding: 0 40px;
  background-color: #fff;
  border-radius: 8px !important;
  max-height: 30vh !important;
  flex-direction: column !important;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.child1::-webkit-scrollbar {
  width: 6px;
}

.areaChart {
  max-height: 30vh !important;
  display: block !important;
  min-height: 30vh !important;
  height: 100% !important;
}

.parent {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px !important;
  flex-direction: row !important;
}

.wrapper {
  box-sizing: border-box;

  height: 100% !important;
  display: flex;
  flex-direction: column;

  background-color: white;

  border-radius: 8px;
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
  height: 30vh !important;

  background-color: white;

  border-radius: 8px;
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
  line-height: 1;
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

@media only screen and (max-width: 991px) {
  .areaChart {
    max-height: 30vh !important;
    display: block !important;
    min-height: 30vh !important;
    height: 100% !important;
  }
  
  .wrapper {
    width: 100%;
  }
  .wrapper .strip1 {
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .parent {
    display: flex;
    flex-direction: row !important;
  }
}

@media screen and (max-width: 600px) {
.donut-chart {
  min-height: 35vh !important;
  max-height: 35vh !important;
}
  .t1,
  .t2,
  .t3 {
    display: flex;

    padding: 12px;
  }
}


@media screen and (max-width: 400px) {
  .areaChart{
    min-height: 35vh !important;
  }
.donut-chart {
  min-height: 35vh !important;
  max-height: 35vh !important;
}
  .t1,
  .t2,
  .t3 {
    display: flex;

    padding: 12px;
  }
}
</style>
