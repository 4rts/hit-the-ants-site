<template>
    <v-container>
        <v-layout class="d-md-none d-lg-none d-xl-none flex-wrap mx-2">
            <v-flex class="text-field-container ">
                <v-text-field label="Email" clearable></v-text-field>
            </v-flex>
            <v-flex class="text-field-container">
                <v-text-field label="Subject" clearable></v-text-field>
            </v-flex>
            <v-flex class="text-area-container">
                <v-textarea  name="content" label="Contents" clearable outlined></v-textarea>
            </v-flex>
            <v-flex>
                <v-btn class="" outlined color="black">
                    <v-icon left>mdi-pencil</v-icon> SEND
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
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
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.text-field-container {
    width: 100%;
    height: 65px;
}
.text-area-container {
    width: 100%;
    height: auto;
}
</style>