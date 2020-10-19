<!--  -->
<template>
  <div class="clock">
    <div class="hour">
      <div class="hr" id="hr" ref="hr"></div>
    </div>
    <div class="min">
      <div class="mn" id="mn" ref="mn"></div>
    </div>
    <div class="sec">
      <div class="sc" id="sc" ref="sc"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clockTimer: null
    }
  },
  created () {
    this.initClock()
  },
  methods: {
    initClock () {
      const deg = 6
      // 定时器
      this.clockTimer = setInterval(() => {
        // 获取实时的时分秒
        const day = new Date()
        const hh = day.getHours() * 30
        const mm = day.getMinutes() * deg
        const ss = day.getSeconds() * deg

        // 计算时针、分针和秒针的度数（以0点为起始，Z轴为轴）
        this.$refs.hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
        this.$refs.mn.style.transform = `rotateZ(${mm + (ss / 60)}deg)`
        this.$refs.sc.style.transform = `rotateZ(${ss}deg)`
      })
    }
  },
  beforeDestroy () {
    clearInterval(this.clockTimer)
  }
}
</script>

<style scoped>
.clock {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../../assets/home/clock.png");
  background-size: cover;
  border: 4px solid #a4b0be;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);
}
.clock::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #000000;
  border-radius: 50%;
  z-index: 10000;
}
.clock .hour,
.clock .min,
.clock .sec {
  position: absolute;
}
.clock .hour,
.hr {
  width: 130px;
  height: 130px;
}
.clock .min,
.mn {
  width: 190px;
  height: 190px;
}
.clock .sec,
.sc {
  width: 230px;
  height: 230px;
}
.hr,
.mn,
.sc {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  border-radius: 50%;
}
.hr::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 70px;
  background: #1e90ff;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.mn::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: #ffa502;
  z-index: 11;
  border-radius: 6px 6px 0 0;
}
.sc::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 150px;
  background: #ff6b81;
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
</style>
