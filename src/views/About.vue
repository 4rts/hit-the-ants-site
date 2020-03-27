<template>
    <v-container class="about" grid-list-sm pa-0 align-center>
        <v-layout v-scroll:#scroll-target="onScroll" column>
            <v-flex>
                <v-col class="introduce-context" cols="12">
                    <v-row>
                        <v-card class="v-card-container">
                            <div class="apple-sandol-font gray">
                                “행복의 비결은 현재의 순간을 즐기는 것,<br>
                                지금 자기 앞에 있는 일에 몰두하는 것, 땅 위를 걷는 것”<br>
                                -베르나르 베르베르 ‘개미’ 중-
                            </div>
                        </v-card>
                        <v-card class="v-card-container">
                            <div>
                                <img class="mb-4" src="../assets/images/small-hittheants.png">
                            </div>
                            <div class="apple-sandol-font">
                                점으로부터 시작된<br>
                                우주 안 작디작은 은하, 자그마한 행성,<br>
                                그 위를 딛고 있는 누군가가 바라보는<br>
                                땅 위의 또 다른 점들.<br>
                                <br>
                                더듬이를 곤두세우고 나선 작은 행보가<br>
                                누군가를 이끄는 길이 되기도 합니다.<br>
                                땅 위에 남기는 미소한 점의 자취,<br>
                                개미들로부터 시작하는 우주를 그립니다<br>
                            </div>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <v-row justify="center">
                        <v-card class="photo-card">
                            <img src="../assets/images/imgGhBlack.png">
                        </v-card>
                        <v-card class="photo-card">
                            <img src="../assets/images/imgGhBlack@3x.png">
                        </v-card>
                        <v-card class="photo-card">
                            <img src="../assets/images/imgGhBlack@3x.png">
                        </v-card>
                        <v-card class="photo-card">
                            <img src="../assets/images/imgGhBlack@3x.png">
                        </v-card>
                        <v-card class="photo-card">
                            <img src="../assets/images/imgGhBlack@3x.png">
                        </v-card>
                        <v-card class="photo-card">
                            <img src="../assets/images/imgGhBlack@3x.png">
                        </v-card>
                        <v-card class="photo-card">
                            <img src="../assets/images/imgGhBlack@3x.png">
                        </v-card>
                        <!-- <v-card class="photo-card" v-for="(member,index) in memberList" :key="index">
                            <img :src="member.photo">
                        </v-card> -->
                    </v-row>
                </v-col>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            offsetTop: 0,
            memberList: [
                {name: '정진혁', introduce: '', photo: '/public/imgGhBlack.png'},
                {name: '정진혁', introduce: '', photo: '../assets/images/imgGhBlack.png'},
                {name: '정진혁', introduce: '', photo: '../assets/images/imgGhBlack.png'},
                {name: '정진혁', introduce: '', photo: '../assets/images/imgGhBlack.png'},
                {name: '정진혁', introduce: '', photo: '../assets/images/imgGhBlack.png'},
                {name: '정진혁', introduce: '', photo: '../assets/images/imgGhBlack.png'},
                {name: '정진혁', introduce: '', photo: '../assets/images/imgGhBlack.png'},
            ]

        }
    },
    methods: {
        moveToNavigationLink(link) {
            if (link != this.$route.name) {
                this.$router.push({name: link})
                this.activingButton = link
            }
        },
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        }
    }
}
</script>

<style scoped>
.about {
    max-width: 1060px;
}
.v-card-container {
    box-shadow: none;
    width: 50%;
}
.apple-sandol-font {
    font-family: "Apple";
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
}
.apple-sandol-font.gray {
    color: #666765;
}
.introduce-context {
    margin: 48px 0;
}
.photo-card {
    width: 140px;
    height: 140px;
    margin: 0 5px;
}

.introduce-context .left-side {
    display: table-cell;
    text-align: left;
    vertical-align: top;
    color: #00000040;
    /* width: 450px; */
}

.introduce-context .right-side {
    display: table-cell;
    text-align: left;
    color: #000000;
    /* width: 520px; */
}
.right-side .small-logo {
    margin-bottom: 15px;
}
</style>