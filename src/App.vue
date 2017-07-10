<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition name="slide-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {},
    created() {

    },
    activated(){
      // this.scrollTop();
//            this.isLogin();
    },
    methods: {
      scrollTop(){
        document.body.scrollTop = 0;
      },
    },
    watch: {
      /*'$route'(to, from){
       if (to.path.contains('/grzy') && from.path.contains('/grzy')) {

       } else {
       this.scrollTop()
       }
       }*/
    }
  }
</script>

<style src="./res/css/index.css"></style>
<style>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    opacity: 0;
  }

  #app {
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
