<template>
    <div class="prod-det">
        <app-header style="background-color: black" class="not-display"></app-header>
        <app-mobile-header style="background-color: black" class="display"></app-mobile-header>

        <app-productdata 
            style="margin-top: 30vh; position: absolute"
            :loadedProd="loadedProd"></app-productdata>

        <router-link class="prod-data-contact" tag="div" to="/kontakt">
            <p>MASZ PYTANIA? ZADZWOŃ</p>
        </router-link>

        <div class="footer4">
            <router-link to="/"><img src="../../assets/logo4.png" /></router-link>
            <div class="footer-txt4">
                MatMeble© Wszelkie prawa zastrzeżone
            </div>
        </div>
    </div>
</template>

<script>
    import header from '../Header';
    import mobileheader from '../MobileHeader';
    import productdata from './ProductData';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            appHeader: header,
            appProductdata: productdata,
            appMobileHeader: mobileheader
        },
        computed: {
            ...mapGetters(['allFurniture']),
            loadedProd() {
                return this.allFurniture.find((item) => item.id == this.$route.params.id)
            }
        }
    }
</script>

<style lang="scss">

    .prod-det {
        width: 100vw;
        height: 100vh;
        background-color: #E8E8E8;
    }

    .prod-data-contact {
        width: 100vw;
        height: 5vh;
        margin-top: 84vh;
        position: absolute;
        background-color: #E4C68B;
        color: white;
        font-size: 1vw;
        text-align: center;
        padding: 0.1vh 0 1vh 0;
        cursor: pointer;
    }

    .footer4 {
        background-color: #000000;
        margin-top: 90vh;
        text-align: center;
        height: 35vh;
        color: white;
        padding-top: 2vh;
        position: absolute;
        width: 100vw;
    }

    .footer4 img {
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

        .footer4 {
            margin-top: 100vh;
        }

        .prod-data-contact {
            margin-top: 94vh;
            font-size: 2.5vw;
        }

        .footer4 img {
            width: 10vw;
            height: auto;
            padding: 10vh 0 5vh 0;
        }
    }

</style>