<template>
  <v-carousel height="600px">
    <v-carousel-item light v-for="(item,i) in items"
    :key="i" :src="item.src" >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default{
    data(){
      return{
        photos:[
          {src:require("@/assets/image41.png")},
          {src:require("@/assets/image42.png")},
          {src:require("@/assets/image43.png")},
          {src:require("@/assets/image44.png")}
        ]

      }
    }
  }
</script>
