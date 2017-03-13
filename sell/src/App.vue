<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      I am header
    </div>
    <div class="content">
      I am header
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style>

</style>
