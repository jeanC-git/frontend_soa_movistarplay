<template>
  <div style="background:#272727">
    <!-- ============== CONTENT ============= -->
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Movistar Play"
          class="shrink"
          contain
          src="images/movistar-logo.png"
          transition="scale-transition"
          width="70"
        />

        <v-img
          alt="Movistar Play"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="images/movistar-text.png"
          width="50"
        />
      </div>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn color="#00A9E0">INICIO</v-btn>
      </router-link>
    </v-app-bar>
    <v-main style="height:100vh">
      <!-- FORM LOGIN ADMIN -->
      <v-container v-show="false" class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card shaped color>
              <v-toolbar color="#272727" style="color:white">
                <v-icon class="mr-1" color="white">mdi-account-circle</v-icon>Iniciar Sesión como Administrador de contenido
              </v-toolbar>
              <v-form ref="form" @submit.prevent="login()">
                <v-card-text>
                  <v-text-field
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    color="indigo darken-3"
                    prepend-icon="mdi-account"
                    v-model="form.email"
                    :rules="reglasValidacion.emailRules"
                  ></v-text-field>
                  <v-text-field
                    label="Contraseña"
                    name="password"
                    type="password"
                    color="indigo darken-3"
                    prepend-icon="mdi-shield-key"
                    v-model="form.password"
                    :rules="reglasValidacion.passwordRules"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-flex justify-center>
                    <v-btn color="white" type="submit" :loading="isLogging">Ingresar</v-btn>
                  </v-flex>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- FORM LOGIN ADMIN -->

      <!-- MENU ADMINISTRADOR -->
      <v-row align="center" justify="center" class="mt-0" style="background:#272727">
        <v-card style="width:90% !important" color="#00A9E0" dark>
          <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold display-2 basil--text">Administración de contenidos</h1>
          </v-card-title>
          <v-tabs grow icons-and-text>
            <v-tab>
              <v-icon left>mdi-upload</v-icon>Subir contenido
            </v-tab>
            <v-tab>
              <v-icon left>mdi-folder-search</v-icon>Búsqueda de contenido
            </v-tab>
            <!-- SUBIR CONTENIDO -->
            <v-tab-item>
              <TabSubirContenido />
            </v-tab-item>
            <!-- SUBIR CONTENIDO -->
            <!-- BUSQUEDA CONTENIDO -->
            <v-tab-item>
              <TabBusquedaContenido />
            </v-tab-item>
            <!-- BUSQUEDA CONTENIDO -->
          </v-tabs>
        </v-card>
      </v-row>
      <!-- MENU ADMINISTRADOR -->
    </v-main>
  </div>

  <!-- ============== /CONTENT ============= -->
</template>

<script>
import TabSubirContenido from "../components/TabSubirContenido";
import TabBusquedaContenido from "../components/TabBusquedaContenido";
export default {
  components: {
    TabSubirContenido,
    TabBusquedaContenido
  },
  data() {
    return {
      isLogging: false,
      form: {
        email: "",
        password: ""
      },
      reglasValidacion: {
        emailRules: [
          v => !!v || "Campo requerido",
          v => /.+@.+/.test(v) || "Ingrese un correo electrónico válido"
        ],
        passwordRules: [
          v => !!v || "Campo requerido",
          v => v.length >= 8 || "La contraseña debe ser mayor a 8 caracteres"
        ],
        tipo_contenido: [v => !!v || "Campo requerido"]
      }
    };
  },
  methods: {
    async login() {
      let vue = this;
      vue.isLogging = true;
    }
  }
};
</script>