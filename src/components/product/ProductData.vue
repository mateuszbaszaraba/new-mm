<template>
<transition name="slideup" appear>
    <div class="prod-data">
        <img :src="getImgUrl(loadedProd.id)" class="imgPD" />
        <div class="prod-data-txt">
            <p class="dp1">{{ loadedProd.name }}</p>
            <p class="dp2">Długość: {{ loadedProd.dim1 }}</p>
            <p class="dp2">Powierzchnia Spania: {{ loadedProd.dim2 }}</p>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    props: {
        loadedProd: Object
    },
    methods: {
        getImgUrl(pic) {
              return require('../../assets/furn/prod' + pic + '.png')
        }
    }
}
</script>

<style lang="scss">

    .slideup-enter {
        opacity: 0;
    }

    .slideup-enter-active {
        animation: slideup-in 1s ease-out forwards;
        transition: opacity 1s;
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

    .prod-data {
        width: 90vw;
        height: 40vh;
        margin: 2vh 5vw 0 5vw;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .prod-data-txt {
        width: 40vw;
        height: 30vh;
        height: auto;
        float: left;
        border-left: 1px solid #5E5E5E;
        margin: 0 0 0 1vw;
        padding-left: 5vw;
    }

    .imgPD {
        width:30vw;
        float: left;
        padding: 2vh 3vw 0 10vw;
    }

    .dp2 {
        font-weight: 300; 
        color: #5E5E5E; 
        font-size: 1.5vw
    }

    .dp1 {
        font-weight: 500; 
        color: #5E5E5E; 
        font-size: 1.9vw
    }

    @media only screen and (max-width: 700px) {
    
        .dp2 {
            font-size: 3.5vw
        }

        .dp1 {
            font-size: 4vw
        }

        .prod-data {
            padding: 5vh 0 5vh 0;
        }
    }

</style>