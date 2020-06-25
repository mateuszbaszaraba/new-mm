<template>
    <div class="prod-cont">
        <router-link :to="'/nasze-produkty' + product.id"><img :src="getImgUrl(product.id)" /></router-link>
        <div class="prod-cont-txt">
            <p>{{ product.name }}</p>
        </div>
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
        background-color: red;
    }
    .prod-cont img {
        width: 20vw;
    }

</style>