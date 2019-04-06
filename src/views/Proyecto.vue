<template>
  <v-app>
    <Toolbar class="hidden-sm-and-down"
    :items="items"/>
    <NavMov class="hidden-md-and-up"
    :items="items"/>
    <div >
      Proyect ID is: {{ $route.params.id }}
    </div>

    <Footer :items="icons"/>

  </v-app>
</template>

<script>
  import Toolbar from '@/components/Toolbar.vue'
  import NavMov from '@/components/NavMov.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'Proyecto',
    components: {
      Toolbar,
      NavMov,
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
