<template>
    <main>
      <ConnectionComponent/>
      <MapComponent/>
    </main>
  
  </template>
  <script>
  
  import ConnectionComponent from '../components/ConnectioComponent.vue'
import MapComponent from '../components/MapComponent.vue';
  export default{
    components: {
    ConnectionComponent,
    MapComponent
}
  
  }
  </script>
  <style scoped>
  </style>
  