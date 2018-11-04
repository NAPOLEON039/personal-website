<template>
  <div class="home">
    <vue-typed-js :showCursor="false" :typeSpeed="40" :backSpeed="15" :smartBackspace="true" :loop="true" :strings="['Hey there 👋 ^1500', 'I am a Front-end web developer. ^500', 'I primarily work in Vuejs.', 'I work with Vanilla JS, CSS and HTML for simple projects.', 'But I choose Vuejs for big and complex ones. ^1000', ]">
      <h1 class="typing"></h1>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
  .home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
