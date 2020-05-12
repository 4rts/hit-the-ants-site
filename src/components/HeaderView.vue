<template>
    <v-container fluid>
        <v-col class="d-none d-md-block d-lg-block d-xl-block column" cols="12">
            <v-row class="white align-center justify-center">
                <div class="navagation-button web"
                    :class="{'focusing-button': (activingButton == link ? true : false)}"
                    v-for="link in links"
                    :key="link"
                    :label="link"
                    @click="moveToNavigationLink(link)">
                    {{link}}
                </div>
            </v-row>
        </v-col>
        <v-col class="d-md-none d-lg-none d-xl-none column" cols="12">
            <v-row class="white justify-space-around pt-2">
                <div class="navagation-button mobile"
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
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 400;
    background: none;
    color: black;
    opacity: 40%;
    cursor: pointer;
}
.navagation-button.mobile{
    font-size: 13pt;
    opacity: 100;
}
.navagation-button.web {
    opacity: 100;
    font-size: 16pt;
    margin-right: 60px !important;
    margin-left: 60px !important;
    letter-spacing:1px;
}
.focusing-button {

    opacity: 100 !important;
}
</style>