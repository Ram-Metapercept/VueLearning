<template>
  <div class="card-spacing">
    <a-row :gutter="[16, 16, 16, 16]">
      <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
        <a-card class="custom-statistic">
          <div class="icon-oncard">
            <span class="material-symbols-outlined" style="font-size: 60px">
              person
            </span>
            <a-statistic
              title="Total Member"
              :value="10.9"
              :precision="2"
              suffix="%"
              class="values-on-card"
              :value-style="{ color: '#3f8600' }"
            >
              <template #prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
          </div>
          <div></div>
        </a-card>
      </a-col>
      <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
        <a-card class="custom-statistic">
          <div class="icon-oncard">
            <span class="material-symbols-outlined" style="font-size: 60px">
              content_copy
            </span>
            <a-statistic
              title="Total Post"
              :value="12.8"
              :precision="2"
              suffix="%"
              class="values-on-card"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <arrow-down-outlined />
              </template>
            </a-statistic>
          </div>
          <div></div>
        </a-card>
      </a-col>
      <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
        <a-card class="custom-statistic">
          <div class="icon-oncard">
            <span class="material-symbols-outlined" style="font-size: 60px">
              forum
            </span>
            <a-statistic
              title="Total Comment"
              :value="12.6"
              :precision="2"
              suffix="%"
              class="values-on-card"
              :value-style="{ color: '#3f8600' }"
            >
              <template #prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
          </div>
          <div></div>
        </a-card>
      </a-col>
      <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
        <a-card class="custom-statistic">
          <div class="icon-oncard">
            <span class="material-symbols-outlined" style="font-size: 60px">
              shopping_cart
            </span>
            <a-statistic
              title="Increase in Order"
              :value="7.9"
              :precision="2"
              suffix="%"
              class="values-on-card"
              :value-style="{ color: '#3f8600' }"
            >
              <template #prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
          </div>
          <div></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
</script>
<style scoped>
.card-spacing {
  padding: 20px 0px 0px 0px !important;
}
.values-on-card {
  display: block;
  margin: 0 auto;
}

.icon-oncard {

  justify-content:flex-start !important;
  display: flex;
  align-items: center !important;
}
.title-on-card {
  background-color: aqua !important;
  flex-direction: column;
  display: flex;
  justify-content: center !important;
}

@media (max-width: 1400px) and (min-width:992px) {
  .custom-statistic::before {

    opacity: 0.5;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 45% !important; /* Set the percentage of the card you want to be green */
    background-color: #87d068; /* Set the green color */
  }
}





@media (max-width: 768px) {
  .title-on-card {
    background-color: aqua;
    flex-direction: column;
    display: flex;
    justify-content: center !important;
  }
  .card-spacing {
    padding: 10px 0px 0px 0px !important;
  }
}

.custom-card {
  width: 300px; /* Set the width of the card as needed */
}

.custom-statistic {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.custom-statistic::before {

  opacity: 0.5;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 30%; /* Set the percentage of the card you want to be green */
  background-color: #87d068; /* Set the green color */
}
</style>
