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

    <Footer :items="icons"/>

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
        {id:1, title: 'Proyecto 1', card_text: 'Descripcion del proyecto 1', image:require('@/assets/project1.png'),
        photos:[
          {src:require("@/assets/image11.png")},
          {src:require("@/assets/image12.png")},
          {src:require("@/assets/image13.png")},
          {src:require("@/assets/image14.png")}
        ]},
        {id:2, title: 'Proyecto 2', card_text: 'Descripcion del proyecto 2', image:require('@/assets/image42.png'),
        photos:[
          {src:require("@/assets/image41.png")},
          {src:require("@/assets/image42.png")},
          {src:require("@/assets/image43.png")},
          {src:require("@/assets/image44.png")}
        ]},
        {id:3, title: 'Proyecto 3', card_text: 'Descripcion del proyecto 3', image:require('@/assets/image43.png'),
        photos:[
          {src:require("@/assets/image41.png")},
          {src:require("@/assets/image42.png")},
          {src:require("@/assets/image43.png")},
          {src:require("@/assets/image44.png")}
        ]},
        {id:4, title: 'Proyecto 4', card_text: 'Descripcion del proyecto 4', image:require('@/assets/image41.png'),
        photos:[
          {src:require("@/assets/image41.png")},
          {src:require("@/assets/image42.png")},
          {src:require("@/assets/image43.png")},
          {src:require("@/assets/image44.png")}
        ]}
      ],

        icons: [
          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ]
      }
    }
  }
</script>
