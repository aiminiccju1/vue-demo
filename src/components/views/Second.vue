<template>
  <div class="second">
    222
    <hr>
    <p><router-link to="/first">去第111个页面</router-link></p>
  </div>

</template>
<script>
  export default {
    name:'Second',
    data () {
      return {
        info:'我是页面2'
      }
    }
  }
</script>