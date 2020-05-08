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
                    
                <div class="mt-4 ml-12 home-line d-inline-block"
                    v-for="(string, index) in webString"
                    :key="index">
                        <span class="apple-sandol-font web">{{string.prefix}}</span>
                        <router-link class="saithik-font web" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                        <span class="apple-sandol-font web">{{string.suffix}}</span>
                        <br/>
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
                    <span class="d-inline apple-sandol-font mobile">{{string.prefix}}</span>
                    <router-link class="d-inline saithik-font mobile" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                    <span class="d-inline apple-sandol-font mobile">{{string.suffix}}</span>
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
                {prefix: 'We believe in Collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on the next', middle:'projects', suffix:'.',link : 'test/projects'},
                {prefix: 'If you want to know',middle:'', suffix:'',link:''},
                {prefix: 'more', middle:'about', suffix:'our team,',link : 'test/about'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:'',link:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.', link : 'test/contact'}
            ],
            webString:[
                {prefix: 'We believe in Collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on the next', middle:'projects', suffix:'.',link : 'test/projects'},
                {prefix: 'If you want to know',middle:'', suffix:'',link:''},
                {prefix: 'more', middle:'about', suffix:'our team,',link : 'test/about'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:'',link:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.', link : 'test/contact'}   
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
    bottom: 148px;
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
