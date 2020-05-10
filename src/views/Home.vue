<template>
    <v-layout v-scroll:#scroll-target="onScroll" column>
        <div v-if="view === 'mobile'">
            <v-flex class="apple-sandol-font mobile ml-5">
                <v-flex class="d-flex mb-4">
                    <div class="d-inline-flex align-end">Hi there,<br>  </div>
                </v-flex>
                <v-flex class="d-flex mb-4">
                    <div>
                        we are<img class="d-inline-flex ml-3" src="../assets/images/hittheants.png" style="height: 52px; vertical-align: middle;">
                    </div>
                </v-flex>
                <span class="mt-4 d-inline"
                    v-for="(string, index) in mobileString"
                    :key="index">
                        <v-flex>{{string.prefix}}
                        <router-link class="saithik-font mobile ml-2" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                        {{string.suffix}}</v-flex>
            </span>
            </v-flex>
        </div>
        <div v-if="view === 'pad'">
            <v-flex class="apple-sandol-font pad ml-5">
                <v-flex class="d-flex mb-4">
                    <div class="d-inline-flex align-end">Hi there,<br>  </div>
                </v-flex>
                <v-flex class="d-flex mb-4">
                    <div>
                        we are<img class="d-inline-flex ml-3" src="../assets/images/hittheants.png" style="height: 80px; vertical-align: middle;">
                    </div>
                </v-flex>
                <span class="mt-4  home-line d-inline"
                    v-for="(string, index) in padString"
                    :key="index">
                        <v-flex>{{string.prefix}}
                        <router-link class="saithik-font pad ml-2" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                        {{string.suffix}}</v-flex>
            </span>
            </v-flex>
        </div>
        <div v-if="view === 'window'">
            <v-flex class="apple-sandol-font web ml-5">
                <v-flex class="d-flex">
                    <div class="d-inline-flex align-end">Hi there, we are  </div>
                <img class="d-inline-flex ml-3" src="../assets/images/hittheants.png" style="height: 100px; vertical-align: middle;">
                </v-flex>
                <v-flex class="d-flex mb-4">
                    <div>
                    </div>
                </v-flex>
                <span class="mt-4  home-line d-inline"
                    v-for="(string, index) in webString"
                    :key="index">
                        <v-flex>{{string.prefix}}
                        <router-link class="saithik-font pad ml-2" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                        {{string.suffix}}</v-flex>
            </span>
            </v-flex>
        </div>
    </v-layout>
    
    <!-- <v-container class="d-flex flex-column pa-0">
        <v-layout class="d-none d-md-block d-lg-block d-xl-block column web" style="line-height : 70px;">
            <v-flex>
                <div class="mt-2 ml-12 image-content">
                    <div class="apple-sandol-font web">
                        Hi there, we are 
                        <img src="../assets/images/hittheants.png" style = "height: 100px; vertical-align: middle;">
                </div>
                    </div>
                    
                <span class="mt-4 ml-12 home-line d-inline-block"
                    v-for="(string, index) in webString"
                    :key="index">
                        <span class="apple-sandol-font web">{{string.prefix}}
                        <router-link class="saithik-font web" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                        {{string.suffix}}</span>
                </span>
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
                <span class="d-inline-block" v-for="(string, index) in mobileString" :key="index">
                    <span class="d-inline apple-sandol-font mobile">{{string.prefix}}
                    <router-link class="d-inline saithik-font mobile" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                    {{string.suffix}}</span>
                </span>
            </v-flex>
        </v-layout>
    </v-container> -->
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            view : 'mobile',
            mobileString: [
                {prefix: 'We believe in Collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on next', middle:'projects', suffix:'.',link : 'test/projects'},
                {prefix: 'If you want to know',middle:'', suffix:'',link:''},
                {prefix: 'more', middle:'about', suffix:'our team,',link : 'test/about'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:'',link:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.', link : 'test/contact'}
            ],
            webString:[
                {prefix: 'We believe in Collaboration',middle:'', suffix:'',link:''},
                {prefix: 'and working on next', middle:'projects', suffix:'.',link : 'test/projects'},
                {prefix: 'If you want to know more',middle:'about', suffix:'our team,',link : 'test/about'},
                {prefix: 'you’re more than welcome to',middle:'contact', suffix:'us anytime.', link : 'test/contact'}   
            ],
            padString:[
                {prefix: 'We believe in Collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on next', middle:'projects', suffix:'.',link : 'test/projects'},
                {prefix: 'If you want to know',middle:'', suffix:'',link:''},
                {prefix: 'more', middle:'about', suffix:'our team,',link : 'test/about'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:'',link:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.', link : 'test/contact'}   
            ],
        }
    },
    mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        },
        onResize () {
            if(window.innerWidth < 600)
                this.view = 'mobile';
            else if (window.innerWidth < 1100)
                this.view = 'pad';
            else
                this.view = 'window';
        }
    }
}
</script>
<style scoped>
.small-logo {
    position: fixed;
    left: 44px;
    bottom: 0px;
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
