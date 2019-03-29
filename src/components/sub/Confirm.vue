<template>
  <div class="confirm-button">
    <button @click="getButtonClick">{{aaa || '确认'}}</button>
    <p> {{ bbb }}</p>
  </div>
</template>
<script>
  export default {
    name: 'confirm-button',
    props: ['aaa', 'bbb'],
    data () {
      return {
        msg1: '我是msg1',
        msg2: '我是msg2'
      }
    },
    methods:{
      getButtonClick(){
//        this.$emit('test1',this.msg1)
//        this.$emit('message',this.msg2)
      }
    }
  }
</script>