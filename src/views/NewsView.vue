<template>
  <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        | {{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>        
      </small>
    </p>
  </div>
</template>

<script>
//import { fetchNewsList } from '../api/index.js';

export default {
  // data() {
  //   return {
  //     users: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;
    // fetchNewsList()
    // .then(function(response){
    //   console.log(response);
    //   vm.users = response.data;
    // })
    // .catch(function(error){
    //   console.log(error);
    // })
  }
}
</script>

<style>

</style>