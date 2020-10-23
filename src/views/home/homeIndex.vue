<!--  -->
<template>
  <div id="layout-home">
    <a-layout style="background: #ffffff;">
      <a-layout-sider width='30vw'>
        <clock></clock>
      </a-layout-sider>
      <a-layout class="home-main">
        <carousel></carousel>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Clock from './clock/clock'
import Carousel from './carousel/carousel'
export default {
  components: {
    Clock,
    Carousel
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
  padding: 4% 0;
}
</style>
