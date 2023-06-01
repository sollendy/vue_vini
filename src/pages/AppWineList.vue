<script>
import axios from 'axios';
import WineCard from "../components/WineCard.vue";
export default {
    name: "AppWineList",
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/wines",
            wines: [],
        }
    },
    components: {
        WineCard,
    },

    mounted() {
        this.getWines(this.apiUrl);
    },

    methods: {
        getWines(apiUrl) {
            axios.get(apiUrl).then(response => {
                console.log(response.data.results);
                this.wines = response.data.results;
            });
        }
    }
}
</script>

<template>
    <h1>Benvenuto nella lista vini</h1>
  
    <div class="container py-">
      <div class="text-center w-75 mx-auto d-flex justify-content-between row">
        <div v-for="wine in wines" class="col-4 mb-5">
          <WineCard :wine="wine"></WineCard>
        </div>
      </div>
    </div>
  
    <div class="my-flex">
      <router-link :to="{ name: 'home' }">Homepage</router-link>
      <!-- <router-link :to="{ name: 'AboutUs' }">About Us</router-link> -->
    </div>
  </template>
  
  <style scoped lang="scss">
  .my-flex {
    display: flex;
    flex-direction: row;
    gap: 2em;
  }
  
  
  </style>