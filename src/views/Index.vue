<template>
    <div>
      <mt-button @click.native="handleClick">测试按钮</mt-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        components: {},
        computed: {},
        methods: {
          handleClick () {
            this.$toast('Hello world!')
          }
        },
        created () {
        },
        activated () {
        },
        deactivated () {
        }
    }
</script>
<style scoped>
</style>
