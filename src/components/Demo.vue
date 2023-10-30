<template>
    <a-layout>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <RouterLink active-class="active"  to="/">
          <a-menu-item key="1">
            <HomeOutlined />
            <span class="nav-text">Home</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active"  to="/register">
          <a-menu-item key="2">
            <video-camera-outlined />
            <span class="nav-text">Register</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active"  to="/login">
          <a-menu-item key="3">
            <LoginOutlined />
            <span class="nav-text">Sign In</span>
          </a-menu-item>
        </RouterLink>
        <RouterLink active-class="active"  to="/dashboard">
          <a-menu-item key="4">
            <user-outlined />
            <span class="nav-text">User Dashboard</span>
          </a-menu-item>
        </RouterLink>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff', minHeight: '100vh' }"><router-view></router-view> </div>
  
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { UserOutlined, VideoCameraOutlined, LoginOutlined,HomeOutlined } from '@ant-design/icons-vue';
  import { RouterLink } from 'vue-router';
  import { RouterView } from "vue-router";
  const onCollapse = (collapsed: boolean, type: string) => {
    console.log(collapsed, type);
  };
  
  const onBreakpoint = (broken: boolean) => {
    console.log(broken);
  };
  
  const selectedKeys = ref<string[]>(['4']);
  </script>
  <style scoped>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  
  .site-layout-sub-header-background {
    background: #fff;
  }
  
  .site-layout-background {
    background: #fff;
  }
  
  [data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
  }
  </style>
  