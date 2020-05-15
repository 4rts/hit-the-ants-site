<template>
    <v-layout v-scroll:#scroll-target="onScroll" column class="ml-3 mr-3">
        <v-flex class="text-field-container ">
            <v-text-field label="Email" clearable></v-text-field>
        </v-flex>
        <v-flex class="text-field-container">
            <v-text-field label="Subject" clearable></v-text-field>
        </v-flex>
        <v-flex class="text-area-container">
            <v-textarea  name="content" outlined color="white" label="Contents"  height="350px"></v-textarea>
        </v-flex>
        <div v-if="!isMobile">
             <v-flex style="text-align: right;">
                <v-btn class="" outlined color="black" width="240px" height="80px">
                    <v-icon left>mdi-pencil</v-icon> SEND
                </v-btn>
            </v-flex>
        </div>
        <div v-else>
            <v-flex style="text-align: center;">
                <v-btn class="" outlined color="black" width="335px" height="44px">
                    <v-icon left>mdi-pencil</v-icon> SEND
                </v-btn>
            </v-flex>
        </div>

    </v-layout>
</template>

<script>
export default {
    name: 'Contact',
    data: function () {
        return {
            subject: '',
            // nameRules: [
            //     v => !!v || 'Subject is required',
            //     v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            // ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            isMobile: false,

        }
    },
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
            this.isMobile = window.innerWidth < 700
        },
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        },
    }
}
</script>

<style scoped>
.text-field-container {
    width: 100%;
    height: 65px;
}
.text-area-container {
    min-height: 400px;
    width: 100%;
    height: auto;
}
</style>