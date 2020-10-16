<template>
  <a-layout id="components-layout-demo-top-side">
    <!-- 头部导航 -->
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/todo">Todo</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/sites">Sites</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/about">About</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <!-- 主题内容区 -->
    <a-layout-content class="main-content">
      <router-view></router-view>
    </a-layout-content>
    <!-- 底部区域 -->
    <a-layout-footer class="footer">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

.header {
  background: #ffffff;
  text-align: left;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 95vw;
  margin: 1% auto;
  background: lightblue;
}

.footer {
  text-align: center;
}

</style>
