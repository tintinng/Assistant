<!--  -->
<template>
  <div>
    <a-layout style="background: inherit;padding: 3% 3%">
      <a-layout-sider style="background: inherit; padding: 0">
        <a-menu
          theme="light"
          mode="inline"
          :default-selected-keys="['1']"
          class="sites-menu"
          :inlineIndent = 12
        >
          <a-menu-item key="1">
            <router-link to="/sites/resourceAndDocs">参考文档</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/sites/devCommunity">社区门户</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/sites/devCommunity">设计资源</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="sites-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  mounted () {

  }
}

</script>

<style scoped>
.sites-menu {
  width: 150px;
  border-radius: 5%;
  /* background: #f1f2f6; */
}
.sites-content {
  /* border: 2px solid gray; */
  height: 70vh;
}
</style>
