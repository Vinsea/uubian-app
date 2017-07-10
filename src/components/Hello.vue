<template>
  <div class="hello">
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      handleClick () {
        this.$toast('Hello world!')
      }
    },
  }
</script>

<style scoped>

</style>
