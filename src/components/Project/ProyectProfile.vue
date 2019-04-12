<template>
  <div>
    <div class="header-section">
      <h1 >{{projectDetails.title}}</h1>
      <hr id=divider>
      <p>{{projectDetails.card_text}}</p>
    </div>
  </div>

</template>

<script>
  export default{
    props:['projectDetails']
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
  .project-profile-set{
    display: flex;
    justify-content: center;
    background-image: url('../../assets/cinema.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center;
    height: 400px;
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
</style>
