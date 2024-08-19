<template>
  <div id="app">
    <!-- 케밥 케이스 -->
    <tool-bar></tool-bar>
    <router-view></router-view>    
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
</style>