<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="position: fixed; height: 100vh; z-index: 1000"
    >
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <RouterLink active-class="active" to="/dashboard">
          <a-menu-item key="1" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined"> dashboard </span>
              <span class="nav-text">Dashboard</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="2" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined"> corporate_fare </span>
              <span>Organisations</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="3" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined"> subscriptions </span>
              <!-- <LoginOutlined /> -->
              <span>Subscription</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="4" class="alignment1">
            <user-outlined />
            <span class="nav-text">Profile</span>
          </a-menu-item>
        </RouterLink>
      </a-menu>
    </a-layout-sider>
    <a-layout class="layOutMargin">
      <!-- Adjust the margin to your desired width -->
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ marginLeft: '150px' }" class="navigation1">
        <UserDashBoard />
      </a-layout-content>
      <a-layout-footer style="text-align: center" class="footer">
        <p>&copy; 2023 Metapercet. All rights reserved.</p>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import UserDashBoard from "../components/UserDashboard.vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
import { RouterLink } from "vue-router";

const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

const selectedKeys = ref<string[]>(["1"]);
</script>
<style scoped>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.footer {
  background-color: #1890ff;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

.space {
  display: flex;
  align-items: center;
  gap: 5px;
}
.alignment1 {
  display: flex;
  align-items: center;
}
[data-theme="dark"] .site-layout-sub-header-background {
  background: #141414;
}

.layOutMargin {
  margin-left: 80px  !important;
}

@media only screen and (max-width: 912px) {
  .navigation1 {
    margin-left: 0px !important;
    display: flex;
    flex-direction: column !important;
  }
  .layOutMargin {
    margin-left:0px  !important;
  }
  
}
</style>
