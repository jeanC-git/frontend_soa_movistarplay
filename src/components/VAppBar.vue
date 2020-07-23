<template>
  <div>
    <v-app-bar app color="dark" dark extension-height="100%">
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
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <router-link to="/mis-contenidos">
            <v-btn>
              <v-icon>mdi-account</v-icon>Mis contenidos
            </v-btn>
          </router-link>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <router-link to="/mis-cuenta">
            <v-btn>
              <v-icon>mdi-nut</v-icon>Mi cuenta
            </v-btn>
          </router-link>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-btn @click="extended=!extended">
            <v-icon>mdi-menu</v-icon>Menú
          </v-btn>
        </v-col>
      </v-row>
      <v-btn
        class="mx-2"
        outlined
        color="#43aafb"
        @click="openLoginModal()"
        v-if="!loggedIn"
      >Iniciar sesión</v-btn>
      <v-menu offset-y v-if="currentUser">
        <template v-slot:activator="{ on, attrs }">
          <span>
            <v-btn color="#43aafb" class="mx-2" outlined v-bind="attrs" v-on="on">
              <v-icon class="mx-1">mdi-account</v-icon>
              {{ currentUser.correo }}
            </v-btn>
          </span>
        </template>
        <v-list dense>
          <v-list-item-group color="#43aafb">
            <v-list-item @click="logout()">
              <v-list-item-icon>
                <v-icon v-text="'mdi-logout'"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="'Cerrar sesión'"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <template v-slot:extension v-if="extended">
        <v-row color="dark" dark style="display:flex;justify-content:center" class="mb-16">
          <v-col col="12" sm="6" md="4">
            <v-select
              hide-details
              :items="['Comedia', 'Terror', 'Drama', 'Romántico']"
              label="Categoría"
            ></v-select>
          </v-col>
          <v-col col="12" sm="6" md="4" class="mb-2">
            <v-text-field
              clearable
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Buscar en MovistarPlay"
              color="#43aafb"
            ></v-text-field>
          </v-col>
        </v-row>
      </template>
      <!-- MODAL INICIO DE SESION -->
      <v-dialog v-model="dialog" max-width="350px">
        <v-card color="#262626" dark>
          <div style="width:100%; display:flex; justify-content:end">
            <v-btn icon dark @click="dialog = false" color="#8e8e8e">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title style="text-align: center; display:flex; justify-content:center">
            <span
              class="headline"
              style="text-align: center; color: #e3e6e7 !important"
            >¡Bienvenido!</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="loginForm" @submit.prevent="login()">
              <v-text-field
                v-model="login_form.email"
                label="Email"
                placeholder="Email"
                solo
                :hint="'Escriba su email'"
                :rules="reglas.email"
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="login_form.password"
                label="Contraseña"
                placeholder="Contraseña"
                solo
                :hint="'Escriba su contraseña'"
                :rules="reglas.password"
              ></v-text-field>
              <div style="width:100%; display:flex; justify-content:end;">
                <v-checkbox :label="'Recordar'" class="mt-0"></v-checkbox>
              </div>
              <v-btn type="submit" block color="#1193FA" dark>Iniciar Sesión</v-btn>
              <br />
              <hr style="color:#8e8e8e" />
              <br />
              <a href style="color:white">¿Olvidaste tu contraseña?</a>
              <br />
              <br />
              <hr style="color:#8e8e8e" />
              <br />
              <p style="color:white">
                ¿Nuevo en Movistar Play?
                <router-link to="/registro">
                  <a href style="color:#0587ec" @click="dialog=false">Regístrate aquí</a>
                </router-link>
              </p>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
      <!-- MODAL INICIO DE SESION -->
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    extended: false,
    dialog: false,
    login_form: {
      email: "admin@admin.com",
      password: "12345678",
    },
    reglas: {
      email: [(v) => !!v || "Campo requerido"],
      password: [(v) => !!v || "Campo requerido"],
    },
  }),
  methods: {
    login() {
      let vue = this;
      let validar = vue.$refs.loginForm.validate();
      if (validar) {
        vue.$store
          .dispatch("auth/login", {
            correo: vue.login_form.email,
            clave: vue.login_form.password,
          })
          .then(
            (response) => {
              vue.dialog = false;
            },
            (error) => {}
          );
      }
    },
    openLoginModal() {
      let vue = this;
      vue.dialog = true;
    },
    logout() {
      this.$store.dispatch("auth/logout");
      if (this.$route.name !== "Inicio") {
        this.$router.push("/");
      }
    },
  },
  created() {
    let vue = this;

    if (vue.loggedIn) {
      console.log(
        "hay un token",
        JSON.parse(localStorage.getItem("token")),
        JSON.parse(localStorage.getItem("user"))
      );
    }
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
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.margin-0-padding-0 {
  margin: 0;
  padding: 0;
}
</style>
