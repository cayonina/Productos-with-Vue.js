<template>
  <div id="app">
    <div id="nav" class="container">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacto">Contacto</router-link>  
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/usuarios">Usuarios</router-link>  
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>  
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/singup">Singup</router-link>  
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
/* 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
