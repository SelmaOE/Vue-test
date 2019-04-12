<template>
  <v-app>
    <Toolbar class="hidden-sm-and-down"
    :items="items"/>
    <NavMov class="hidden-md-and-up"
    :items="items"/>
    <div >
      <CarouselProject></CarouselProject>
      <ProyectProfile></ProyectProfile>
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
        items: [
          { title: 'PROYECTOS', icon: 'card_travel' },
          { title: 'SKILLSET', icon: 'dashboard' },
          { title: 'CONTACTO', icon: 'account_box'}
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
