<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/homepage">Home Page</router-link> |
    <router-link to="/properties">All properties</router-link> |
    <router-link to="/property">Single Properties</router-link> |
    <router-link to="/adminpage">Admin</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1{
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #2c3e50;
}

nav {
  padding: 30px;
  text-transform: uppercase;
  line-height: 1px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #7EA8F8;
}
</style>
