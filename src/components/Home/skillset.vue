<template>

<div>
  <v-layout column align-center v-for="skill in skills" :key="skill.title" >
    <div class="skill-name">
      <p>{{skill.title}}</p>
      <span class="skill-percentage" :width="skill.value+'%'">
        <strong>{{skill.value}}%</strong>
      </span>
    </div>
    <v-progress-linear class="skill-progress-bar" height="20"
       :value="skill.value">
    </v-progress-linear>

  </v-layout>
</div>

</template>

<script>
  export default {
    data(){
      return{
        skills:[
          {value: 90, title:'Argumenting'},
          {value: 40, title:'Creativity'},
          {value: 30, title:'Boxing'},
          {value: 100, title:'Social'},
          {value: 70, title: 'Motorbike' }

        ]
      }
    }
  }
</script>

<style>
.skill-progress-bar{
  width: 70%;
  color: #2098D1;
  background-color: #e4e4e4;
  margin-top: 0px;
}
.skill-percentage{
  color:#2098D1;
}
.skill-name{
  width: 70%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.skill-name p{
  margin-bottom:5px;
}


</style>
