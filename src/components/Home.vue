<template>
    <div class="home">
        
        <app-header class="not-display"></app-header>
        <app-mobile-header class="display"></app-mobile-header>

        <div class="first">

            <transition name="fade" appear>
                <div class="first-txt">
                    <p class="p3">WYSOKA JAKOŚĆ</p>
                    <p class="p1"><span style="color: #E4C68B">INNOWACYJNE</span> TECHNOLOGIE</p>
                </div>
            </transition>

            <transition name="slideup" appear>
                <div class="mid">
                    <img src="../assets/nar-boss.png" />
                    <div class="mid-txt">
                        <p style="font-weight: 300; color: #5E5E5E">NAROŻNIKI POD</p>
                        <p style="font-weight: 500; line-height: 1vh; color: #5E5E5E">WYMIAR</p>
                    </div>
                </div>
            </transition>

            <transition name="slideright" appear>
                <router-link tag="div" class="mid2" to="/nasze-produkty">
                    <div class="mid2-txt">
                        <p>ZOBACZ WIĘCEJ</p>
                        <i class="icon-right-1"></i>
                    </div>
                </router-link>
            </transition>

        </div>

        <div class="product">
            <div class="product-txt">
                <p class="productp1">NASZE PRODUKTY</p>
                <p class="productp2">Nasza firma oferuje duży wachlarz produktów. Począwszy od kanapy, po fetele, aż do narożnika. 
                    Nasi klienci mają możliwość wyboru tkaniny oraz jej koloru. Oprócz tego, nasze produkty można 
                    zamawiać w ustalonym wymiarze. Każdy mebel w naszej kolekcji ma możliwość spania oraz pojemnik. 
                    Oferujemy także dostawę do naszych klientów.</p>
            </div>
        </div>

        <div class="aboutus">
            <div class="aboutus-txt">
                <p class="aboutus1">O NAS</p>
                <p class="aboutus2">Jesteśmy firmą działającą już od ponad prawie 17 lat. Przez ten okres opracowaliśmy
                     najnowsze i najlepsze technologie w tworzeniu naszych produktów. Dzięki temu, mamy pewność, iż 
                     nawet najbardziej wymagający klienci bedą zadowoleni. Przy wykonywaniu naszych produktów, używamy
                      najwyższej jakości materiałów, sprężyn itd. Każdy klient jest inny, oraz potrzebuje czegoś innego. 
                      Nasza firma zapewnia indywidualne podejście do każdego konsumenta.</p>
            </div>
        </div>

        <div class="footer">
            <router-link to="/"><img src="../assets/logo4.png" /></router-link>
            <div class="footer-txt">
                MatMeble© Wszelkie prawa zastrzeżone
            </div>
        </div>

    </div>
</template>
<script>
import header from './Header'
import mobileheader from './MobileHeader'

export default {
    components: {
        appHeader: header,
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

    .slideup-enter {
        opacity: 0;
    }

    .slideup-enter-active {
        animation: slideup-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slideup-leave-active {
        animation: slideup-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slideup-in {
        from {
            transform: translateY(20vh);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slideup-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20vh);
        }
    }

    .slideright-enter {
        opacity: 0;
    }

    .slideright-enter-active {
        animation: slideright-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slideup-leave-active {
        animation: slideright-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slideright-in {
        from {
            transform: translateX(20vw);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideright-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(20vw);
        }
    }

    .home {
        width: 100vw;
        height: 260vh;
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
        border-left: 1px solid #5E5E5E;
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

    .product {
        width: 100vw;
        height: 60vh;
        position: absolute;
        margin-top: 30vh;
    }

    .product-txt {
        width: 80vw;
        height: 20vh;
        // background-color: green;
        margin-left: 10vw;
        margin-right: 10vw;
        margin-top: 17vh;
        text-align: center;
    }

    .productp1 {
        color: #5E5E5E;
        font-size: 2.4vw;
    }

    .productp2 {
        color: #5E5E5E;
        font-size: 1.5vw;
    }

    .aboutus {
        width: 100vw;
        height: 80vh;
        position: absolute;
        margin: 75vh 0 0 0;
    }

    .aboutus-txt {
        width: 80vw;
        height: 30vh;
        margin-top: 17vh;
        margin-left: 7vw;
        margin-right: 7vw;
        text-align: center;
        background-color: white;
        padding: 10vh 3vw 10vh 3vw;
    }

    .aboutus1 {
        color: #5E5E5E;
        font-size: 2.4vw;
    }

    .aboutus2 {
        color: #5E5E5E;
        font-size: 1.5vw;
    }

    .footer {
        background-color: #000000;
        margin-top: 140vh;
        text-align: center;
        height: 35vh;
        color: white;
        padding-top: 2vh
    }

    .footer img {
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

        .p3 {
            // font-size: 3.8vh
            font-size: 4.5vw;
        }

        .p1 {
            // font-size: 5vh
            font-size: 5vw;
        }

        .first-txt {
            z-index: 8;
        }

        .mid {
            z-index: 8;
        }

        .mid2 {
            z-index: 8;
        }

        .mid img {
            padding: 11vh 0 0 2vw;
        }

        .mid-txt {
            font-size: 3vw;
            margin: 11.5vh 0 0 4vw;
        }

        .mid2-txt {
            width: 40vw;
            margin: 32.4vh 0 0 46vw;
            font-size: 2.3vh;
        }

        .mid2-txt p {
            width: 25vw;
            float: left;
        }

        .productp1 {
            color: #5E5E5E;
            font-size: 5vw;
        }

        .productp2 {
            color: #5E5E5E;
            font-size: 3vw;
        }

        .aboutus1 {
            color: #5E5E5E;
            font-size: 5vw;
        }

        .aboutus2 {
            color: #5E5E5E;
            font-size: 3vw;
        }

        .product {
            margin-top: 25vh;
        }

        .aboutus-txt {
            width: 80vw;
            height: 30vh;
            margin-top: 17vh;
            margin-left: 7vw;
            margin-right: 7vw;
            text-align: center;
            background-color: white;
            padding: 10vh 3vw 20vh 3vw;
        }

        .footer {
            background-color: #000000;
            margin-top: 150vh;
            text-align: center;
            height: 35vh;
            color: white;
            padding-top: 2vh
        }

        .footer img {
            width: 10vw;
            height: auto;
            padding: 10vh 0 5vh 0;
        }
    }

</style>