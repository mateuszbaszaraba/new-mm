<template>
    <div class="prod-det">
        <app-header style="background-color: black"></app-header>
        <app-prodrend style="position: absolute; margin-top: 50vh" :prod="prods"></app-prodrend>

        <!--
            I need to show here {id, name, dim1, dim2} from data/furnitures.js
        //-->


    </div>
</template>

<script>
    import header from '../Header';
    import prodrend from './ProdDetRen';

    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        components: {
            appHeader: header,
            appProdrend: prodrend
        },
        computed: {
            prods(id) {
                return 'kook'
            }
        }
    }
</script>