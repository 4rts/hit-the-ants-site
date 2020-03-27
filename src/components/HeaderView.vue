<template>
    <v-container fluid>
        <v-col cols="12">
            <v-row class="white align-center justify-center">
                <div class="navagation-button mx-12"
                    :class="{'focusing-button': (activingButton == link ? true : false)}"
                    v-for="link in links"
                    :key="link"
                    :label="link"
                    @click="moveToNavigationLink(link)">
                    {{link}}
                </div>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
export default {
    name: 'HeaderView',
    mounted() {
        this.$router.push({name: this.$route.name})
    },
    data() {
        return {
            activingButton: 'HOME',
            links: ['HOME','ABOUT','PROJECTS','CONTACT']
        }
    },
    methods: {
        moveToNavigationLink(link) {
            if (link != this.$route.name) {
                this.$router.push({name: link})
                this.activingButton = link
            }
        }
    }
}
</script>

<style scoped>
.navagation-button {
    font-size: 16pt;
    font-family: 'Apple';
    font-weight: 400;
    background: none;
    color: black;
    opacity: 40%;
    cursor: pointer;
}
.focusing-button {
    opacity: 100%;
}
</style>