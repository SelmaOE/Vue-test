<template>
  <nav>
    <v-toolbar dark scroll-toolbar-off-screen height="70px">

    <v-spacer></v-spacer>

    <v-toolbar-items v-for="item in this.items"
    :key="item.title" align-center fill-height justify-end>
      <v-btn flat :href="'#'+item.ref">
        <span> {{item.title}}</span>
      </v-btn>
    </v-toolbar-items>

    </v-toolbar>

  </nav>
</template>

<script>
  export default{
    props:['items']
  }

</script>

<style>

</style>
