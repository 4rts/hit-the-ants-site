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
                        <router-link class="saithik-font web ml-2" :to="string.link" style="color: black;"> {{string.middle}} </router-link>
                        {{string.suffix}}</v-flex>
                </span>
                <div class="small-logo">
                    <img src="../assets/images/logoSymbol.png">
                </div>
            </v-flex>
        </div>
    </v-layout>
    
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            view : 'mobile',
            mobileString: [
                {prefix: 'We believe in Collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on next', middle:'projects', suffix:'.',link : 'projects'},
                {prefix: 'If you want to know',middle:'', suffix:'',link:''},
                {prefix: 'more', middle:'about', suffix:'our team,',link : 'about'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:'',link:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.', link : 'contact'}
            ],
            webString:[
                {prefix: 'We believe in Collaboration',middle:'', suffix:'',link:''},
                {prefix: 'and working on next', middle:'projects', suffix:'.',link : 'projects'},
                {prefix: 'If you want to know more',middle:'about', suffix:'our team,',link : 'about'},
                {prefix: 'you’re more than welcome to',middle:'contact', suffix:'us anytime.', link : 'contact'}   
            ],
            padString:[
                {prefix: 'We believe in Collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on next', middle:'projects', suffix:'.',link : 'projects'},
                {prefix: 'If you want to know',middle:'', suffix:'',link:''},
                {prefix: 'more', middle:'about', suffix:'our team,',link : 'about'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:'',link:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.', link : 'contact'}   
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
    bottom: 100px;
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
