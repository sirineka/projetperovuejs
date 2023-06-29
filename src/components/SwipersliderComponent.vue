<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <!--on a fait copier le dossier assets dans public pourque bind ça marche-->
    <swiper-slide v-for="image in images" :key="image.id">
      <img :src="image.src"/>
    </swiper-slide>
  </swiper>
</template>

<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        images:[
          {
            id:1, 
            src: "./assets/image1.jpg",
          },
          {
            id:2, 
            src: "./assets/image2.jpg"
          },
          {
            id:3, 
            src: "./assets/image3.jpg"
          },
          {
            id:4, 
            src: "./assets/image4.jpg"
          },
          {
            id:5, 
            src: "./assets/image5.jpg"
          },
          {
            id:6, 
            src: "./assets/image6.jpg"
          }
        ]


      }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>
<style scoped>
.swiper-button-next, .swiper-button-prev{
  background: #c9c9e3;
  border-radius: 50%;
  color:black;
  padding: 2rem;
}
img{
  width: 100%;
}

</style>
