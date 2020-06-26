<template>
    <div class="productgrid">
        <app-header style="background-color: black"></app-header>
        <div class="productgrid-txt">
            <p class="p3">WYSOKA JAKOŚĆ</p>
            <p class="p1"><span style="color: #E4C68B">INNOWACYJNE</span> TECHNOLOGIE</p>
        </div>

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

    export default {
        components: {
            appHeader: header,
            appProducts: products
        }
    }
</script>

<style lang="scss">
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
        margin: 32vh 20vw 12vh 20vw
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
</style>