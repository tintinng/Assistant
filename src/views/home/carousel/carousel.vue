<!--  -->
<template>
  <div class="home-main">
    <div class="home-carousel">
        <a-carousel :after-change="onChange" >
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </a-carousel>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange (a, b, c) {
      console.log(a, b, c)
    }
  }
}
</script>

<style scoped>
/* For demo */
.home-main {
    position: relative;
    height: 90vh;
    background: #ffffff;
}

.home-carousel {
    margin: 5%;
}

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 72vh;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
