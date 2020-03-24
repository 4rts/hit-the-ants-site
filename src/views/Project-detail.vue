<template>

    <div class="project">
        <v-card-title class="text-center">
            <div class="title-block">
                <div class="title">
                    Collact
                </div>
                <div class="subtitle">
                    Date   January 11, 2019 <br>
                    Tags   App Service
                </div>
            </div>
            <v-spacer></v-spacer>
            <div class="context-block">
                "많이 보고, 많이 겪고, 많이 공부하는 것은 배움의 세 기둥이다."<br>
                저는 새로운 것에 흥미를 느끼고 부딪히며 배워가는 개발자 입니다. <br>
                공부하는 것을 즐기고, 딱딱하지 않은 공부를 좋아합니다. 재미있는 일이 있다면,<br>
                그곳에 제가 있을 것입니다.<br>
                흥미로운 프로젝트가 있다면 저를 찾으세요.
            </div>
        </v-card-title>
        <v-card-actions>
        </v-card-actions>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.project {
    padding-left: 15%;
    padding-right: 15%;
    width: 100%;
    display: inline-block;
}
.title-block{
    text-align: left;
    font-family: 'Apple';
    width: fit-content;
    height: 135pt;
}
.title{
    font-weight: 700;
}
.subtitle{

}
.context-block{
    width: fit-content;
    font-family: 'Apple';
    font-weight: 400;
    text-align: left;
    height: 135pt;

}


</style>