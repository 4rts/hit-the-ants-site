<template>
    <v-app>
        <header-view/>
        <div v-if="!isMobile" style="min-height : 100%">
            <v-container class="web-container" grid-list-md text-xs-center name = "web">
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
            this.isMobile = window.innerWidth < 600
        }
    }
};
</script>
<style scoped>
.web-container{
    min-height: 100%;
    max-width: 1000px;
    text-align: center;
    width: 100%;
}
.web-container div{
    text-align: left;
}
.footer{
    align-items: flex-end;
    overflow: hidden;    
    width: 100%;
    bottom:0;
}
</style>