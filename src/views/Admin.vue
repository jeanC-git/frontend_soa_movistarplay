<template>
  <div style="background:#272727">
    <!-- ============== APPBAR ============== -->
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Movistar Play"
          class="shrink"
          contain
          src="images/movistar-logo.png"
          transition="scale-transition"
          width="70"
          @click="irInicio()"
        />
        <v-img
          alt="Movistar Play"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="images/movistar-text.png"
          width="50"
          @click="irInicio()"
        />
      </div>
      <v-spacer></v-spacer>
      <!-- <router-link to="/">
        <v-btn color="#00A9E0">INICIO</v-btn>
      </router-link>-->
      <v-btn outlined color="#00A9E0" @click="logout()" v-if="currentUser">Cerrar Sesión</v-btn>
    </v-app-bar>
    <!-- ============== /APPBAR ============== -->

    <!-- ============== CONTENT ============= -->
    <v-main style="height:100vh">
      <!-- FORM LOGIN ADMIN -->
      <v-container v-if="!loggedIn" class="fill-height" fluid>
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
      <v-row
        align="center"
        justify="center"
        class="mt-0"
        style="background:#272727"
        v-if="currentUser"
      >
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
    TabBusquedaContenido,
  },
  data() {
    return {
      isLogging: false,
      form: {
        email: "",
        password: "",
      },
      reglasValidacion: {
        emailRules: [
          (v) => !!v || "Campo requerido",
          (v) => /.+@.+/.test(v) || "Ingrese un correo electrónico válido",
        ],
        passwordRules: [
          (v) => !!v || "Campo requerido",
          (v) => v.length >= 8 || "La contraseña debe ser mayor a 8 caracteres",
        ],
        tipo_contenido: [(v) => !!v || "Campo requerido"],
      },
    };
  },
  methods: {
    swal(title, type, timer, position, showClass, hideClass) {
      let vue = this;

      const Toast = vue.$swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: timer,
        timerProgressBar: true,
        showClass: {
          popup: showClass,
        },
        hideClass: {
          popup: hideClass,
        },
        onOpen: (toast) => {
          toast.addEventListener("mouseenter", vue.$swal.stopTimer);
          toast.addEventListener("mouseleave", vue.$swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: type,
        title:
          "<p class='font-sacramento' style='font-family: Arial, sans-serif'>" +
          title +
          "</p>",
      });
    },
    login() {
      let vue = this;
      let validar = vue.$refs.form.validate();
      if (validar) {
        vue.$store
          .dispatch("auth/login", {
            correo: vue.form.email,
            clave: vue.form.password,
          })
          .then(
            (response) => {
              vue.dialog = false;
              vue.swal(
                `Bienvenido  ${vue.currentUser.user[0].nombre}`,
                "success",
                2500,
                "top",
                "animate__animated animate__fadeInDown",
                "animate__animated animate__fadeOut"
              );
            },
            (error) => {
              vue.swal(
                "Usuario y/o contraseña incorrecta.",
                "warning",
                2500,
                "top",
                "animate__animated animate__fadeInDown",
                "animate__animated animate__fadeOut"
              );
            }
          );
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
      if (this.$route.name !== "Inicio") {
        this.$router.push("/");
      }
    },
    irInicio() {
      if (this.$route.name !== "Inicio") {
        this.$router.push("/");
      }
    },
  },
  computed: {
    loggedIn() {
      let vue = this;
      return vue.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>