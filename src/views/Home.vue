<template>
  <div class="home">
    <vue-typed-js :showCursor="false" :typeSpeed="40" :backSpeed="15" :smartBackspace="true" :loop="true" :strings="['Hey there 👋 ^1000', 'I am a front-end web developer.', 'I primarily work in Vuejs.', 'I use HTML, CSS and plain old Vanilla JavaScript for simple projects.', 'When necessary, ^500 I make use of Vue.']">
      <h2 class="typing"></h2>
    </vue-typed-js>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>