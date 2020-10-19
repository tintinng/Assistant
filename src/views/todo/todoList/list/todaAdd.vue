<!--  -->
<template>
    <div class="input-add">
        <input type="text" name="todo" v-model="todoContent" @keyup.enter="emitAddTodo">
        <button @click="emitAddTodo">
            <i class="plus"></i>
        </button>
    </div>
</template>

<script>
export default {
  name: 'TodoAdd',
  props: {
    tid: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      todoContent: ''
    }
  },
  methods: {
    // 添加一条todo
    emitAddTodo () {
      const todo = {
        id: this.$props.tid,
        content: this.todoContent,
        completed: false
      }
      // 传递给父组件add-todo处理
      this.$emit('add-todo', todo)
      this.todoContent = ''
    }
  }
}

</script>

<style scoped>
/* 添加框 */
.input-add {
    position: relative;
    display: flex;
    align-items: center;
}

.input-add input {
    padding: 16px 52px 16px 18px;
    border-radius: 48px;
    border: none;
    outline: none;
    box-shadow: 0 0 24 rgba(0, 0, 0, 0.08);
    width: 100%;
    font-size: 16px;
    color: #626262;
}

.input-add button {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: linear-gradient(#70a1ff, #3742fa);
    border: none;
    outline: none;

    color: white;
    position: absolute;
    right: 0px;

    cursor: pointer;
}

.input-add .plus {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(#ffffff, #ffffff), linear-gradient(#ffffff, #ffffff);
    background-size: 50% 2px, 2px 50%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
