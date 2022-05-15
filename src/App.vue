<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/' }">Profile</router-link>

    <router-link class="link" :to="{ path: '/Contact' }">Contact</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


<style>
#app {
  margin: 100px;
  text-align: center;
}

.link {
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: inherit;
}

.router-link-exact-active {
  background-color: cornflowerblue;
}
</style>







