<template>
  <v-carousel height="600px">
    <v-carousel-item light v-for="(photo,i) in photos"
    :key="i" :src="photo.src" >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default{
    props:['photos']
  }
</script>
