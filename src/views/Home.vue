<template>
    <div class="home">
        <div class="bottom-offset">
            <span class="apple-sandol-font">Hello, We are </span>
            <img src="../assets/images/hittheants.png">
        </div>
        <div class="bottom-offset">
            <span class="apple-sandol-font">We are now preparing for the next</span>
            <router-link class="saithik-font" to="projects"> project. </router-link>
        </div>
        <div class="bottom-offset">
            <span class="apple-sandol-font">If you’d like to learn</span>
            <router-link class="saithik-font" to="about"> about </router-link>
            <span class="apple-sandol-font">us,</span>
        </div>
        <div class="bottom-offset">
            <span class="apple-sandol-font">you are always welcomed to</span>
            <router-link class="saithik-font" to="contact"> contact </router-link>
            <span class="apple-sandol-font">us.</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home'
}
</script>
<style scoped>
.home {
    margin-top: 15px;
}
.bottom-offset {
    margin-bottom: 15px;
}
.apple-sandol-font {
    font-size: 65px;
    font-family: "Apple";
    font-weight: 100;
}
.saithik-font {
    font-size: 90px;
    color: black;
    text-decoration: none;
    font-family: 'Saithik';
}
</style>
