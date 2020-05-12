<template>
    <v-layout v-scroll:#scroll-target="onScroll" column>
        <v-flex class="mt-4 ml-5 introduce-ants" style="opacity: 0.4;">
            “행복의 비결은 현재의 순간을 즐기는 것,<br>
            지금 자기 앞에 있는 일에 몰두하는 것, 땅 위를 걷는 것”<br>
            -베르나르 베르베르 ‘개미’ 중-
        </v-flex>
        <v-flex class="mt-3 ml-5 introduce-ants">
            점으로부터 시작된<br>
            우주 안 작디작은 은하, 자그마한 행성,<br>
            그 위를 딛고 있는 누군가가 바라보는<br>
            땅 위의 또 다른 점들.<br>
            <br>
            더듬이를 곤두세우고 나선 작은 행보가<br>
            누군가를 이끄는 길이 되기도 합니다.<br>
            땅 위에 남기는 미소한 점의 자취,<br>
            개미들로부터 시작하는 우주를 그립니다<br>
        </v-flex>
        <v-flex class="mt-7 ml-5">
                <div class="name">{{memberList[selectedIndex].name}}</div>
                <div class="email">{{memberList[selectedIndex].email}}<br>{{memberList[selectedIndex].instagram}}</div>
        </v-flex>
        <v-flex mt-20 style="overflow:auto">
            <div id="row">
                <div class="items" v-for="(member, index) in memberList" :key="index">
                    <div v-if="index == selectedIndex">
                        <img :src="member.selectedPhoto" v-on:click="selectedIndex = index">
                    </div>
                    <div v-else>
                        <img :src="member.basePhoto" v-on:click="selectedIndex = index">
                    </div>
                </div>
            </div>
        </v-flex>
        <v-flex class="mt-4 ml-5 mr-4 introduce-ants">
            {{memberList[selectedIndex].introduce}}
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            offsetTop: 0,
            beforeProfile: '',
            selecetedProfile: '',
            selectedIndex:  0,
            memberList: [
                {
                    name: '정진혁',
                    introduce: '열망과 욕망은 야망과 다르며 스스로의 주인이 되어 말과 행동을 일치시키고자 합니다. 각자의 행복도 집단의 미래도 본인 스스로의 주체적이고 욕망에 집중하는 개인에게 달렸습니다. 변화를 만들어갈 공동체를 이루고 사람들을 동참시켜 이끄는 데에서 큰 자부심과 행복을 느낍니다. 더 많은 사람의 일상을 변화시킬 수 있는 결과물로 세상에 작은 물결을 일으킬 수 있기를 꿈꿉니다.',
                    photo: '',
                    // basePhoto: '../assets/images/imgGhBlack.png',
                    // selectedPhoto: '../assets/images/imgGhColor.png',
                    basePhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgGhBlack.png?raw=true',
                    selectedPhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgGhColor.png?raw=true',
                    email: 'g.nyuk@hittheants.com',
                    instagram:'g_nyuk@instagram',
                    ig: 'https://www.instagram.com/g.nyuk/'
                }, {
                    name: '박한빈',
                    introduce: '방년 25세, 시들어가는 중. 꽃가루 알레르기는 없지만 왠지 봄이 오면 코가 간지러움.',
                    photo: '',
                    // basePhoto: '../assets/images/imgHbBlack.png',
                    // selectedPhoto: '../assets/images/imgHbColor.png',
                    basePhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgHbBlack.png?raw=true',
                    selectedPhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgHbColor.png?raw=true',
                    email: 'cactaceous@hittheants.com',
                    instagram:'cactaceo_us@instagram',
                    ig: 'https://www.instagram.com/cactaceo_us/'
                }, {
                    name: '손희덕',
                    introduce: '"많이 보고, 많이 겪고, 많이 공부하는 것은 배움의 세 기둥이다." 저는 새로운 것에 흥미를 느끼고 부딪히며 배워가는 개발자 입니다.공부하는 것을 즐기고, 딱딱하지 않은 공부를 좋아합니다. 재미있는 일이 있다면, 그곳에 제가 있을 것입니다.',
                    photo: '',
                    // basePhoto: '../assets/images/imgHdBlack.png',
                    // selectedPhoto: '../assets/images/imgHdColor.png',
                    basePhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgHdBlack.png?raw=true',
                    selectedPhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgHdColor.png?raw=true',
                    email: 'hdson07@hittheants.com',
                    instagram:'hi_duckee@instagram',
                    ig: 'https://www.instagram.com/hi_duckee/'
                }, {
                    name: '김주연',
                    introduce: '안녕하세요, 글쓰기를 좋아하는 개발자입니다. 출근길의 하늘과 사랑하는 사람의 그날 아침 목소리, 저녁에 마주한 생각들의 디테일을 기억하는, 풍부한 삶을 살고 싶습니다. 개발자로서는 팀원들과 함께 발전하며, 새로운 기술을 배우는 걸 두려워하지 않고, 프로젝트에 맞는 최선의 기술 스택을 늘 고민하고 적용하려 노력합니다. 제 삶을 통해 여자도 재능과 야망이 있음을 보여주고자 합니다.',
                    photo: '',
                    // basePhoto: '../assets/images/imgJyBlack.png',
                    // selectedPhoto: '../assets/images/imgJyColor.png',
                    basePhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgJyBlack.png?raw=true',
                    selectedPhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgJyColor.png?raw=true',
                    email: 'jooyon@hittheants.com',
                    instagram:'yo0_lo0@instagram',
                    ig: 'https://www.instagram.com/yo0_lo0/'
                }, {
                    name: '조민재',
                    introduce: '',
                    // basePhoto: '../assets/images/imgMjBlack.png',
                    // selectedPhoto: '../assets/images/imgMjColor.png',
                    basePhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgMjBlack.png?raw=true',
                    selectedPhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgMjColor.png?raw=true',
                    email: 'finn.cho@hittheants.com',
                    instagram:'finn.cho@instagram',
                    ig: 'https://www.instagram.com/finn.cho/'
                }, {
                    name: '김지혜',
                    introduce: '내가 만든 것이 세상을 움직일 수 있다? 라는 막연한 꿈을 안고 디자인 종사자가 된 개미. 혼자 작업할 때와 또다르게 사람들과 함께 일할 때 생기는 시너지에 매력을 느끼며 힛디앤츠에 깊은 애정을 갖고 살아가는 일개 일개미입니다.',
                    photo: '',
                    // basePhoto: '../assets/images/imgJhBlack.png',
                    // selectedPhoto: '../assets/images/imgJhColor.png',
                    basePhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgJhBlack.png?raw=true',
                    selectedPhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgJhColor.png?raw=true',
                    email: 'jihyekim@hittheants.com',
                    instagram:'jihyesss@instagram',
                    ig: 'https://www.instagram.com/jihyesss/'
                }, {
                    name: '조현서',
                    introduce: '안녕하세요, 저는 새로운 시각적 경험에 관심이 많아 다양한 매체를 통해 창작하고, 사람들에게 전달하는 일을 하는 조현서라고 합니다. 헤엄이라는 이름으로 활동하고 있으며 앞으로도 분야를 한정 짓지 않고 많은 사람과 재미있는 일들을 해나가고 싶습니다.',
                    photo: '',
                    // basePhoto: '../assets/images/imgHsBlack.png',
                    // selectedPhoto: '../assets/images/imgHsColor.png',
                    basePhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgHsBlack.png?raw=true',
                    selectedPhoto: 'https://github.com/HITTHEANTS/hit-the-ants-site/blob/master/src/assets/images/imgHsColor.png?raw=true',
                    email: 'hyunseocho@hittheants.com',
                    instagram:'heum_ing_@instagram',
                    ig: 'https://www.instagram.com/heum_heum_/'
                }
            ]

        }
    },
    mounted(){
        this.onResize()
    },
    methods: {
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        },
        onResize () {
            var row = document.getElementById('row')
            row.style.width = window.innerWidth - 30 + 'px'
        }
    }
    
}
</script>

