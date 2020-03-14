<template>
    <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
    >
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            v-model="subject"
            :rules="nameRules"
            label="Subject"
            required
        ></v-text-field>
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>

        <v-btn text large color="black">Submit</v-btn>
    </v-form>
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

</style>