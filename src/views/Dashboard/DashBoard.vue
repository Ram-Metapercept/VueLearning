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
      <div class="imageClass">
        <img src="../../assets/users-vector-icon-png_260862-removebg-preview.png" alt="" :style="{ width: '70px', height: '70px',margin:'25px',display:'block',border:'50%' }">
      <span>
        Ram
      </span>
      </div>
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
        <RouterLink active-class="active" to="/">
          <a-menu-item key="4" class="alignment1">
            <div class="space">
            <user-outlined />
            <span class="nav-text">Profile</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="5" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined">
chat_bubble
</span>
            <span class="nav-text">Messages</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="6" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined">
bar_chart
</span>
            <span class="nav-text">Analytics</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="7" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined">
folder
</span>
            <span class="nav-text">File Manager</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="8" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined">
shopping_cart
</span>
            <span class="nav-text">Order</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="9" class="alignment1">
            <div class="space">
              <span class="material-symbols-outlined">
favorite
</span>
            <span class="nav-text">Saved</span>
            </div>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active" to="#">
          <a-menu-item key="10" class="alignment1">
            <div class="space">
              <setting-filled />
            <span class="nav-text">Setting</span>
            </div>
          </a-menu-item>
        </RouterLink>
      </a-menu>
    </a-layout-sider>
    <a-layout class="layOutMargin">
      <!-- Adjust the margin to your desired width -->
     
      <a-layout-header :style="{ background: '#fff', padding: 0 ,marginLeft: '120px'}">

        <div class="Searchbar">
  <SearchBar/>
  
  <span class="material-symbols-outlined" style="font-size: 34px;">
    notifications
  </span>
</div>


 
</a-layout-header>
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
import SearchBar from "../Dashboard/components/dashboard/SearchBar.vue"
import { ref } from "vue";
import UserDashBoard from "../Dashboard/components/dashboard/UserDashboard.vue";
import {
  UserOutlined,
  SettingFilled,

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
.material-symbols-outlined{
  font-size: 14px;
}
.space {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #D7E4EC!important;
}
.space:hover{
  color: white!important; 
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

:where(.css-dev-only-do-not-override-185kyl0).ant-layout .ant-layout-sider-zero-width-trigger {
  position: absolute;
  top: 22px !important;
  background-color: #1890ff;
  border:1px solid red
}

a.active router-link-exact-active{
  background-color:transparent !important;
}

.imageClass{
  margin-bottom: 40px;
  flex-direction: column !important;
  margin-left: 40px;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width:80px;
  height:80px;
  border-radius: 50%;
  background-color: white;
}

.Searchbar{
display: flex;
justify-content: flex-end;
  margin: 15px 30px 0px 30px;
}


</style>
