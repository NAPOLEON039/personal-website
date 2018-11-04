<template>
  <div class="about">
    <h1>Here is some more information about me...</h1>
    <vue-typed-js :showCursor="false" :typeSpeed="40" :backSpeed="15" :smartBackspace="true" :loop="true" :strings="['^1000 Hello 🙂 ^1000','As I mentioned before, I am a Front-end developer using Vuejs as my go-to framework.', 'In addition to that, ^300 I am learning back-end technologies like Node.', 'With the goal of becoming a Full-Stack web developer. ^1000', 'I have an eye for good design ^500 and try to create my own UI for my projects ^200 as much as I can.', 'I always push my knowledge to its limits ^500 and try to squeeze in something new ^350 everyday.', 'That\'s how I am as a developer. ^2000', 'A little about my personal life... ^600', 'I like reading books a lot.', 'When I\'m not working on projects, ^250 or learning something new, ^100 I read books not related to developing and coding.', 'I mostly read non-fiction books ^150 and occasionally some fiction novels.']">
      <h2 class="typing"></h2>
    </vue-typed-js>
  </div>
</template>
