<template>
    <v-container fluid>
        <v-col class="d-none d-md-block d-lg-block  " style="width: 100%; text-align: -webkit-center;">
            <v-row class="white align-center justify-center" style = "max-width: 1050px;">
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
        <v-col class="d-md-none d-lg-none d-xl-none " style=" padding-right: 0; padding-left: 0;">
            <v-row class="white justify-space-around pt-2 pl-0" >
                <div class="navagation-button mobile"
                    :class="{'focusing-button': (activingButton == link ? true : false)}"
                    v-for="link in links"
                    :key="link"
                    :label="link"
                    @click="moveToNavigationLink(link); setActive(link)">
                    {{link}}
                    <v-spacer/>
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
            links: ['HOME','ABOUT','PROJECTS','CONTACT'],
        }
    },
    methods: {
        moveToNavigationLink(link) {
            if (link != this.$route.name) {
                this.activingButton = link
                this.$router.push({name: link})
            }
        },
    }
}
</script>

<style scoped>
.navagation-button {
    font-size: 16px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 400;
    background: none;
    color: rgb(160, 160, 160);
    cursor: pointer;
}
.navagation-button.mobile{
    font-size: 13px;
    letter-spacing:1px;
}
.navagation-button.web {
    font-size: 16px;
    margin-right: 60px !important;
    margin-left: 60px !important;
    letter-spacing:1px;
}
.focusing-button {
    color: black;
}
</style>