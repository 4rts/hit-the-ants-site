<template>
    <v-container fluid grid-list-sm pa-0>
        <v-layout column>
            <v-flex>
                <div class="mt-4 ml-12 image-content">
                    <div class="apple-sandol-font">Hi there, we are </div>
                    <img src="../assets/images/hittheants.png">
                </div>
                <div class="mt-4 ml-12"
                    v-for="(string, index) in stringLists"
                    :key="index">
                    <span class="apple-sandol-font">{{string.prefix}}</span>
                    <router-link class="saithik-font" :to="string.middle"> {{string.middle}} </router-link>
                    <span class="apple-sandol-font">{{string.suffix}}</span>
                </div>
            </v-flex>
            <div class="small-logo">
                <img src="../assets/images/logoSymbol.png">
            </div>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            stringLists: [
                {prefix: 'If you’d like to learn, and working on the next ', middle:'projects', suffix:'.'},
                {prefix: 'If you want to know more ', middle:'about', suffix:' our team,'},
                {prefix: 'you’re more than welcome to ', middle:'contact', suffix:' us anytime.'}
            ]
        }
    }
}
</script>
<style scoped>
.apple-sandol-font {
    font-size: 65px;
    font-family: "Apple";
    font-weight: 100;
}
.saithik-font {
    font-size: 90px;
    color: black;
    text-decoration: none;
    font-family: 'Saithik';
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
