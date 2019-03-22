<template>
  <div class="gallery-list">
        <section class="gallery">
            <header>Skillset</header>
            <div class="gallery-row">
                <div class="arrows">
                    <div class="arrow">&lt;</div>
                    <div class="arrow">&gt;</div>
                </div>
                <div class="skill-cont">
                <v-flex v-for= "skill in skills" :key="skill.title" xs12 style="margin:10px">
                  <div class="skill">
                      <h1>{{skill.title}}</h1>
                    <!-- <img :src="skill.src" :alt="skill.alt"/> -->
                  <!-- </v-img> -->
                    <v-slider v-model="skill.value" thumb-label="always" readonly style="margin: 40px 15px 0px"></v-slider>
                  </div>
                </v-flex>
                </div>

            </div>
        </section>
    </div>

</template>

<script>
  export default{
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
  * {
      /* margin: 0;
      padding: 0; */
      box-sizing: border-box;
  }

.gallery {
  margin: 0 15px;
  border-radius: 10px 10px 0 0;
  background: #0048AA;
  margin-bottom: 20px;
  color: #FFF;
}

.gallery header {
  border-radius: 10px 10px 0 0;
  padding: 15px;
  font-size: 3rem;
  font-weight: bold;
}

.gallery .gallery-row {
  position: relative;
  height: 200px;
}

.gallery .arrows {
  position: absolute;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
.skill-cont{
  display:flex;
  flex-direction:row;
  overflow-x: hidden;
}
.skill{
  background-color: black;
  min-width: 200px;
  height: 180px;
}
.gallery .arrow {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 50px;
  font-weight: bold;
  font-size: 4rem;
  color: #FFF;
  background: rgba(0, 72, 170, 0.4);
}

.gallery img {
  width: 200px;
  height: 180px;
}


</style>
