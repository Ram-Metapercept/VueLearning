<template>
    <div class="card-spacing">
      <a-row :gutter="[16, 16, 16, 16]">
        <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
          <a-card>
            <a-statistic class="title-on-card"
              title="Active Users"
              :value="14.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
            >
              <template #prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
          <a-card>
            <a-statistic
              title="Revenue"
              :value="2.3"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <arrow-down-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
          <a-card>
            <a-statistic
              title="Monthly Visits"
              :value="9.3"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#3f8600' }"
            >
              <template #prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="24" :md="{ span: 12 }" :lg="{ span: 6 }">
          <a-card>
            <a-statistic
              title="Idle"
              :value="10.9"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <arrow-down-outlined />
              </template>
            </a-statistic>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
  </script>
  <style scoped>
  .card-spacing{
    padding:20px 0px 0px 0px !important;
  }

  @media (max-width: 768px) {
    .title-on-card{
 
      flex-direction: column;
      display: flex;
      justify-content: center !important;
    }
    .card-spacing{
      padding:10px 0px 0px 0px !important;
    }
  }
</style>