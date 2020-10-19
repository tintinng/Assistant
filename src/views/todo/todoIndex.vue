<!--  -->
<template>
  <div>
    <a-layout style="background: inherit;padding: 3% 3%">
      <a-layout-sider style="background: inherit; padding: 0">
        <a-menu
          theme="light"
          mode="inline"
          :default-selected-keys="['1']"
          class="todo-menu"
          :inlineIndent = 12
        >
          <a-menu-item key="1">
            <router-link to="/todo/todoList">待办清单</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/todo/learningSchedule">学习计划</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="todo-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
}

</script>

<style scoped>
.todo-menu {
  width: 150px;
  border-radius: 5%;
  /* background: #f1f2f6; */
}
.todo-content {
  /* border: 2px solid gray; */
  height: 70vh;
}
</style>
