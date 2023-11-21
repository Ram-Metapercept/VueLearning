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
                    <Card title="Active Subscribers" value="500" label="Subscribers" icon="bell" />
                </a-col>
                <a-col :span="24" sm="12" md="8" lg="6" xl="6" class="card">
                    <Card title="Monthly Visits" value="10K" label="Visits" icon="chart-line" />
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

        </div>
        <div class="combine2">
            <div class="pieSpacing">
                <div class="block1">
                    <DonutChart></DonutChart>
                </div>
                <div class="block2" id="p2">
                    <LineChart width="100%" height="540" id="chart2" type="line" title="# of previous Votes" :labels="[
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange',
                'Pink',
                'Turquoise',
              ]" :data="[3, 14, 8, 25, 17, 10, 40, 56, 78, 34, 23, 45, 98, 67]" :border-color="'rgba(153, 102, 255, 1)'" border-width="2" fill="false"></LineChart>
                </div>
            </div>
        </div>
    </div>
</div>
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
<div :style="{
    padding: '24px',
    background: '#fff',
    minHeight: '100vh',
    marginTop: '20px',
    overflowX: 'scroll',
  }">
    <Table />

</div>
</template>

<script>
import {
    Bar
} from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import ActivityCard from "./ActivityCard.vue";
import PieChart from "./PieChart.vue";
import Table from "./Table.vue";
import DonutChart from "./DonutChart.vue";
import Card from "./Card.vue";
import LineChart from "../dashboard/LineChart.vue";
import AreaChart from "./AreaChart.vue";

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
            activityData: [{
                    date: '2020-04-28T00:07:00',
                    details: 'Responded to need “Volunteer Activities”'
                },
                {
                    date: '2020-04-28T00:07:00',
                    details: 'Responded to need “Volunteer Activities”'
                },
                {
                    date: '2020-04-21T20:01:00',
                    details: 'Added an interest “Volunteer Activities”'
                },
                {
                    date: '2020-04-17T09:23:00',
                    details: 'Joined the group “Boardsmanship Forum”'
                },
                {
                    date: '2020-04-11T17:10:00',
                    details: 'Responded to need “In-Kind Opportunity”'
                },
                {
                    date: '2020-04-07T12:47:00',
                    details: 'Created need “Volunteer Activities”'
                },
                {
                    date: '2020-04-05T15:09:00',
                    details: 'Attending the event “Some New Event”'
                },
                {
                    date: '2020-04-02T00:07:00',
                    details: 'Responded to need “In-Kind Opportunity”'
                },
            ],
            chartData: [65, 59, 90, 81, 56, 55, 40],
            chartLabels: [
                "Math",
                "English",
                "History",
                "Science",
                "Art",
                "Physical Education",
                "Music",
            ],
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
                datasets: [{
                    data: [40, 20, 12, 45, 67, 89, 45, 67, 89, 34, 76, 47],
                    backgroundColor: ["#0091D5", "#1C4E80"],
                    barPercentage: 0.8,
                    categoryPercentage: 0.7,
                }, ],
            },
            options: {
                responsive: true,
            },

            chartData: {
                labels: ["January", "February", "March", "April", "May"],
                datasets: [{
                    label: "Sample Data",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)",
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56],
                }, ],
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
@media screen and (max-width: 767px) {
    .card {
        margin-bottom: 10px;
    }

    .fraction {
        display: flex !important;
        flex-direction: column !important;
    }
}

.fraction {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 400px;
    gap: 20px;
    margin-top: 10px;
}

.fraction1 {
    padding-left: 40px;
    padding-bottom: 50px;
    flex-direction: column !important;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
}

/* For Webkit browsers like Chrome and Safari */
.fraction1::-webkit-scrollbar {
    width: 6px;
}

.areaChart {
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
    width: 50% !important;
}

.parent {
    display: flex;
    flex-direction: row;
}

.wrapper {
    margin-left: -0px;
    width: 100%;
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
.block2{
  width:100%!important;
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
    max-height: 200px;
    min-height: 200px;
    height: 200px;
    /* margin: 10px; */
    flex: 1;
    max-width: calc(25% - 20px) !important;
    /* 4 cards per row on large screens */

    @media (max-width: 1200px) {
        max-width: calc(33.33% - 20px) !important;
        /* 3 cards per row on medium screens */
    }

    @media (max-width: 768px) {
        max-width: calc(50% - 20px) !important;
        /* 2 cards per row on small screens */
    }

    @media (max-width: 480px) {
        max-width: 100% !important;
        /* 1 card per row on extra small screens */
    }
}

@media screen and (max-width: 600px) {

    .t1,
    .t2,
    .t3 {
        display: flex;
        flex-direction: row;

        padding: 15px;
    }

    .flexBox {
        display: flex;
        flex-wrap: wrap;
        width: 100% !important;

        justify-content: space-around;
        padding: 0px 10px !important;
    }

    .pieSpacing {
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        display: flex;
        flex-direction: row !important;
        justify-content: center;
        /* Stack blocks vertically on small screens */
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