<style scoped>
.introduce-ants {
    font-size: 13px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 400;
    line-height: 23px;
}
body {
    margin:50px auto;
    width: 100%;
}
.name {
    font-size: 13px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 400;
    width: fit-content;
    float: left;

}
.email {
    padding-right: 10px;
    font-size: 10px;
    font-family: 'APPLE SD Gothic Neo','Apple';
    font-weight: 400;
    color: brownishGrey;
    float :right;
    width: fit-content;

}
#row {
    white-space: nowrap;/* 가로스크롤시 중요한 속성 */
    overflow-x: auto;
    overflow-y: hidden;
    padding: 10px 10px 5px;
    background: transparent;
    width: 400px;
}

#row .items {
    display: inline-block;
    margin-left: 5px;
}
#row .items >img{
    width : 78pt;
}

#row .items:first-child {
    margin-left: 0;
}

#row .items p {
    margin-bottom: 8px;
    text-indent: 7px;
}

#row .items ul {
    border-radius: 3px;
    border: 1px solid #b5b5b5;
    height: 135px;
    overflow-y: scroll;
    padding: 3px 3px 8px;
    background: #fff;
}


#row .items ul li a {
    display: block;
    overflow: hidden;
    margin-top: 8px;
    padding: 3px;
    color:black;
    font-size:12px;
    text-decoration:none;
}

#row .items ul li:first-child a {
    margin-top: 3px;
}

#row .items ul li.on a {
    border: 1px solid #c9cccf;
    border-radius: 3px;
    font-weight: bold;
    background-color: #efefef;
}
</style>
