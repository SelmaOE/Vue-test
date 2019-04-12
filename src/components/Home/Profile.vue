<template>
  <div class="profile-set">
    <div class="mascara">
        <v-avatar class="avatar" size ="300px">
            <img src='@/assets/vr.png'/>
        </v-avatar>
        <h1 id="name">{{ name }}</h1>
        <h2 id="ocupation">{{ ocupation }}</h2>
    </div>
  </div>

</template>

<script>
  export default{
    data(){
      return{
        name: 'Selma Ortega Espinosa',
        ocupation: 'Business Engineer'
      }
    }
  }

</script>

<style>
#name{
  font-size: 3em;
  margin-top: 35px;
}
#ocupation{
  font-size:2em;
}
h1, h2{
    margin:5px;
}
.profile-set{
  display: flex;
  justify-content: center;
  background-image: url('../../assets/cinema.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center;
  height: 400px;
  margin: 200px 20px 30px;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: white;
}

.mascara{
  background-color: rgba(10,4,37,.60);
  width:100%;
  height: 100%;
}
.avatar{
  margin-top: -150px;
}
</style>
