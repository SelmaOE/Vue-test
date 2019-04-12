<template>
  <nav>
    <v-toolbar dark
    scroll-toolbar-off-screen
    height="70px">

    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

    <v-spacer></v-spacer>


    </v-toolbar>

    <v-navigation-drawer app v-model="drawer"
    dark temporary>
    <v-list>
    <v-list-tile
      v-for="item in this.items"
      :key="item.title"
    >
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default{
    data () {
      return {
        drawer: false

      }
    },
    props:['items']
  }

</script>
