<template>
  <div  class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenido a Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
