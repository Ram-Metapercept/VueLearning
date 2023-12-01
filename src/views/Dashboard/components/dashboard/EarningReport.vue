<template>
  <div class="parentDonut">
    <div class="earnings-card">
      <div class="chart-container">
        <canvas ref="monthlyChart"></canvas>
      </div>
      <div class="chart-label">
        <span>
          <div
           
          >
          <div class="title-with-value">
          <div class="title-with-hints">
            <span
              style="
              display: inline-block;
                border-radius: 50%;
                width: 3px;
                height: 3px;
                background-color: cyan;
                padding: 5px;
              "
            ></span>
            <strong class="title-on-Earning-Report">Monthly Revenue </strong>
          </div>
          <p >$5,523</p>
        </div>
     
        </div>
        </span>
        <span>
          <div
           
          >
          <div class="title-with-value">
          <div class="title-with-hints">
            <span
              style="
              display: inline-block;
                border-radius: 50%;
                width: 3px;
                height: 3px;
                background-color: #FF6384;
                padding: 5px;
              "
            ></span>
            <strong class="title-on-Earning-Report">Monthly Earning </strong>
          </div>
          <p >$5,523</p>
        </div>
     
        </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    this.renderCharts();
  },
  methods: {
    renderCharts() {
      const monthlyCtx = this.$refs.monthlyChart.getContext("2d");
      new Chart(monthlyCtx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [21235, 30000 - 21235],
              backgroundColor: ["#FF6384", "cyan"],
            },
          ],
        },
        options: {
          cutout: "80%",
        },
      });
    },
  },
};
</script>

<style scoped>
.chart-container {
  display: block;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  max-width: 20vh;
  max-height: 20vh;
  text-align: center;
}
.title-with-value{
  text-align: center;
}

.chart-label {
  gap: 10px;

  display: flex;
  justify-content: space-between !important;
  flex-direction: row;

  font-size: 20px;
  margin-top: 1rem;
}
.full-title{
  display: flex;
  justify-content: center;
  align-items: center;
}
.earnings-text {
  text-align: center;
}
.title-on-Earning-Report{
  line-height: 1;
}
@media (max-width: 768px) {
  .chart-label {
    gap: 0px;
  
   
  }
  .chart-label {
    flex-direction: column;
    display: flex;
    margin-top: 0.5rem;
    justify-content: flex-start !important;
    font-size: 15px;
  }
  .earnings-card {
    flex-direction: column !important;
    display: flex;

    justify-content: flex-start !important;
  }
}
.parentDonut {
  display: flex;
  justify-content: center !important;
  align-items: center;
}
</style>
