<script>
export default {
    name: 'WineCard',

    data() {
        return {
            imgUrl: 'http://127.0.0.1:8000/',
        }
    },

    props: {
        wine: Object,
    },

    computed: {

        // shortContent() {
        //     if (this.wine.description.length > 30) {
        //         return this.wine.description.substring(0, 30) + '...';
        //     } else {
        //         return this.wine.description;
        //     }
        // },

        // cover() {
        //     if (this.wine.cover_image == null) {
        //         return 'https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg';
        //     } else {
        //         return this.imgUrl + 'storage/' + this.wine.cover_image;
        //     }
        // },
    }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="img-container">
            <img src="https://objectstorage.eu-milan-1.oraclecloud.com/n/axl3hgtiszxy/b/Bucket-CRAI-IMG-PROD/o/images/catalog/eg-0015351/eg-0015351_5_big.jpg" class="cover-img card-img-top" alt="img">
        </div>
        <div class="card-body">
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
.cover-img {
    height: 200px;
    object-fit: cover;
    object-position: center;
}

.my-tech-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
}
</style>