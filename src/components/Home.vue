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
                    <p class="pp1">NAROŻNIKI</p>
                    <p class="pp2">POD</p>
                    <p class="pp3">WYMIAR</p>
                </div>
            </div>
            <div class="mid2">
                <div class="mid2-txt">
                    <p>ZOBACZ WIĘCEJ</p>
                </div>
            </div>
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
    }

    .mid-txt {
        font-size: 1.9vw;
        float: left;
        width: 18vw;
    }

    .pp2 {
        text-align: center;
    }

    .pp3 {
        text-align: right;
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
    }

    .mid2-txt {
        width: 20vw;
        height: 5vh;
        margin: 35vh 0 0 30vw
    }

    .mid2-txt p {
        width: 20vw;
    }

    .mid2:hover {
        background-color: #E4C68B;
    }

</style>