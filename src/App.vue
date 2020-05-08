<template>
    <v-app>
        <header-view/>
        <div v-if="!isMobile" style="min-height : 100%">
            <v-container id="web-container" grid-list-md text-xs-center name = "web">
                <router-view/>
            </v-container>
            <footer-view class="footer"/>

        </div>
        <v-container name ="mobile" v-else>
            <router-view/>
        </v-container>
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
            this.isMobile = window.innerWidth < 600;
            // var web_container = document.getElementById('web-container')
            // web_container.style.height = window.innerHeight - 30 + 'px'
        }
    }
};
</script>
<style scoped>
#web-container{
    max-width: 1000px;
    text-align: center;
    width: 80%;
    height: fit-content;
    min-height: 100%;
    margin-bottom: 100px;
}
#web-container div{
    text-align: left;
}
.footer{
    position: fixed;
    bottom: 0;
    align-items: flex-end;
    overflow: hidden;    
    width: 100%;
    bottom:0;
}
</style>