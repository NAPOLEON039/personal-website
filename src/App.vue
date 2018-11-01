<template>
  <div id="app">
    <div id="nav">
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  height: 100vh;
  background-color: #eec0c6;
background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);


}
</style>
