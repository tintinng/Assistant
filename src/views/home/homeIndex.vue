<!--  -->
<template>
  <div id="layout-home">
    <a-layout style="background: #ffffff;">
      <a-layout-sider width='40vw'>
        <clock></clock>
      </a-layout-sider>
      <a-layout class="home-main">
        <!-- <a-layout-header>Header</a-layout-header>
        <a-layout-content></a-layout-content>
        <a-layout-footer>Footer</a-layout-footer> -->
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Clock from './clock/clock'
export default {
  components: {
    Clock
  }
}

</script>

<style scoped>
.layout-home{
  text-align: center;
}
#layout-home .ant-layout-header,
#layout-home .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#layout-home .ant-layout-footer {
  background:  #7dbcea;
}
#layout-home .ant-layout-sider {
  background:  #ffffff;
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 0;
}
#layout-home .home-main {
  width: 60vw;
  background: inherit;
  /* border-radius: 5%; */
  /* margin: 1%; */
}
#layout-home .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
}
</style>
