<template>
  <v-app>
    <Toolbar class="hidden-sm-and-down"
    :items="items"/>
    <NavMov class="hidden-md-and-up"
    :items="items"/>
    <div class="profile-set">
      <Profile></Profile>
    </div>
    <div class="proyect-set">
      <PanelProyect></PanelProyect>
    </div>

    <Skillset></Skillset>

    <Contact></Contact>

    <Footer></Footer>

  </v-app>
</template>

<script>
  import Toolbar from '@/components/Toolbar.vue'
  import NavMov from '@/components/NavMov.vue'
  import Profile from '@/components/Profile.vue'
  import PanelProyect  from '@/components/Panel-proyect.vue'
  import Skillset from '@/components/my-skillset.vue'
  import Contact from '@/components/my-contact.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'Proyecto',
    components: {
      Toolbar,
      NavMov,
      Profile,
      PanelProyect,
      Skillset,
      Contact,
      Footer
    },
    data () {
      return {
        items: [
          { title: 'PROYECTOS', icon: 'card_travel' },
          { title: 'SKILLSET', icon: 'dashboard' },
          { title: 'CONTACTO', icon: 'account_box'}
        ]
      }
    }
  }
</script>
<style>
  .profile-set{
    display: flex;
    justify-content: center;
    margin: 10px;
  }
  .proyect-set{
    display: flex;
    justify-content: center;
    flex: 1 1 30%;
    margin: 10px;
  }

</style>
