<template>
    <v-app>
        <header-view/>
        <div v-if="!isMobile" >
            <v-container id="web-container" grid-list-md text-xs-center name = "web">
                <router-view/>
            </v-container>

        </div>
        <div v-else >
            <v-container id="mobile-container" name = "mobile">                
                <router-view/>
            </v-container>
        </div>
        <footer-view class="footer"/>

    </v-app>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

export default {
    name: 'App',
    components: {
        HeaderView,
        FooterView
    },
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
    methods: {
        onResize () {
            this.isMobile = window.innerWidth < 1000;
            // var web_container = document.getElementById('web-container')
            // web_container.style.height = window.innerHeight + 'px'
        }
    }
};
</script>
<style scoped>
#web-container{
    margin-top: 20px;
    max-width: 1050px;
    text-align: center;
    width: 80%;
    height : fit-content;
    min-height: 100%;
}
#mobile-container{
    margin-top: 20px;
    height : fit-content;
    min-height: 100%;
    margin-bottom: 20%;
}
#web-container div{
    text-align: left;
    margin-bottom: 20px;
    margin-bottom: 20%;

}
.footer{
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    overflow: hidden;    
    width: 100%;
}
</style>