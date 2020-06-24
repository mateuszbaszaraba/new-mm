<template>
    <div class="home">

        <div class="first">
            <div class="first-txt">
                <p class="p3">WYSOKA JAKOŚĆ</p>
                <p class="p1"><span style="color: #E4C68B">INNOWACYJNE</span> TECHNOLOGIE</p>
            </div>

            <div class="mid">
                <img src="../assets/nar-boss.png" />
                <div class="mid-txt">
                    <p style="font-weight: 300">NAROŻNIKI POD</p>
                    <p style="font-weight: 500; line-height: 1vh">WYMIAR</p>
                </div>
            </div>
            <router-link tag="div" class="mid2" to="/nasze-produkty">
                <div class="mid2-txt">
                    <p>ZOBACZ WIĘCEJ</p>
                    <i class="icon-right-1"></i>
                </div>
            </router-link>
        </div>

        <div class="aboutus">
            <p>dwad</p>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">

    .home {
        width: 100vw;
        height: 200vh;
        background-color: #E8E8E8;
    }

    .first {
        background-image: url('../assets/bg_homev2.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;
        height: 90vh;
    }

    .first-txt {
        position: absolute;
        top: 25vh;
        left: 15vw;
        color: white;
        letter-spacing: 0.1vw;
    }

    .p3 {
        // font-size: 3.8vh
        font-size: 1.9vw;
    }

    .p1 {
        // font-size: 5vh
        font-size: 3vw;
    }

    .mid {
        background-color: white;
        width: 80vw;
        height: 40vh;
        position: absolute;
        top: 70vh;
        margin-left: 10vw;
        margin-right: 10vw;
        clip-path: polygon(100% 70%, 100% 0, 0 0, 0 100%);
    }

    .mid img {
        height: auto;
        width: 45vw;
        padding: 2vh 0 0 2vw;
        float: left;
        pointer-events: none;
    }

    .mid-txt {
        font-size: 1.9vw;
        float: left;
        width: 18vw;
        margin: 9vh 0 0 4vw;
        border-left: 1px solid black;
        padding-left: 4vw;
    }

    .mid2 {
        background-color: white;
        height: 40vh;
        width: 80vw;
        position: absolute;
        top: 69.9vh;
        margin-left: 10vw;
        margin-right: 10vw;
        clip-path: polygon(100% 70%, 0% 100%, 100% 100%);
        transition: .8s;
        text-align: right;
        cursor: pointer;
        color: #E4C68B;
    }

    .mid2-txt {
        width: 40vw;
        height: 5vh;
        margin: 31.7vh 0 0 51vw;
        font-size: 2.3vh;
    }

    .mid2-txt p {
        width: 20vw;
        float: left;
    }

    .mid2-txt i {
        float: left;
        padding-top: 2.4vh;
        padding-left: 2vw;
    }

    .mid2:hover {
        background-color: #E4C68B;
        color: white;
    }

</style>