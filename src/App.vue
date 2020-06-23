<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/Header';

export default {
  components: {
    appHeader: header
  }
}

</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
</style>
