<template>
  <div  class="container">
      <h1>Informacion de Usario</h1>
      <!-- con esto realizamos el dinamismo del router el name sale del index-router -->
      <router-link :to="{ name:'usuarios', params:{id: item} }" v-for="(item,index) in ArregloUsuarios" :key="index">
          <button>{{item}}</button>
      </router-link>
      <Usuario></Usuario>
  </div>
</template>

<script>

import Usuario from '@/components/Usuario.vue'

export default {
    components:{
        Usuario
    },
    data(){
        return{
            ArregloUsuarios:[
                'Carla','Kai','Jefe'
            ]
        }
    }

}
</script>

<style>

</style>