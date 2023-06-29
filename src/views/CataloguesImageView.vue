<template>
    <section>
        <h1>Page produit</h1>
        <router-link to="/catalogue">Retour au catalogue</router-link>
        <div v-if="article">
            <p>{{ article.description }}</p>
            <div class="image">
                <img :src=article.src alt="">
            </div>
        </div>
    </section>
</template>

<script>
import { useShopStore } from '../stores/shop.js'
import { mapState } from 'pinia'

export default {
    
    computed: {
        ...mapState(useShopStore, ['articles']),

        article: function() {
        return this.articles.find(
       (article) => article.id === parseInt(this.$route.query.id)
    )
  },
   
    }
}
</script>

<style scoped>
section {
    padding: 10rem;
}
</style>

