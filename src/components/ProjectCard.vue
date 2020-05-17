
<template>
    <v-card class="mx-auto" max-width="344" height="280px" outlined="false" >
        <router-link class="card-title"  to="/projects/detail">
        <img src="../assets/images/collact.png" style=" padding : 3px; width: 100%; font-weight : 700 font-size : 14px;">
        <v-card-title style = "margin-left : 2px;">COLLACT <v-spacer/><div class="year">2020</div></v-card-title>
        </router-link>
    </v-card>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.v-card__title{
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 0;
    color: black;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
}
.theme--light.v-card.v-card--outlined {
    border: none
}

.year{
    font-weight: 400;
    color: rgb(102, 102, 102);
}



.v-application a {
    text-decoration: none;
}
</style>