<template>
  <div v-title="pageTitle" id="app">
    <div class="smile">:(</div>
    <div class="tip">找不到页面</div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'

export default {
  name: 'app',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      pageTitle: '404'
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
  padding: 50px 20px;
  text-align: center;
  font-size: 14px;
  line-height: normal;
}
.smile {
  font-size: 40px;
  font-weight: bold;
  margin: 10px 0
}
.tip {
  font-size: 16px;
  margin: 10px 0
}

</style>
