<template>
  <div>
    <section class="contact">
      <header>Contacto</header>
      <div class="c-list">
        <form transparent style="min-width: 70%">
          <v-text-field dark
            v-model="name"
            :counter="40"
            label="Name"
            required
          ></v-text-field>
          <v-text-field dark
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea dark
            v-model="coments"
            :counter="140"
            label="Comentarios"
            required
          ></v-textarea>
          <div class="buttons">
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>

  export default {

    data: () => ({
      name: '',
      email: '',
      coments:''
    }),

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.coments= ''
      }
    }
  }
</script>
<style>
  .contact {
    margin: 0 15px;
    border-radius: 10px 10px 0 0;
    background: #0048AA;
    margin-bottom: 20px;
    color: #FFF;
    align-content: center;
  }
  .contact header {
    border-radius: 10px 10px 0 0;
    padding: 15px;
    font-size: 3rem;
    font-weight: bold;
  }
  .c-list{
    display:flex;
    flex: 1 1 100%;
    align-content:center;
    justify-content: center;
  }
  .contact .buttons{
    display: flex;
    justify-content: space-around;
  }
</style>
