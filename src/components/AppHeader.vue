<script>
export default  {
  name: "AppHeader",
  data() {
    return {

    }
  }
}

</script>

<template>
    <nav class="d-flex mx-3 gap-3">
      <router-link :to="{ name: 'home' }">home</router-link>
      <router-link :to="{ name: 'wines' }">vini</router-link>
    </nav>
</template>

<style scoped lang="scss">

</style>
