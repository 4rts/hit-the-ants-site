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
        <v-flex xs12 mt-20 style="overflow:auto">
            <div>몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는몰두하는</div>
        </v-flex>
    </v-layout>
    <!-- <v-container class="about" grid-list-sm pa-0 align-center>
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
                            </div>
                        </v-card>
                    </v-row>
                </v-col>
                <v-col cols="12">
                    <v-row justify="center">
                        <v-card class="photo-card" v-for="(member,index) in memberList" :key="index" @click="selectProfile(index)">
                            <img :src="member.photo">
                        </v-card>
                    </v-row>
                </v-col>
            </v-flex>
            <v-flex>
                <div>{{selecetedProfile.name}}</div>
                <div>{{selecetedProfile.introduce}}</div>
                <div>{{selecetedProfile.name}}</div>
                <div><a src>{{selecetedProfile.ig}}</a></div>
            </v-flex>
        </v-layout>
    </v-container> -->
</template>

<script>
export default {
    data() {
        return {
            offsetTop: 0
        }
    },
    methods: {
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        }
    }
}
</script>

<style scoped>
.introduce-ants {
    font-size: 13px;
    font-family: 'Apple';
    font-weight: 400;
}
</style>