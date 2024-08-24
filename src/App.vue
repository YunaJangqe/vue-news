<template>
  <div id="app">
    <!-- 케밥 케이스 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>    
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar // 파스칼 케이스
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active, .page-leave-active {
	transition: opacity .5s;
}
.page-enter, .page-leave-to {
	opacity: 0;
}
</style>