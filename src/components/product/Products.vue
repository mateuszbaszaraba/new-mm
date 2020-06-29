<template>
    <div class="cont">
        <app-product v-for="productt in productss" :key="productt.id" :product="productt"></app-product>
    </div>
</template>

<script>
    import product from './Product';

    export default {
        components: {
            appProduct: product
        },
        computed: {
            productss() {
                return this.$store.getters.allFurniture
            }
        }
    }
</script>

<style lang="scss">

    .cont {
        width: 90vw;
        height: 80vh;
        margin: 0 5vw 0 5vw;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
    }

</style>