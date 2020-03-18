<template>
    <v-app>
        <v-content class="content-wrapper">
            <header-view/>
            <div class="router-view-wrapper">
                <router-view/>
            </div>
        </v-content>
            <footer-view />
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
        //
    }),
};
</script>
<style scoped>
.content-wrapper {
    text-align: center;
}
.router-view-wrapper {
    display: inline-block;
    max-width: 1340px;
    text-align: left;
    padding-top : 60px;
}
.footer-wrapper {
    padding-bottom: 0px;
}
</style>