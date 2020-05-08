<template>
<v-layout v-scroll:#scroll-target="onScroll" column>
    <div v-if="!isMobile">
        <v-flex class="mt-4 ml-5 text-block" style="width : 100%; height : 100%" >
            <div class="left-text">
                <div class="left-text-title">
                    Collact
                </div>
                <div class="left-text-subtitle">
                <div style="margin-right : 20px;  display : inline-block">           
                    Date<br>Tags
                    </div>
                    <div style="display : inline-block">           
                        January 11, 2019 <br>App Service
                    </div>
                </div>
            </div>
            <div class="right-block">
                <div class="right-text">
                    collact는 이 시대를 살아가는 젊은 아티스트들을 위한 온라인 
                    공간을 만드는 프로젝트입니다. 누구나 크리에이터가 되는 시대. 
                    창작의 진입 장벽이 낮아짐에 따라 미술 시장의 규모와 네트워킹의 니즈는
                    점점 증가하고 있지만, 아티스트를 발견하고 소통할 수 있는 창구는 아직 없습니다. 
                    등등등 소개문구
                </div>
            </div>
        </v-flex>
        <v-flex mt-20 style="weight:100%;">
            <v-img class="projectImg" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"/>
            <v-img class="projectImg" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"/>
        </v-flex>
    </div>
    <div v-else>
        <div class="mt-4 mr-5 ml-5 title-block">
            <div class="title">
                <img v-on:click ="previous" src="../assets/images/icPreview13Px.png">
                Collact
            </div>
            <div class="subTitle">  
                <div style="margin-right : 20px; display : inline-block">           
                Date<br>Tags
                </div>
                <div style="display : inline-block">           
                    January 11, 2019 <br>App Service
                </div>
            </div>

        </div>
        <v-flex class="mt-10 ml-5 mr-5 introduce-project">
            collact는 이 시대를 살아가는 젊은 아티스트들을 위한 온라인 
            공간을 만드는 프로젝트입니다. 누구나 크리에이터가 되는 시대. 
            창작의 진입 장벽이 낮아짐에 따라 미술 시장의 규모와 네트워킹의 니즈는
            점점 증가하고 있지만, 아티스트를 발견하고 소통할 수 있는 창구는 아직 없습니다. 
            등등등 소개문구
            <v-img class="projectImg" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"/>
            <v-img class="projectImg" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"/>
        </v-flex>
    </div>

</v-layout>
</template>

<script>
export default {
    data: () => ({
        isMobile: false
    }),
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
            this.isMobile = window.innerWidth < 600
        },
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        },
        previous() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

.introduce-project {
    font-size: 13px;
    font-family: 'Apple';
    font-weight: 400;
    line-height: 23px;
}
.title-block{
    width: 100%;
    height: fit-content;
    display: inline;
}
.title{
    font-size: 20px;
    font-family: 'Apple';
    font-weight: 700;
    width: fit-content;
    float: left;
    color: black;
    
}
.title img{
    width: 13px;
    height: 24px;
    vertical-align: middle;
    margin: 10px;
}
.subTitle{
    margin: 10px;
    padding-right: 13px;
    font-size: 10px;
    font-family: 'Apple';
    font-weight: 400;
    color: brownishGrey;
    float :right;
    width: fit-content;
}
.projectImg{
    display: inline-block;
}
.text-block{
    margin-bottom: 20px;
}
.left-text{
    font-family: 'Apple';
    float: left;
    width: 30%;
}
.left-text-title{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
}
.left-text-subtitle{
    font-size: 16px;
    font-weight: 400;
    opacity: 40%;
}
.right-block{

    float: right;
    width: 70%;
}
.right-text{
    width: 60%;
    font-size: 18px;
    line-height: 30px;
    font-family: 'Apple';
}
.img-block{
    margin-top: 30px;
}

</style>