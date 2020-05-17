<template>
    <v-layout v-scroll:#scroll-target="onScroll" column>
        <div v-if="view === 'mobile'" style="line-height: 38px;">
            <v-flex class="apple-sandol-font mobile" style="margin-left : 10px; ">
                <v-flex class="d-flex">
                    <div class="d-inline-flex align-end">Hi there,<br>  </div>
                </v-flex>
                <v-flex class="d-flex">
                    <div>
                        We are</div>
                    <div class="saithik-font mobile" style="color: black; margin-left: 10px; "> 2 </div>
                    .

                </v-flex>
                <span class="d-inline" 
                    v-for="(string, index) in mobileString"
                    :key="index">
                        <v-flex>{{string.prefix}}
                        <router-link class="saithik-font mobile" :to="string.link" style="color: black;">{{string.middle}}</router-link>
                        {{string.suffix}}</v-flex>
            </span>
            </v-flex>
        </div>
        <div v-if="view === 'pad'" style="line-height: 50px;">
            <v-flex class="apple-sandol-font pad ml-5">
                <v-flex class="d-flex">
                    <div class="d-inline-flex align-end">Hi there, we are </div>
                    <div class="saithik-font pad" style="color: black; margin-left: 10px;"> 2 </div>
                    .
                </v-flex>
   
                <span class="home-line d-inline"
                    v-for="(string, index) in padString" 
                    :key="index">
                        <v-flex>{{string.prefix}}
                        <router-link class="saithik-font pad" :to="string.link" style="color: black;">{{string.middle}}</router-link>
                        {{string.suffix}}</v-flex>
            </span>
            </v-flex>
        </div>
        <div v-if="view === 'window'" style=" line-height: 60px;">
            <v-flex class="apple-sandol-font web ml-5">
                <v-flex class="d-flex">
                    <div class="d-inline-flex align-end">Hi there, we are  </div>
                    <div class="saithik-font web" style="color: black; margin-left: 10px; "> 2 </div>
                    .
                </v-flex>
                <span class="mt-4  home-line d-inline" 
                    v-for="(string, index) in webString"
                    :key="index">
                        <v-flex>{{string.prefix}}
                        <router-link class="saithik-font web" :to="string.link" style="color: black; margin-right : -15px"> {{string.middle}} </router-link>
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
                {prefix: 'We believe in collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on next', middle:'projects', suffix:' .',link : 'test/projects'},
                {prefix: 'If you want to know',middle:'', suffix:'',link:''},
                {prefix: 'more', middle:'about', suffix:'our team,',link : 'test/about'},
                {prefix: 'you’re more than welcome to',middle:'', suffix:'',link:''}, 
                {prefix: '',middle:'contact', suffix:'us anytime.', link : 'test/contact'}
            ],
            webString:[
                {prefix: 'We believe in collaboration',middle:'', suffix:'',link:''},
                {prefix: 'and working on next', middle:'projects', suffix:' .',link : 'test/projects'},
                {prefix: 'If you want to know more',middle:'about', suffix:'our team,',link : 'test/about'},
                {prefix: 'you’re more than welcome to',middle:'contact', suffix:'us anytime.', link : 'test/contact'}   
            ],
            padString:[
                {prefix: 'We believe in collaboration and',middle:'', suffix:'',link:''},
                {prefix: 'working on next', middle:'projects', suffix:' .',link : 'test/projects'},
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
            else if (window.innerWidth < 1000)
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
    bottom: 70px;
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
