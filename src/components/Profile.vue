<template>
    <div class="profile" >
      <!-- <v-flex> -->
          <v-avatar size ="300px">
              <img src='../assets/vr.png'/>
          </v-avatar>
          <h1>{{ name }}</h1>
          <h2>{{ ocupation }}</h2>
      <!-- </v-flex> -->
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
h1, h2{
    margin:5px;
}
.profile{
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-content: center;
}
.profile img{
  width:300px;
  height:266.5px;
}
</style>
