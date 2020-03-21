<template>
    <div class="about">
        <div class="introduce-context">
            <div class="left-side apple-sandol-font">
                “행복의 비결은 현재의 순간을 즐기는 것,<br>
                지금 자기 앞에 있는 일에 몰두하는 것, 땅 위를 걷는 것”<br>
                -베르나르 베르베르 ‘개미’ 중-
            </div>
            <div class="right-side">
                <img class="small-logo" src="../assets/images/small-hittheants.png">
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
            </div>
        </div>
    </div>
</template>


<style scoped>
.about {
    position: relative;
}
.introduce-context {
    display: table;
    table-layout: fixed;
    margin-top: 60px;
    height: 350px;
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
.apple-sandol-font {
    font-family: "Apple";
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
}
</style>
style