<template>
    <div class="productgrid">
        <app-header style="background-color: black"></app-header>
        <div class="productgrid-txt">
            <p class="p3">WYSOKA JAKOŚĆ</p>
            <p class="p1"><span style="color: #E4C68B">INNOWACYJNE</span> TECHNOLOGIE</p>
        </div>
    </div>
</template>

<script>
    import header from '../Header';

    export default {
        components: {
            appHeader: header
        }
    }
</script>

<style lang="scss">
    .productgrid {
        width: 100vw;
        height: 200vh;
        background-color: #E8E8E8;
    }

    .productgrid-txt {
        width: 60vw;
        height: 20vh;
        color: #5E5E5E;
        text-align: center;
        position: absolute;
        margin: 30vh 20vw 12vh 20vw
    }

    .p3 {
        // font-size: 3.8vh
        font-size: 1.9vw;
    }

    .p1 {
        // font-size: 5vh
        font-size: 3vw;
    }
</style>