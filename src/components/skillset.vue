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
          {src:"@/assets/argument.png",alt:"The Argument", value: 90, title:'Argumenting'},
          {src:"@/assets/potato.png", alt:"Potato", value: 40, title:'Creativity'},
          {src:"@/assets/boxing.png", alt:"Boxing", value: 30, title:'Boxing'},
          {src:"@/assets/gang.png", alt:"Gang", value: 100, title:'Social'},
          {src:"/assets/motorbike.png", alt:"Motorbike", value: 70, title: 'Motorbike' }

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
