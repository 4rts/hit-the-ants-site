<template>
<v-layout v-scroll:#scroll-target="onScroll" column>
    <div v-if="!isMobile">
        <v-flex class="mt-4 ml-5 text-block" style="width : 100%; height : 100%" >
            <div class="left-text">
                <div class="left-text-title">
                    COLLACT
                </div>
                <div class="left-text-subtitle">
                    <div style="margin-right : 20px;  display : inline-block">           
                        DATE<br>TAGS
                        </div>
                        <div style="display : inline-block">           
                            January 11, 2019 <br>App Service
                        </div>
                    </div>
                </div>
            <div class="right-block">
                <div class="right-text mb-10">
                    "상상 속의 프로젝트를 함께 실현해나가는 공간"<br>
                    새롭고도 꾸준하게, 독창적이고도 충실하게.<br>
                    콜렉트는 다양한 분야의 능력 있는 사람들 간의 만남을 통해 서로의 시너지를 끌어올리고, <br>
                    창조적인 프로젝트를 함께 기획하며 열정과 문화를 매개하는 협업 지향 플랫폼입니다.<br>
                </div>
            </div>
        </v-flex>
        <v-flex style="width : 100%; margin-top : 30px;">
            <img src="../assets/images/collact1.png" style="width: 100%; ">
            <img src="../assets/images/collact2.png" style="width: 100%; ">
            <img src="../assets/images/collact3.png" style="width: 100%;margin-top: 50px;">
        </v-flex>
    </div>
    <div v-else>
        <div class="mt-5 ml-3 mr-3  title-block">
            <div class="title">
                COLLACT
            </div>
            <div class="subTitle">  
                <div style="margin-right : 20px; display : inline-block">           
                DATE<br>TAGS
                </div>
                <div style="display : inline-block">           
                    January 11, 2019 <br>App Service
                </div>
            </div>

        </div>
        <v-flex class=" ml-3 mr-3 introduce-project mb-10">
            "상상 속의 프로젝트를 함께 실현해나가는 공간"<br>
            새롭고도 꾸준하게, 독창적이고도 충실하게.<br>
            콜렉트는 다양한 분야의 능력 있는 사람들 간의 만남을 통해 서로의 시너지를 끌어올리고, <br>
            창조적인 프로젝트를 함께 기획하며 열정과 문화를 매개하는 협업 지향 플랫폼입니다.<br>
            <div>
                <img src="../assets/images/collact1.png" style="width: 100%; ">
                <img src="../assets/images/collact2.png" style="width: 100%; ">
                <img src="../assets/images/collact3.png" style="width: 100%;margin-top: 20px;">
            </div>
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
    padding-top: 60px;
    font-size: 13px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 400;
    line-height: 23px;
}
.title-block{
    display: inline;
}
.title{
    font-size: 20px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 700;
    width: fit-content;
    float: left;
    color: black;
    margin-left: 10px;

}
.title img{
    width: 13px;
    height: 20px;
    vertical-align: middle;
    margin-left: 20px;
}
.subTitle{
    padding-right: 13px;
    font-size: 10px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 400;
    color: rgb(102, 102, 102);
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
    font-family: 'APPLE SD Gothic Neo','Apple';
    float: left;
    width: 30%;
}
.left-text-title{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
}
.left-text-subtitle{
    font-size: 16px;
    font-weight: 400;
    color: rgb(102, 102, 102);
}
.right-block{

    float: right;
    width: 70%;
}
.right-text{
    width: 100%;
    font-size: 16px;
    line-height: 23px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-size: 14px;
}
.img-block{
    margin-top: 30px;
}

</style>