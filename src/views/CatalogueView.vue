<template>
  <section>
    <router-link v-for="article in articles" :to="'/article?id=' + article.id" :key="article.id">
      <div>
        <img :src="article.src" alt=""/>
        <p>{{ article.description }}</p>
      </div>
    </router-link>
  </section> 
</template>

<script>
import { useShopStore } from '../stores/shop.js'
import { mapState } from 'pinia'

export default {
  computed: {
    ...mapState(useShopStore, ['articles'])
  },
 
}
</script>

<style scoped>
section {
  padding: 10rem;
}
</style>

