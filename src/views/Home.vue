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
        <ProyectCard></ProyectCard>
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

    <Footer :icons="icons"></Footer>

  </v-app>
</template>

<script>
  import Toolbar from '@/components/Shared/Toolbar.vue'
  import NavMov from '@/components/Shared/NavMov.vue'
  import Profile from '@/components/Home/Profile.vue'
  import ProyectCard  from '@/components/Home/proyect-card.vue'
  import Skillset from '@/components/Home/skillset.vue'
  import Contact from '@/components/Home/my-contact.vue'
  import Footer from '@/components/Shared/Footer.vue'
  export default {
    name: 'Proyecto',
    components: {
      Toolbar,
      NavMov,
      Profile,
      ProyectCard,
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
