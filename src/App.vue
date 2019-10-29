<template>
  <div id="app">
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <router-link to="/apresentacao">Apresentação</router-link>
      <router-link to="/contato">Contato</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
}
</style>
