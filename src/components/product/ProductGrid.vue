<template>
    <div class="productgrid">

        <app-header style="background-color: black" class="not-display"></app-header>
        <app-mobile-header style="background-color: black" class="display"></app-mobile-header>

        <transition name="fade" appear>
            <div class="productgrid-txt">
                <p class="p3">WYSOKA JAKOŚĆ</p>
                <p class="p1"><span style="color: #E4C68B">INNOWACYJNE</span> TECHNOLOGIE</p>
            </div>
        </transition>

        <app-products style="margin-top: 70vh; position: absolute"></app-products>

        <div class="footer2">
            <router-link to="/"><img src="../../assets/logo4.png" /></router-link>
            <div class="footer-txt2">
                MatMeble© Wszelkie prawa zastrzeżone
            </div>
        </div>
    </div>
</template>

<script>
    import header from '../Header';
    import products from './Products';
    import mobileheader from '../MobileHeader';

    export default {
        components: {
            appHeader: header,
            appProducts: products,
            appMobileHeader: mobileheader
        }
    }
</script>

<style lang="scss">

    .fade-enter {
        opacity: 0
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .productgrid {
        width: 100vw;
        height: 555vh;
        background-color: #E8E8E8;
    }

    .productgrid-txt {
        width: 60vw;
        height: 20vh;
        color: #5E5E5E;
        text-align: center;
        position: absolute;
        margin: 33vh 20vw 12vh 20vw
    }

    .p3 {
        // font-size: 3.8vh
        font-size: 1.9vw;
    }

    .p1 {
        // font-size: 5vh
        font-size: 3vw;
    }

    .footer2 {
        background-color: #000000;
        margin-top: 520vh;
        text-align: center;
        height: 35vh;
        color: white;
        padding-top: 2vh;
        position: absolute;
        width: 100vw;
    }

    .footer2 img {
        width: 6vw;
        height: auto;
        padding: 10vh 0 5vh 0;
    }

    .display {
        display: none;
    }

    @media only screen and (max-width: 700px) {
        .not-display {
            display: none;
        }

        .display {
            display: block;
        }
    }
</style>