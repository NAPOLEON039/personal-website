<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

</script>

<style scoped>
.app {
  height: 100%;
}

.nav {
  height: 50px;
}
</style>