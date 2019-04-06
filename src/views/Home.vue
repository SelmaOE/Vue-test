<template>
  <v-app>
    <Toolbar class="hidden-sm-and-down"
    :items="items"/>
    <NavMov class="hidden-md-and-up"
    :items="items"/>

    <div id="back-home">
      <Profile></Profile>
      <div id="project" class="proyect-set">
        <div class="header-section">
          <h1 >Projects</h1>
          <hr id=divider>
        </div>
        <PanelProyect></PanelProyect>
      </div>
      <div id="skills" class="proyect-set">
        <div class="header-section">
          <h1 >Skillset</h1>
          <hr id=divider>
        </div>
        <Skillset></Skillset>
      </div>
      <div id="contact" class="proyect-set">
        <div class="header-section">
          <h1 >Contact</h1>
          <hr id=divider>
        </div>
        <Contact></Contact>
      </div>
    </div>

    <Footer></Footer>

  </v-app>
</template>

<script>
  import Toolbar from '@/components/Toolbar.vue'
  import NavMov from '@/components/NavMov.vue'
  import Profile from '@/components/Profile.vue'
  import PanelProyect  from '@/components/Panel-proyect.vue'
  import Skillset from '@/components/skillset.vue'
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
          { title: 'PROYECTOS', icon: 'card_travel', ref: 'project'},
          { title: 'SKILLSET', icon: 'dashboard', ref:'skills' },
          { title: 'CONTACTO', icon: 'account_box', ref:'contact'}
        ]
      }
    }
  }
</script>
<style>
  #back-home{
    /* background-color: #21366A; */
  }
  #divider{
    border-color: black;
    border-width: 5px;
    margin: 15px 0px 25px;
    max-width: 80vw;
    width: 50%;
  }
  .header-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .profile-set{
    display: flex;
    justify-content: center;
    background-image: url('../assets/cinema.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center;
  }
  .proyect-set{
    justify-content: center;
    align-items: center;
    margin: 20px;
    /* background-color: rgba(10,4,37,1); */
  }



</style>
