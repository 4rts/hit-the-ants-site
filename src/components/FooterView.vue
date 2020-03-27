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
              <button class="footer-view-button">
                <router-link to="/">Instagram</router-link>
              </button>
              <button class="footer-view-button">
                <router-link to="/">FaceBook</router-link>
              </button>
          </div>
        </v-card-title>

        <v-card-text class="py-2 text-center">
          {{ new Date().getFullYear() }} — 
          <strong>ⓒAll Copyrights Reserved. 힛디앤츠(HitTheAnts) E-mail:hittheants@gmail.com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>



<script>
export default {

}
</script>

<style scoped>
.footer-upper-block{
  width: 100%;
  height: 64pt;
  background-color: white;
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
  padding-right : 24pt;
}
.left-text{
  font-size: 16pt;
  font-family: 'Apple';
  font-weight: 400;
}
.right-title{
  font-size: 16pt;
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
  font-size: 10pt;
}


</style>

