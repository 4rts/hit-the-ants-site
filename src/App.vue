<template>
    <v-app>
        <header-view/>
        <v-content>
            <router-view/>
        </v-content>
        <footer-view/>
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
</style>