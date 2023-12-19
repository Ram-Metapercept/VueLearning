<template>
  <div class="card-spacing">
    <a-row :gutter="[16, 16, 16, 16]">
      <div class="custom-statistic-2-wrapper">
        <div class="custom-statistic-2">
          <span
            class="material-symbols-outlined titleSpan"
            id="size-icon-on-card"
          >
            person
          </span>
          <a-col>
            <a-card class="custom-statistic">
              <div class="icon-oncard">
                <a-statistic
                  title="Total User"
                  :value="7.3"
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
        </div>
      </div>
      <div class="custom-statistic-2-wrapper">
        <div class="custom-statistic-2">
          <span
            class="material-symbols-outlined titleSpan"
            id="size-icon-on-card"
          >
            content_copy
          </span>
          <a-col>
            <a-card class="custom-statistic">
              <div class="icon-oncard">
                <a-statistic
                  title="Total Downloads"
                  :value="10.9"
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
        </div>
      </div>
      <div class="custom-statistic-2-wrapper">
        <div class="custom-statistic-2">
          <span
            class="material-symbols-outlined titleSpan"
            id="size-icon-on-card"
          >
            shopping_cart
          </span>
          <a-col>
            <a-card class="custom-statistic">
              <div class="icon-oncard">
                <a-statistic
                  title="Increase in Order"
                  :value="9"
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
        </div>
      </div>
      <div class="custom-statistic-2-wrapper">
        <div class="custom-statistic-2">
          <span
            class="material-symbols-outlined titleSpan"
            id="size-icon-on-card"
          >
            forum
          </span>
          <a-col>
            <a-card class="custom-statistic">
              <div class="icon-oncard">
                <a-statistic
                  title="Total Comments"
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
        </div>
      </div>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
</script>
<style scoped>

.values-on-card {
  display: block;
  margin: 0 auto;
}
#size-icon-on-card {
  font-size: 60px;
}
.icon-oncard {
  justify-content: flex-start !important;
  display: flex;
  align-items: center !important;
}

:where(.css-185kyl0).ant-card .ant-card-body {
border: none !important;
}
.title-on-card {
  background-color: aqua !important;
  flex-direction: column;
  display: flex;
  justify-content: center !important;
}

@media (max-width: 768px) {
  #size-icon-on-card {
    font-size: 40px;
  }
  .title-on-card {
    background-color: aqua;
    flex-direction: column;
    display: flex;
    justify-content: center !important;
  }
}

.custom-card {
  width: 300px; /* Set the width of the card as needed */
}

.custom-statistic {
  border:none;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0;
}

.custom-statistic-2-wrapper {
  width: 25%;
  padding: 10px;

  @media (max-width: 1440px) {
    width: 50%;
  }
  @media (max-width: 620px) {

    width: 100%;
  }
}
.custom-statistic-2 {
  overflow: hidden;
  display: flex;
  background-color: white;
  border-radius: 8px;


  @media (max-width: 620px) {

 
    width: 100%;
  }
}
.custom-statistic-2 .titleSpan {
  min-width: 111px;
  background-color: #A5B4FC;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 374px) {
    min-width: 60px;
  }
}

:where(.css-dev-only-do-not-override-185kyl0).ant-card-bordered {
  border: none !important;
}

:where(.css-dev-only-do-not-override-185kyl0).ant-col {
  max-width: calc(100% - 111px);
  width: calc(100% - 111px);

  @media (max-width: 375px) {
    max-width: calc(100% - 50px);
    width: calc(100% - 50px);
  }
}

:where(.css-dev-only-do-not-override-185kyl0).ant-row {
  row-gap: 0px ! important;
}
</style>
