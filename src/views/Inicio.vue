<template>
  <div style="background:black;">
    <AppBar></AppBar>
    <!-- MAS VISTOS -->
    <v-row class="mt-16">
      <v-col
        cols="12"
        md="6"
        xs="12"
        class="margin-0-padding-0"
        style="display:flex; justify-content:center; vertical-align:middle;"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            color="grey lighten-4"
            width="100%"
            height="max-content"
            class="margin-0-padding-0"
          >
            <v-img :aspect-ratio="16/9" src="images/farfan.jpg">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <p
                    style="text-align: center; font-size: 2rem"
                  >Farfán - La Foquita El 10 de la calle</p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="6" xs="12" style="margin:0; padding-top:0;">
        <v-row>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" xs="12" class="margin-0-padding-0">
            <v-hover v-slot:default="{ hover }">
              <v-card color="grey lighten-4" width="100%" class="margin-0-padding-0">
                <v-img :aspect-ratio="16/9" src="images/farfan.jpg" class="margin-0-padding-0">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out blue-grey lighten-4 darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <p
                        style="text-align: center; font-size: 1rem"
                      >Farfán - La Foquita El 10 de la calle</p>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- MAS VISTOS -->

    <!-- ===========================================  -->
    <CarouselContenido v-for="contenido in tipo_contenido" :key="contenido.id" :data="contenido" />
  </div>
</template>


<script>
import AppBar from "../components/VAppBar.vue";
import CarouselContenido from "../components/CarouselContenido.vue";

export default {
  components: {
    AppBar,
    CarouselContenido
  },
  name: "Home",
  data() {
    return {
      model: null,
      tipo_contenido: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    };
  }
};
</script>
