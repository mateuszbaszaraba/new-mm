<template>
    <div class="prod-det">
        <app-header style="background-color: black"></app-header>

        <div class="txt">
            
        </div>

        <app-productdata 
            style="margin-top: 20vh; position: absolute"
            :loadedProd="loadedProd"></app-productdata>
    </div>
</template>

<script>
    import header from '../Header';
    import productdata from './ProductData';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            appHeader: header,
            appProductdata: productdata
        },
        computed: {
            ...mapGetters(['allFurniture']),
            loadedProd() {
                return this.allFurniture.find((item) => item.id == this.$route.params.id)
            }
        }
    }
</script>