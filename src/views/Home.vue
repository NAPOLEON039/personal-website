<template>
  <div class="home">
    <vue-typed-js :showCursor="false" :typeSpeed="40" :backSpeed="15" :smartBackspace="true" :loop="true" :strings="['Hey there 👋 ^1500', 'I am a Front-end web developer. ^500', 'I primarily work in Vuejs.', 'I work with Vanilla JS, CSS and HTML for simple projects.', 'But I choose Vuejs for big and complex ones. ^1000', 'I am learning back-end technologies like Node.', 'With the goal of becoming a Full-Stack web developer. ^1000', 'I have an eye for good design ^500 and create my own UI for my projects.', 'I always push my knowledge to its limits ^500 and try to squeeze in something new ^350 everyday.', 'That\'s how I am as a developer. ^2000']">
      <h1 class="typing"></h1>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
