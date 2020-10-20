<!--  -->
<template>
  <div>
      <main>
          <div class="container">
              <!-- 输入框
                1、传递添加组件当前todos长度，用作下一个todo的id
                2、监听add-todo，添加组件的消息
              -->
              <todo-add :tid="todos.length" @add-todo="addTodo" />
              <!-- 筛选
                1、传递当前筛选选项，默认为all
                2、监听change-filter，筛选子组件的消息
              -->
              <todo-filter :selected="filter" @change-filter="filter = $event"></todo-filter>
              <!-- 列表 -->
              <todo-list :todos="filterTodos"></todo-list>
          </div>
      </main>
  </div>
</template>

<script>
import TodoAdd from './todaAdd'
import TodoFilter from './todoFilter'
import TodoList from './todoList'

export default {
  components: {
    TodoAdd,
    TodoFilter,
    TodoList
  },
  data () {
    return {
      // 当前过滤状态
      filter: 'all',
      // 所有的todos
      todos: []
    }
  },
  computed: {
    // 计算属性，返回过滤后的todos
    filterTodos () {
      switch (this.filter) {
        case 'done':
          return this.todos.filter((todo) => todo.completed)
        case 'todo':
          return this.todos.filter((todo) => !todo.completed)
        default:
          return this.todos
      }
    }
  },
  methods: {
    // 处理添加todo子组件的消息
    addTodo (todo) {
      this.todos.push(todo)
    }
  }
}

</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica, "PingFang SC", "Microsoft Yahei",sans-serif;
}

/* 整个页面 */
main {
    width: 100%;
    /* min-height: 100vh; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
}

.container {
    width: 100%;
    /* max-width: 400px; */
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
    /* border-radius: 24px; */
    padding: 48px 28px;
    background-color: rgb(245, 246, 252);
}
</style>
