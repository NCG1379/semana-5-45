<template>
<div>

  <div v-if="estado">
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
        <a class="navbar-brand " href="# ">
            <img src="https://www.flaticon.com/svg/static/icons/svg/1934/1934014.svg" width="30 " height="30
    " class="d-inline-block align-top " alt=" " loading="lazy "> SPRINT 5
        </a>
        <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
            <ul class="navbar-nav ">
                <li class="nav-item active ">
                    <a class="nav-link " v-on:click="ingresar" href="# ">Sistema <span class="sr-only ">(current)</span></a>
                </li>
            </ul>
        </div>
      </nav>

    <div id="services">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner slider-size">
        <div class="carousel-item active">
            
          <img src="https://www.constructionexec.com/assets/site_18/images/article/021220115350.jpg?width=1280" width="86%" height="700" class="d-block sliders-images" alt="Calidad del Grano" >
          <div class="carousel-caption d-none d-md-block">
            <h2 class="slider-text-title">Capacitación Presencial</h2>
            <p class="paragraph-sliders-text slider-text-des">Encontramos el valor de las personas fundamental para la productividad empresarial.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://4af84e33-a-62cb3a1a-s-sites.googlegroups.com/site/tecnovirtualnetocreativo/roles-y-funciones-de-la-educacion-virtual/shutterstock_231252718-copia.jpg?attachauth=ANoY7crvXltaqnCe_H-ghl7A_JauOPG-1HFoXA-HnjHC9SWMj6Tejs2HOm9OT3XHOQWTtkNvgE5dnqK5ybIGKnpYCr4EegiNzvvLAUMyirY9HuT4N5I0s7MhSs0Ye_VJ3XmCDstrDadvQMllnVPYtk1FwULeZbp_ySoPGUSXqKz857FSdOAfyO7-rxz4uU14pcN4t-7wjfCF3SIzGfRzMJOrVD0eS0u0aXashE35IoB0ZCUzX7Kn-JiC8WpqEpWAAuLwYmPFChDQv_9yzkzFNS_JLgpf1Bps7heTuiF3Mb8qNRejaBmEALpJ1UKOVku3ZrxNI5DjNdrh&attredirects=0" width="86%" height="700" class="d-block sliders-images" alt="Consumir Producto">
          <div class="carousel-caption d-none d-md-block">
            <h2 class="slider-text-title">Capacitación Virtual</h2>
            <p class="paragraph-sliders-text slider-text-des">Todos los clientes son únicos y especiales, por eso ofrecemos personalizar tu experiencia.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://lieve.co/my_media/2018/09/gamificacion_lieve.png" width="86%" height="700" class="d-block sliders-images" alt="Franquicia de Tiendas">
          <div class="carousel-caption d-none d-md-block">
            <h2 class="slider-text-title">Cursos Gamificados</h2>
            <p class="paragraph-sliders-text slider-text-des">Ofrecemos los mejores cursos de gamificación para el desarrollo de habilidades blandas.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
    </div>

    <div>
      <home/>
    </div>

    <footer class="page-footer bg-secondary text-white pt-4">

        <!-- Footer Text -->
        <div class="container-fluid text-center text-md-left">

            <!-- Grid row -->
            <div class="row">

                <!-- Grid column -->
                <div class="col-md-6 mt-md-0 mt-3">

                    <!-- Content -->
                    <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae harum esse fugiat. Itaque, culpa?</p>

                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none pb-3">

                <!-- Grid column -->
                <div class="col-md-6 mb-md-0 mb-3">

                    <!-- Content -->
                    <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.
                    </p>

                </div>
                <!-- Grid column -->

            </div>
            <!-- Grid row -->

        </div>
        <!-- Footer Text -->

        <!-- Copyright -->
        <div class="footer-copyright text-center py-1 bg-dark">(c) 2020 Copyright: DAD
        </div>
        <!-- Copyright -->

    </footer>
  </div>

    <div v-else>
    <v-app id="app">
      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
      >
        <v-list dense>
          <template>
            <v-list-item @click="home">
              <v-list-item-action>
                <v-icon>home</v-icon>
              </v-list-item-action>
              <v-list-item-title>
                Inicio
              </v-list-item-title>
            </v-list-item>
          </template>
          <template v-if="logueado">
            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title>
                    Almacén
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name: 'categoria'}">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Categorías
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name: 'articulo'}">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Artículos
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group>
              <v-list-item slot="activator">
                <v-list-item-content>
                  <v-list-item-title>
                    Accesos
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{name: 'usuario'}">
                <v-list-item-action>
                  <v-icon>table_chart</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Usuarios
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template> 
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="silver darken-3"
        dark
      >
        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-3"
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <span class="hidden-sm-and-down">Sistema</span>
        </v-toolbar-title>      
        <v-spacer></v-spacer>
        <v-btn @click="salir()" icon v-if="logueado">
          <v-icon>logout</v-icon> Salir
        </v-btn>
        <v-btn :to="{name: 'login'}" icon v-else>
          <v-icon>apps</v-icon> Login
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-slide-y-transition mode="out-in">
            <router-view/>
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <v-footer height="auto">
        <v-layout justify-center>
          <v-flex text-xs-center>
            <v-card flat tile color="primary" class="white--text">
              <v-card-text class="white--text pt-0">
                Proyecto final &copy;2020
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
    </div>

</div>

</template>

<script>
import home from './components/home.vue'
export default {
  components: { home },
  name: 'App',

    data () {
      return {
      drawer: false,
      estado:1
      }
    },

  computed:{
    logueado(){
      return this.$store.state.usuario;
    },
  },
  created(){
    this.$store.dispatch("autoLogin");
  },
  methods:{
    salir(){
      this.$store.dispatch("salir");
      this.estado=1
    },

    ingresar(){
      this.estado=0
    },

    home(){
      this.estado=1

    }
  }
};
</script>



<style>
/* Estilo para los servicios */
.sliders-images {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border:none;
    width: 90%;
}

.slider-size{
    width: 100%;
    height: 700;
}

.paragraph-sliders-text{
    font-size: 20px;
    font-style: italic;
}

.slider-text-title{
  font-family:fantasy;
  color: black;
  -webkit-text-fill-color: orangered; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
  font-size: 65px;
  font-style: oblique;
  font-weight: bold;
}

.slider-text-des{
  font-family:Georgia, 'Times New Roman', Times, serif;
  color:black;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: white;
  font-size: 35px;
  font-weight: bold;
}

</style>