<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('initProducts')
  }
}

</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
  }

  ::-moz-selection { /* Code for Firefox */
  background: #E4C68B;
}

::selection {
  background: #E4C68B;
}
</style>
