<template>
  <NavbarComponent/>
  <RouterView />
</template>
<script>
import NavbarComponent from './components/NavbarComponent.vue';
export default{
  components:{
    NavbarComponent,
  }
}
</script>


<style scoped>
  section {
    cursor: pointer;
  }
</style>
