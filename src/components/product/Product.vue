<template>
    <div class="prod-ac">
        <router-link class="prod-cont" tag="div" :to="'/nasze-produkty' + product.id">
            <img :src="getImgUrl(product.id)" />
        </router-link>

        <router-link class="prod-cont-txt" tag="div" :to="'/nasze-produkty' + product.id">
            <p>{{ product.name }} <i class="icon-right-1"></i></p>
        </router-link>
    </div>

</template>

<script>
    export default {
      props: ['product'],
      methods: {
          getImgUrl(pic) {
              return require('../../assets/furn/prod' + pic + '.png')
          }
      }
    }
</script>

<style lang="scss">

    .prod-cont {
        width: 25vw;
        height: 40vh;
        background-color: white;
        margin: 2vh 0 2vh 0;
        cursor: pointer;
        clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
        position: relative;
    }

    .prod-cont img {
        width: 20vw;
        margin: 6.6vh 0 0 2.5vw;
    }

    .prod-cont-txt {
        clip-path: polygon(100% 75%, 0% 100%, 100% 100%);
        background-color: white;
        height: 40vh;
        width: 25vw;
        margin-top: -42.1vh;
        position: absolute;
        cursor: pointer;
        transition: .8s;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: stretch;
    }

    .prod-cont:hover ~ .prod-cont-txt {
        background-color: #E4C68B;
        color: white
    }

    .prod-cont-txt:hover {
        background-color: #E4C68B;
        color: white
    }

    .prod-cont-txt p {
        width: auto;
        margin-right: 1vw;
    }

    .prod-cont-txt i {
        margin-left: 0.3vw;
    }

</style>