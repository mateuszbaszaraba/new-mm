<template>

    <div class="contact">
        <app-header style="background-color: black"></app-header>

        <div class="wdf">
            <div class="wdf-txt">
                <p class="c1">GDZIE MOŻNA NAS ZNALEŹĆ</p>
                <p class="c2"><b>SOBOTA</b> - TARGOWISKO DZIAŁOSZYN</p>
                <p class="c2"><b>NIEDZIELA</b> - GIEŁDA TOWAROWA W CZĘSTOCHOWIE (STADION CKM WŁÓKNIARZ)</p>
            </div>
        </div>

        <div class="info">
            <div class="info-txt">
                <p class="c1">DANE KONTAKTOWE</p>
                <p class="c2">Marcin Baszaraba</p>
                <p class="c2">ul. Parkowa 11</p>
                <p class="c2">Wierzchowisko, 42-233 Mykanów</p>
                <p class="c2">Nr. Tel.: 604-381-612</p>
                <p class="c2">Email: matmeble@onet.eu</p>
            </div>
        </div>

        <div class="map">
            <div class="map-txt">
                <p class="c1" style="margin-bottom: 8vh">MAPA DOJAZDU DO NAS</p>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.8420954243247!2d19.1327942158009!3d50.87112297953558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b150e88b45c7%3A0x986ec929167b03e1!2sParkowa%2011%2C%2042-233%20Wierzchowisko!5e0!3m2!1spl!2spl!4v1593180325808!5m2!1spl!2spl" 
                    width="2000" 
                    height="400" 
                    frameborder="0" 
                    style="border:0;" 
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="0"></iframe>
            </div>
        </div>

        <div class="footer3">
            <router-link to="/"><img src="../assets/logo4.png" /></router-link>
            <div class="footer-txt3">
                MatMeble© Wszelkie prawa zastrzeżone
            </div>
        </div>
    </div>
    
</template>

<script>
    import header from './Header';

    export default {
        components: {
            appHeader: header
        }
    }
</script>

<style lang="scss">

    .c2 {
        // font-size: 3.8vh
        font-size: 1vw;
    }

    .c1 {
        // font-size: 5vh
        font-size: 2.1vw;
    }

    .contact {
        height: 220vh;
        width: 100vw;
        background-color: #E8E8E8;
    }

    .wdf {
        width: 80vw;
        background-color: white;
        margin: 30vh 10vw 0 10vw;
        position: absolute;
        text-align: center;
        color: #5E5E5E;
        padding: 1vh 0 6vh 0;
    }

    .info {
        width: 100vw;
        position: absolute;
        margin-top: 70vh;
        background-color: #E4C68B;
        text-align: center;
        color: #5E5E5E;
        padding: 1vh 0 6vh 0;
    }

    .map {
        text-align: center;
        position: absolute;
        margin-top: 120vh;
        width: 100vw;
        color: #5E5E5E;
    }

    .footer3 {
        background-color: #000000;
        margin-top: 200vh;
        text-align: center;
        height: 35vh;
        color: white;
        padding-top: 2vh;
        position: absolute;
        width: 100vw;
    }

    .footer3 img {
        width: 6vw;
        height: auto;
        padding: 10vh 0 5vh 0;
    }

</style>