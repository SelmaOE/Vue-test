<template>
  <div class="c-list">
    <form class="contact-form">
      <v-text-field color="#2098D1"
        v-model="name"
        :counter="40"
        label="Name"
        required
      ></v-text-field>
      <v-text-field color="#2098D1"
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>
      <v-textarea color="#2098D1"
        v-model="coments"
        :counter="140"
        label="Comentarios"
        required
      ></v-textarea>
      <div class="buttons">
        <v-btn color="#2098D1" @click="submit">submit</v-btn>
        <v-btn color="#2098D1" @click="clear">clear</v-btn>
      </div>
    </form>
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
  .c-list{
    display:flex;
    flex: 1 1 100%;
    align-content:center;
    justify-content: center;

  }
  .contact-form{
    border: black;
    border-width: 10px;
    border-style: solid;
    width: 70%;
    padding: 20px;
  }
  .contact-form .buttons{
    display: flex;
    justify-content: space-around;
  }
</style>
