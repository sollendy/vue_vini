<script>
import axios from 'axios';

export default {
    name: 'AppShow',

    data() {
        return {
            wine: {},
            wineId: '',
            isLoading: true,
            wineFound: false,
            // imgUrl: 'http://127.0.0.1:8000/',
        }
    },

    mounted() {
        console.log(this.$route);
        this.wineId = this.$route.params.id;
        this.getWine();
    },

    computed:{

    },

    methods: {
        getWine() {
            axios.get('http://127.0.0.1:8000/api/wines/' + this.wineSlug).then(res => {
                if (res.data.success) {

                    this.wine = res.data.wine;
                    this.wineFound = true;
                    this.isLoading = false;
                } else {
                    this.wineFound = false;
                    this.isLoading = false;
                }
            })
        }
    }
}
</script>

<template>
    <div class="" style="width: 18rem;">
        <div class="img-container">
            <img src="https://objectstorage.eu-milan-1.oraclecloud.com/n/axl3hgtiszxy/b/Bucket-CRAI-IMG-PROD/o/images/catalog/eg-0015351/eg-0015351_5_big.jpg" class="cover-img card-img-top" alt="img">
        </div>
        <div class="d-flex flex-column">
            <h5 class="card-title">{{ wine.name }}</h5>
            <small>Anno: {{ wine.year}}</small>
            <br>
            <small>Colore: {{ wine.color }}</small>
            
            <div class="text-center py-3">
                <!-- <router-link :to="{name: 'wineShow', params:{slug: wine.slug}}" class="btn btn-outline-danger">Apri Progetto</router-link> -->
            </div>


        </div>
    </div>
</template>

<style scoped lang="scss">
.img-container{
    height: 400px;
    object-fit: cover;

    img{
        height: 100%;
    }
}
</style>