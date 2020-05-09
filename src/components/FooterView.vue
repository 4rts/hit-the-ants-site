<template>
  <div>
    <div v-if="!isMobile" class="footer-upper-block ">
        <img src="../assets/images/foorterAnts.png">
    </div>
    <div class = "footer-offset text-center">
    <v-card-title class="upper-text" v-bind:class="{ 'text-size-m': isMobile }"
      style="display : inline-flex">
        <strong style="display : inline-flex;">
            Hit the Ants
          <div v-if="!isMobile" style="font-weight : 400; padding-left : 20px">
            A Korean based Fucking Good Crew
          </div>
        </strong>
        <v-spacer></v-spacer>
        <strong class="sns-container">
            Follow us
            <button v-on:click ="popup" style="color: #8c8c8c !important; margin-left : 10px ;margin-right : 10px;">
              Instagram  
            </button>
            <button v-on:click ="popup" style="color: #8c8c8c !important; margin-right : 10px;">
              FaceBook    
            </button>
        </strong>
    </v-card-title>

    <div v-if="!isMobile" class="tail-text-w">
      <v-flex>
        {{ new Date().getFullYear() }} — ⓒAll Copyrights Reserved. 힛디앤츠(HitTheAnts) E-mail:contact@hittheants.com
      </v-flex>
    </div>
    <div v-else class="tail-text-w">  
      <v-flex>
        {{ new Date().getFullYear() }} — ⓒAll Copyrights Reserved. 힛디앤츠(HitTheAnts)<br>
         E-mail:contact@hittheants.com
      </v-flex>
    </div>
  </div>
  </div>
</template>



<script>
export default {
  data: () => ({
      isMobile: false
  }),
  beforeDestroy () {
      if (typeof window !== 'undefined') {
          window.removeEventListener('resize', this.onResize, { passive: true })
      }
  },
  mounted () {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods:{
    popup : function() {
      window.open('https://www.instagram.com/hittheants/', '_blank');
    },
    onResize () {
        this.isMobile = window.innerWidth < 500
    },
    onScroll(e) {
        this.offsetTop = e.target.scrollTop
    },
  }
    
}


</script>

<style scoped>
.footer-offset{
  background-color: black;
  text-align: center;
}
.text-size-m{
  font-size: 11px !important;
}
.tail-size-m{
  font-size: 8px !important;
}
.footer-upper-block{
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: white;
}
.footer-upper-block img{
  background-color: white;
  height: 100%;
}
.upper-text{
  padding: 0%;
  color: white;
  width: 80%;
  max-width: 1440px;
  font-size: 16px;
  font-family: 'Apple';
  font-weight: 700;
  display: inline-flex;

}
.sns-container{
  display: inline;
}
.button{
  margin: 1%;
  color: #8c8c8c !important;
}


.tail-text-w{
  font-size: 10px;
  color: white;
  display: -moz-inline-grid;
  height: fit-content;
  padding: 0%;
}
.tail-text-m{
  font-size: 8px;
  color: white;
  display: -moz-inline-grid;
  height: fit-content;
  padding: 0%;
}
.footer-view-button{
  color : #8c8c8c;
  text-decoration: none;
}


</style>

