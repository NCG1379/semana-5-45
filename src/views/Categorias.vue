<template>

  <div class="articulo">    
      <categoria-section></categoria-section>
      <!-- If using vue-router -->
      <router-view></router-view>
    
  </div>

</template>

<script>
// @ is an alias to /src
import Categorias from "../components/Categoria.vue";

export default {
  name: "Categorias",
  components: {
    Categorias
  },
    data(){
        return{

        }
    },
    methods(){
        
    }
};
</script>