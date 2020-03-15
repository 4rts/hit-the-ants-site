<template>
    <v-app-bar>
        <button class="header-view-button">
            <router-link to="/">Home</router-link>
        </button>
        <button class="header-view-button">
            <router-link to="/about">About</router-link>
        </button>
        <button class="header-view-button">
            <router-link to="/projects">Projects</router-link>
        </button>
        <button class="header-view-button">
            <router-link to="/contact">Contact</router-link>
        </button>
    </v-app-bar>
</template>

<script>
export default {
    name: 'HeaderView'
}
</script>

<style scoped>
.v-app-bar {
    height: 80px !important;
    background: white !important;
}
.header-view-button {
    width: 100px;
    height: 80px;
    margin: 0 25px;

}
.header-view-button a {
    color: black;
    text-decoration: none;
    font-size: 16px;
}
</style>