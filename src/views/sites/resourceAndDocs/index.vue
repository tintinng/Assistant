<!--  -->
<template>
    <div class="res-docs">
      <a-row :gutter="16">
        <a-col :span="6" v-for="site in siteList" :key="site.id">
          <div class="link-card">
            <a :href="site.link" target="_blank">
              <a-card
                :title="site.label"
                :bordered="true"
                class="card"
                :hoverable="true">
                <p>{{ site.content }}</p>
              </a-card>
            </a>
          </div>
        </a-col>
      </a-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      siteList: [
        { id: '1', label: 'MDN', link: 'https://developer.mozilla.org/zh-CN/', content: 'MDN中文文档' },
        { id: '2', label: 'JavaScript入门', link: 'https://wangdoc.com/javascript/index.html', content: '网道 JavaScript' },
        { id: '3', label: 'ES6入门', link: 'https://es6.ruanyifeng.com/', content: '网道 ES6' },
        { id: '4', label: 'Vue.js', link: 'https://cn.vuejs.org/', content: 'Vue.js文档' },
        { id: '5', label: 'ElementUI', link: 'https://element.eleme.cn/2.0/#/zh-CN', content: 'Element UI组件' },
        { id: '6', label: 'Antdv', link: 'https://www.antdv.com/docs/vue/introduce-cn/', content: 'Ant Design Vue组件' }
      ]
    }
  }
}

</script>

<style scoped>
.res-docs {
  background-color: #F5F6FC;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  padding: 20px;
}

.link-card {
  margin: 3% 0;
}

.card:hover {
  background: #E6F7FF;
  color: #1890FF;
  transform: translateY(-8px);
}

</style>
