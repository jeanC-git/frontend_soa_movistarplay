<template>
  <div>
    <!-- TV EN VIVO -->
    <v-row>
      <v-col
        cols="12"
        md="12"
        xs="12"
        class="margin-0-padding-0"
        style="display:flex; align-items:center"
      >
        <p class="text-left" style="color:white; margin-left:4%; font-size:1.7rem">{{nombre}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" xs="12" class="margin-0-padding-0">
        <v-sheet class="mx-auto" elevation="8" max-width="100%" dark style="background:#000000">
          <v-slide-group
            v-model="model"
            class="pa-4"
            prev-icon="mdi-chevron-left"
            next-icon="mdi-chevron-right"
            show-arrows="mobile"
          >
            <v-slide-item
              v-for="contenido in data"
              :key="contenido.id"
              v-slot:default="{ active, toggle }"
            >
              <v-card height="140" width="250" class="margin-0-padding-0" @click="toggle">
                <v-img :aspect-ratio="16/9" :src="contenido.portada" class="margin-0-padding-0">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <p
                        class="text-center"
                        style="color:white; font-size:1.3rem;margin-top:30%"
                      >{{contenido.nombre}}</p>
                    </v-scale-transition>
                  </v-row>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <!-- TV EN VIVO -->
  </div>
</template>
<script>
export default {
  props: ["data", "nombre"],
  data() {
    return {
      model: "",
    };
  },
  methods: {},
  created() {
    // console.log(this.data);
  },
};
</script>