<template>
<transition name="slideup" appear>
    <div class="prod-ac">
        <router-link class="prod-cont" tag="div" :to="'/nasze-produkty/' + product.id">
            <img :style="myStyle(product.id)" :src="getImgUrl(product.id)" />
        </router-link>

        <router-link class="prod-cont-txt" tag="div" :to="'/nasze-produkty/' + product.id">
            <p>{{ product.name }} <i class="icon-right-1"></i></p>
        </router-link>
    </div>
</transition>
</template>

<script>
    export default {
      props: ['product'],
      data() {
          return {
              diff: false
          }
      },
      methods: {
          getImgUrl(pic) {
              return require('../../assets/furn/prod' + pic + '.png')
          },
          myStyle(index) {
              if(index > 23) {
                  return 'margin-top: -2vh'
              } else {
                  return 'margin-top: 6.6vh'
              }
          }
      },
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
        transition: .5s;
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

    @media only screen and (max-width: 700px) {
    .prod-cont {
        width: 80vw;
        
    }

    .prod-cont img {
        width: 50vw;
    }

    .prod-cont-txt {
        width: 80vw;
    }

    }

</style>