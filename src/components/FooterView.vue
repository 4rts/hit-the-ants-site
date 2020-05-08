<template>
  <div class = footer_offset>
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <div class="text-center footer-upper-block">
            <img src="../assets/images/foorterAnts.png">
        </div>
        <v-card-title class=" teal text-center">
            <strong class="subheading left-title" >
              Hit the Ants
            </strong>
            <strong class="subheading left-text">
              A Korean based Fucking Good Crew
            </strong>
            <v-spacer></v-spacer>
            <div>
              <strong class="subheading right-title">
                Follow us
              </strong>
              <button v-on:click ="popup" class="footer-view-button">
                Instagram
              </button>
              <button v-on:click ="popup" class="footer-view-button">
                FaceBook
              </button>
          </div>
        </v-card-title>

        <v-card-text class="py-2 text-center">
          {{ new Date().getFullYear() }} — 
          <strong>ⓒAll Copyrights Reserved. 힛디앤츠(HitTheAnts) E-mail:contact@hittheants.com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>



<script>
export default {
  methods:{
    popup : function() {
      window.open('https://www.instagram.com/hittheants/', '_blank');
    }
  }

}
</script>

<style scoped>
.theme--dar.v-footer{
  background-color: white;
}
.footer-upper-block{
  width: 100%;
  height: 50px;
  background-color: white;
}
.footer-upper-block img{
  background-color: white;
  height: 50px;
}
.v-application .teal{
  background-color : black !important ;
}
.text-center{
  padding-left: 10%;
  padding-right: 10%;
}
.left-title{
  font-size: 16pt;
  font-family: 'Apple';
  font-weight: 700;
  padding-right : 24px;
}
.left-text{
  font-size: 16px;
  font-family: 'Apple';
  font-weight: 400;
}
.right-title{
  font-size: 16px;
  font-family: 'Apple';
  font-weight: 700;
}
.footer-view-button{
    width: 100px;
    height: 30px;
    margin: 0 25px;
    font-family: 'Apple';
    font-weight: 400;
    color: #8c8c8c !important;
}
.footer-view-button a{
  color : #8c8c8c;
  text-decoration: none;
}

.py-2 {
  
  background-color: black;
  font-size: 10px;
}


</style>

