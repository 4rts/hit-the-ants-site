<template>
    <v-container class="d-flex flex-column pa-0">
        <v-layout class="d-none d-md-block d-lg-block d-xl-block column" style="line-height : 70px;">
            <v-flex>
                <div class="mt-2 ml-12 image-content">
                    <div class="apple-sandol-font web">
                        Hi there, we are 
                        <img src="../assets/images/hittheants.png" style = "height: 100px; vertical-align: middle;">
                </div>
                    </div>
                    
                <div class="mt-4 ml-12 home-line"
                    v-for="(string, index) in webString"
                    :key="index">
                    <span class="apple-sandol-font web">{{string.prefix}}</span>
                    <router-link class="saithik-font web" :to="string.middle" style="color: black;"> {{string.middle}} </router-link>
                    <span class="apple-sandol-font web">{{string.suffix}}</span>
                </div>
            </v-flex>
            <div class="small-logo">
                <img src="../assets/images/logoSymbol.png">
            </div>
        </v-layout>

        <v-layout class="d-md-none d-lg-none d-xl-none apple-sandol-font mobile home-line">
            <v-flex style="margin-bottom: auto; padding: 20px">
                <v-flex class="d-flex mb-4">
                    <div class=" d-inline-flex align-end">Hi there,<br>  </div>
                </v-flex>
                <v-flex class="d-flex mb-4">
                    <div>
                        we are<img class="d-inline-flex ml-3" src="../assets/images/hittheants.png" style="height: 51px; vertical-align: middle;">
                    </div>
                </v-flex>
                <div class="d-inline-block" v-for="(string, index) in mobileString" :key="index">
                    <div class="d-inline apple-sandol-font mobile">{{string.prefix}}</div>
                    <router-link class="d-inline saithik-font mobile" :to="string.middle" style="color: black;"> {{string.middle}} </router-link>
                    <div class="d-inline apple-sandol-font mobile">{{string.suffix}}</div>
                    <br/>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            mobileString: [
                {prefix: 'We belive in colaboation and',middle:'', suffix:''},
                {prefix: 'working on the next', middle:'projects', suffix:'.'},
                {prefix: 'If you want to know',middle:'', suffix:''},
                {prefix: 'more', middle:'about', suffix:'our team,'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.'}
            ],
            webString:[
                {prefix: 'We belive in colaboation',middle:'', suffix:''},
                {prefix : 'and working on the next', middle:'projects', suffix:'.'},
                {prefix: 'If you want to know',middle:'', suffix:''},
                {prefix: 'more', middle:'about', suffix:'our team,'},                
                {prefix: 'you’re more than welcome to',middle:'', suffix:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.'}            
            ],
        }
    }
}
</script>
<style scoped>
.home-line{
    line-height: 40px;
}
.small-logo {
    position: fixed;
    left: 44px;
    bottom: 40px;
}

.image-content >div{
    display: inline-block;
    position: relative;
    bottom: 23px;
}
.image-content >img{
    display: inline-block;
    position: relative;
    left: 22px;
}
</style>
