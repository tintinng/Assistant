<template>
  <a-layout id="layout-main">
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
    <a-layout-footer style="background: #001529;color: #ffffff;">
      Assistant Site ©2020 Created by Tintin
    </a-layout-footer>
  </a-layout>
</template>

<style>
#layout-main{
  background: #183952;
  height: 100vh;
  width: 100vw;
}
#layout-main .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

.header {
  text-align: left;
}

.main-content {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

.footer {
  text-align: center;
}

</style>
