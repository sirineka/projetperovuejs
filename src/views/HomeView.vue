<template>
  <main>
    <ImageComponent/>
    <SwiperComponent/>
    <VideoComponent title="Qui sommes nous?" video="../assets/video.mp4" :reversed="true">
      <p>description="led ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" </p>
    </VideoComponent>
    <VideoComponent title="Notre imagination" video="../assets/video.mp4">
      <p>description="led ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur" </p>
    </VideoComponent>

    <h1>Nouveautés</h1>
    <section class="new-card">
      <!--getShopArticle-->
    <NouveautesComponent
     v-for="article in articles" 
      :key="article.id" :article="article"
      
  
    /> 
    

    </section>
    
    

  </main>

</template>

<script>

import ImageComponent from '../components/ImageComponent.vue'
import NouveautesComponent from '../components/NouveautesComponent.vue';
import SwiperComponent from '../components/SwiperComponent.vue';
import VideoComponent from '../components/VideoComponent.vue';

import {useShopStore} from '../stores/shop.js'
import {mapState} from 'pinia'

  export default {
    name: "HomeView",
    components: {
    ImageComponent,
    SwiperComponent,
    NouveautesComponent,
    VideoComponent,
    
},
data(){
  return{
  
  }
},
    computed: {
      ...mapState(useShopStore, ['favoris', 'articles'])
    },

  }
</script>
<style scoped>
.new-card{
  margin: auto;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
  justify-content: center;
}
h1{
  text-align: center;
  text-decoration: underline;
}


</style>
