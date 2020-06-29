<template>
    <div>
        {{loadedProd.name}}
        {{loadedProd.dim1}}
        {{loadedProd.dim2}}
    </div>
</template>

<script>
export default {
    props: {
        loadedProd: Object
    },
}
</script>