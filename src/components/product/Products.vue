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
                return this.$store.getters.products
            }
        }
    }
</script>

<style lang="scss">

    .cont {
        width: 90vw;
        height: 40vh;
        margin: 0 5vw 0 5vw;
    }

</style>