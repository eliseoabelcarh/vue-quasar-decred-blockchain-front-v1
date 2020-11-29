<template>
  <q-page id="principal" class="flex flex-center ">
    <div class="text-h3 text-weight-bolder color:blue-grey-10 " style="">
      <div class="titulo" style="text-align: left; max-width:55%">
        Identificate sin mostrar tus documentos
      </div>

      <div
        class="text-h5 text-weight-light subtitulo"
        style="text-align: left; margin-top:20px; max-width:40%"
      >
        Compartí tu identidad sólo con quien vos quieras!
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home",
  created() {}
};
</script>

<style >
#principal {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url("~assets/BG-1.png");
  min-height: 100%;
  min-width: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 0px;
}

@media screen and (max-width: 600px) {
  /* Specific to this particular image */
  #principal {
    background-image: url("~assets/BG-MOB.png");
  }
  .titulo {
    margin: 50px auto 0 auto;
    padding: 0 20px;
    font-size: 2rem;
    min-width: 80%;
    line-height: 40px;
  }
  .subtitulo {
    margin: -300px auto;
    min-width: 70%;
    padding: 0 auto;
    font-size: 1.2rem;
  }
}
</style>
