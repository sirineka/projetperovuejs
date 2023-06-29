<template>
    <section>
        <div class="img-overflow">
            <div class="img-card">
                <img :src="article.src">
            </div>
        </div>
            <p>{{article.description}}</p>
            <p>Marge de prix: {{article.prix}} $</p>
            <i class="fas fa-heart" :style="iconStyle" @click="ajouterAuxFavoris"></i>
        
       
    
    </section>
</template>
<script>
import {useShopStore} from '../stores/shop.js'
import {mapState} from 'pinia'
export default{
    props:{
       article:Object,
    },
 
    methods:{
        ajouterAuxFavoris: function(){
           const articleStore = useShopStore();
           //this.article.isFavorite = !this.article.isFavorite
           //ajouteraufavoris sans x celle de methods de stores shop.js
           //l'article est celle de la propriété de méthods de stores
           articleStore.ajouterAuFavoris(this.article)
          //event.target.style.color = 'red';
        },
  
        },
      computed: {
        iconStyle: function() {
        //récupère le tableau favoris du composant parent (navbar) 
        const favoris = this.$parent.favoris;
        return {
        //vérifier si au moins un élément du tableau favoris satisfait une condition donnée
        //rechercher un élément dans le tableau favoris dont id correspond à id de l'article 
        color: favoris.some(item => item.id === this.article.id) ? 'red' : 'black',
    };
  },
  
      ...mapState(useShopStore, ['favoris', 'articles'])
 
},
}


</script>
<style scoped>
p{
    font-weight: bold;
}
.img-overflow{
    overflow: hidden;
    display: flex;

}
.img-card img{
    width: 400px;
    transition: transform 1s ease-in-out;
}
/**.img-card:hover{
    transform: scale(1.5);
} */
.img-card img{
   border: .2em solid white;
   border-radius: 5%;
    
}
</style>