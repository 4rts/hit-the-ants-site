<template>
    <v-app-bar color="white">
        <v-btn>
            <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn>
            <router-link to="/about">About</router-link>
        </v-btn>
        <v-btn>
            <router-link to="/projects">Projects</router-link>
        </v-btn>
        <v-btn>
            <router-link to="/contact">Contact</router-link>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'HeaderView'
}
</script>

<style scoped>

</style>