<template>

  <v-layout row wrap>
    <v-flex xs12 sm6 v-for= "proyect in proyects" :key="proyect.title">
      <a href="/proyect">
      <v-card style="margin: 5px">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"> </v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ proyect.title }}</h3>
            <div> {{ proyect.card_text }} </div>
          </div>
        </v-card-title>
      </v-card>
      </a>
    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    data () {
      return {
        proyects:[
        {title: 'Proyecto 1', card_text: 'Descripcion del proyecto 1'},
        {title: 'Proyecto 2', card_text: 'Descripcion del proyecto 2'},
        {title: 'Proyecto 3', card_text: 'Descripcion del proyecto 3'},
        {title: 'Proyecto 4', card_text: 'Descripcion del proyecto 4'}
        ]

      }
    }
  }
</script>
<style>
  .newknow{
    display: flex;
    flex:1 1 0%;
    justify-content: center;
  }
  a{
    text-decoration: none;
  }
</style>
