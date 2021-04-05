<template>
  <router-view />
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link> -->
  </div>

  <h1>Soy un h2</h1>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
// Se llama a normalize sólo desde App.vue.
@import "@/scss/_normalize.scss";
@import "@/scss/_base.scss";
@import "@/scss/_fonts.scss";
@import "@/scss/_helpers.scss";
</style>
