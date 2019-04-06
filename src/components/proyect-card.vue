<template>

  <v-layout row wrap justify-center>
    <v-flex xs12 sm6 md4 v-for= "proyect in proyects" :key="proyect.title">
      <!-- <v-hover> -->
        <v-card hover :href="'/project/'+proyect.id" class="project hvr-rectangle-out" >
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"> </v-img>

            <div>
              <h2>{{ proyect.title }}</h2>
              <p> {{ proyect.card_text }} </p>
            </div>

        </v-card>
      <!-- </v-hover> -->
    </v-flex>
    <v-flex xs12 sm6 md4>
      <v-card dark height="100%" href="https://github.com/SelmaOE" target="_blank" class="project hvr-rectangle-out-orange" >
        <v-icon size="150px" class="fab fa-github"> </v-icon>

          <div>
            <h2 class="headline mb-0"> Github </h2>
            <p> Want to see more? See my Github </p>
          </div>
      </v-card>

    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    data () {
      return {
        proyects:[
        {id:1, title: 'Proyecto 1', card_text: 'Descripcion del proyecto 1', importance: 1},
        {id:2, title: 'Proyecto 2', card_text: 'Descripcion del proyecto 2', importance: 3},
        {id:3, title: 'Proyecto 3', card_text: 'Descripcion del proyecto 3', importance: 2},
        {id:4, title: 'Proyecto 4', card_text: 'Descripcion del proyecto 4', importance: 1}
        ]

      }
    }
  }
</script>
<style>
.project{
  margin: 5px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  cursor:pointer;
}
/* Rectangle Out */
.hvr-rectangle-out {
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #e1e1e1;
  transition-property: color;
  transition-duration: 0.2s;
}
.hvr-rectangle-out:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2098D1;
  transform: scale(0);
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}
.hvr-rectangle-out-orange {
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  background: #e1e1e1;
  padding-top: 5%;
  transition-property: color;
  transition-duration: 0.2s;
}
.hvr-rectangle-out-orange:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #D35400;
  transform: scale(0);
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}
.hvr-rectangle-out:hover, .hvr-rectangle-out:focus, .hvr-rectangle-out:active,
.hvr-rectangle-out-orange:hover, .hvr-rectangle-out-orange:focus, .hvr-rectangle-out-orange:active {
  color: white;
}
.hvr-rectangle-out:hover:before, .hvr-rectangle-out:focus:before, .hvr-rectangle-out:active:before,
.hvr-rectangle-out-orange:hover:before, .hvr-rectangle-out-orange:focus:before, .hvr-rectangle-out-orange:active:before {
  transform: scale(1);
}



</style>
