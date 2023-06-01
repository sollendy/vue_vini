<script>
import AppHeader from "./components/AppHeader.vue";
//import AppMain from './components/AppMain.vue';

export default{
  name: 'App',

  data(){
    return{
      
    }
  },

  components:{
    AppHeader,
    //AppMain,
  },  
}

</script>

<template>
  <!-- <h1>ciao</h1> -->
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style scoped lang="scss">

</style>