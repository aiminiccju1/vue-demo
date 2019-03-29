<template>
  <div class="first-app">
    {{msg}}
    <confirm aaa="注册" bbb="haha" @message="getMesage" @test1="getTest1"></confirm>
    <hr>
    <p>
      <router-link to="/second">去第二个页面</router-link>
    </p>
  </div>
</template>
<script>
import Confirm from '../sub/Confirm'
export default {
  name: 'First',
  components: {
    Confirm
  },
  data () {
    return {
      msg: '我是页面一   1111'
    }
  },
  methods: {
    getMesage (val) {
      alert(val)
    },
    getTest1 (val) {
      alert(val)
    }
  }
}
</script>
