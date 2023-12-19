<template>
  <div>
    <div style="background-color: #ececec; padding: 0px 20px">
      <WelcomeBanner/>
      <DashboardAvtar/>
      <CardStats />
    </div>
    <div style="background-color: #ececec; padding: 10px 20px 0px 20px">
      <a-row :gutter="16">
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 24, offset: 0, push: 0, pull: 0 }"
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
            <div class="areaChart">
              <AreaChart></AreaChart>
            </div>
          </a-card>
        </a-col>
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 24, offset: 0, push: 0, pull: 0 }"
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
          :md="{ span: 24, offset: 0, push: 0, pull: 0 }"
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
          :lg="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :xl="{ span: 14, offset: 0, push: 0, pull: 0 }"
          style="margin-bottom: 16px"
        >
          <a-card
       
            :bordered="false"
            style="height: 100%"
            class="card-height"
          >
            <div
              style="
                height: 100%;
                background-color: #fff;
                margin-bottom: 16px;
                overflow-x: auto;
              "
            >
              <Table />
            </div>
          </a-card>
        </a-col>
        <a-col
          :xs="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :sm="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :md="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :lg="{ span: 24, offset: 0, push: 0, pull: 0 }"
          :xl="{ span: 10, offset: 0, push: 0, pull: 0 }"
          style="margin-bottom: 16px"
        >
          <a-card
           
            :bordered="false"
            style="height: 100%"
            class="card-height"
          >
            <div >
        <BarChart/>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import DashboardAvtar from "../dashboard/DashboardAvatars.vue"


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
import BarChart from "./BarChart.vue"
import EarningReport from "./EarningReport.vue";
import ActivityCard from "./ActivityCard.vue";
import WelcomeBanner from "../dashboard/WelcomeBanner.vue"
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
    DashboardAvtar,
    WelcomeBanner,

    CardStats,
    EarningReport,
    Table,
    AreaChart,
    ActivityCard,

    BarChart,
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
    options: {
        responsive: true,
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

@media only screen and (max-width: 991px) {
  .child1 {
    width: 100%;
    padding: 0 25px;
    background-color: #fff;
    border-radius: 8px !important;
    max-height: 30vh !important;
    flex-direction: column !important;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
}
@media screen and (max-width: 600px) {
 .donut-chart {
    min-height: 35vh !important;
    max-height: 35vh !important;
  }

}
@media screen and (max-width: 400px) {
.donut-chart {
    min-height: 35vh !important;
    max-height: 35vh !important;
  }
}
</style>
