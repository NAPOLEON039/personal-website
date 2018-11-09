<template>
  <div class="app">
    <nav class="navbar sticky-top navbar-light bg-light d-flex justify-content-end">
      <div class="navbar-nav d-flex flex-row justify-content-around" id="links">
        <router-link class="navbar-item nav-link p-2" to="/">Home</router-link>
        <router-link class="navbar-item nav-link p-2" to="/about">About</router-link>
        <router-link class="navbar-item nav-link p-2" to="/projects">Projects</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

</script>

<style scoped>
.app {
  height: 100%;
}

#links {
  width: 450px;
}
</style>