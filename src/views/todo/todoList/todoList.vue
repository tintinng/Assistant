<!--  -->
<template>
  <div>
      <a-col :span="16">
        <list></list>
      </a-col>
      <a-col :span="8">
        <div class="todo-calendar">
          <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
        </div>
      </a-col>
  </div>
</template>

<script>
import List from './list/index'
export default {
  components: {
    List
  },
  methods: {
    onPanelChange (value, mode) {
      console.log(value, mode)
    }
  }
}

</script>

<style scoped>
.todo-calendar {
  /* display: inline-block; */
  border-radius: 10px;
  width: 400px;
  height: 320px;
  border: none;
  outline: none;
  box-shadow: 0 0 24 rgba(0, 0, 0, 0.08);
  background-color: #f4f7fc;
  float: right;
  position: fixed;
  margin: 0 1%;
}
</style>
