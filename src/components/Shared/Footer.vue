<template>
    <v-footer dark height="auto">

      <v-card
     class="flex"
     flat
     tile
   >
     <v-card-title class="transparent white--text">

       <v-spacer></v-spacer>
      <v-btn v-for="icon in icons"
        :key="icon" class="mx-3" dark icon
        :href="icon.link" target="_blank">
        <v-icon >{{ icon.name }}</v-icon>
      </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    props:['icons']

  }
</script>

<style scoped>
  .icon-font{
    margin: 13px;
    margin-bottom: 5px;
    height: 24px;
    width: 24px;
    color: white;
    float: right;
  }

</style>
