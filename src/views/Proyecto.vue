<template>
  <v-app>
    <Toolbar class="hidden-sm-and-down"
    :items="items"/>
    <NavMov class="hidden-md-and-up"
    :items="items"/>
    <div v-for="proyect in proyects" :key="proyect.id">
      <div v-if="proyectID == proyect.id">
        <CarouselProject :photos="proyect.photos"></CarouselProject>
        <ProyectProfile :projectDetails="proyect"></ProyectProfile>
      </div>
    </div>

    <Footer :icons="icons"/>

  </v-app>
</template>

<script>
  import Toolbar from '@/components/Shared/Toolbar.vue'
  import NavMov from '@/components/Shared/NavMov.vue'
  import CarouselProject from '@/components/Project/Carousel-Project'
  import ProyectProfile from '@/components/Project/ProyectProfile'
  import Footer from '@/components/Shared/Footer.vue'
  export default {
    name: 'Proyecto',
    components: {
      Toolbar,
      NavMov,
      CarouselProject,
      ProyectProfile,
      Footer
    },
    data () {
      return {
        proyectID: this.$route.params.Pid,
        title:"Proyecto",
        items: [
          { title: 'PROYECTOS', icon: 'card_travel' },
          { title: 'SKILLSET', icon: 'dashboard' },
          { title: 'CONTACTO', icon: 'account_box'}
        ],
        proyects:[
        {id:1, title: 'Survival Island',
         card_text: 'Explore and survive in an island (if you can).',
        photos:[
          {src:require("@/assets/image11.png")},
          {src:require("@/assets/image12.png")},
          {src:require("@/assets/image13.png")},
          {src:require("@/assets/image14.png")}
        ]},
        {id:2, title: 'War zone',
         card_text: 'You against the world! Shoot at whatever comes. Difficulty progress on each level',
        photos:[
          {src:require("@/assets/image21.png")},
          {src:require("@/assets/image22.png")},
          {src:require("@/assets/image23.png")},
          {src:require("@/assets/image24.png")}
        ]},
        {id:3, title: 'Mini Platform',
         card_text: 'Mini videogame made in phaser.io',
        photos:[
          {src:require("@/assets/image31.png")},
          {src:require("@/assets/image32.png")},
          {src:require("@/assets/image33.png")},
          {src:require("@/assets/image34.png")}
        ]},
        {id:4, title: 'Domu', card_text: 'App made in android studio for ordering homemade food',
        photos:[
          {src:require("@/assets/image41.png")},
          {src:require("@/assets/image42.png")},
          {src:require("@/assets/image43.jpg")},
          {src:require("@/assets/image44.jpg")}
        ]}
      ],

        icons: [
          { name: 'fab fa-facebook', link: 'https://www.facebook.com/selma.ortega?'},
          { name: 'fab fa-twitter', link: 'https://twitter.com/SelmaOE' },
          { name: 'fab fa-google-plus', link: 'https://www.google.com/'},
          { name: 'fab fa-linkedin', link: 'https://mx.linkedin.com/' }
        ]
      }
    }
  }
</script>
