<template>
  <a-layout id="layout-main">
    <!-- 头部导航 -->
    <a-layout-header v-if="spPathes.indexOf(activeMenu) == -1" class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :selected-keys="[`${this.activeMenu}`]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/home">
          <router-link to="/home">Home</router-link>
        </a-menu-item>
        <a-menu-item key="/todo">
          <router-link to="/todo">Todo</router-link>
        </a-menu-item>
        <a-menu-item key="/sites">
          <router-link to="/sites">Sites</router-link>
        </a-menu-item>
        <a-menu-item key="/about">
          <router-link to="/about">About</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <!-- 主题内容区 -->
    <!-- <a-layout-content class="main-content"> -->
      <router-view></router-view>
    <!-- </a-layout-content> -->
    <!-- 底部区域 -->
    <a-layout-footer v-if="spPathes.indexOf(activeMenu) == -1" style="background: #001529;color: #ffffff;">
      Assistant Site ©2020 Created by Tintin
    </a-layout-footer>
  </a-layout>
</template>

<script>
const spPathes = [
  '/404',
  '/login'
]
export default {
  data: function () {
    return {
      // 特殊页面v-if判断不展示导航栏和底部
      spPathes
    }
  },
  computed: {
    activeMenu () {
      const route = this.$route
      const { path, meta } = route
      return meta.activeMenu ? meta.activeMenu : path
    }
  }
}
</script>

<style>
#layout-main{
  background: #ffffff;
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

/* .main-content {
  height: 100%;
  width: 100%;
} */

.footer {
  text-align: center;
}

</style>
