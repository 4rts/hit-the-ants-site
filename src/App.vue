<template>
  <v-app>
    <v-content>
      <HeaderView/>
      <vue-router/>
      <FooterView/>
    </v-content>
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
