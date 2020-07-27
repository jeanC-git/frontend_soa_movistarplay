<template>
  <div style="background:white;height: 100%">
    <v-row style="height: 100%">
      <v-col cols="12" sm="3" md="3" lg="3" class="margin-0-padding-0" id="imagen_head">
        <v-img
          src="images/registro_imagen.jpg"
          class="margin-0-padding-0"
          style="width: 100%;
          height: calc(100vh - 0px);"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="9"
        lg="9"
        class="margin-0-padding-0 text-center"
        style="display:flex;justify-content:center;align-items: center;"
      >
        <!-- ELEGIR PLAN -->
        <v-card elevation="0" v-if="step1" style="max-width:500px;">
          <v-card-title class="text-h4 text-center justify-center">Registrate en Movistar Play</v-card-title>
          <v-card-title class="text-h6 text-center justify-center">¿Cuál de estos productos tienes?</v-card-title>
          <v-card-title
            class="text-h6 text-center justify-center"
          >Recuerda que si te registras con Trío tendrás más beneficios.</v-card-title>
          <v-card-text>
            <v-radio-group v-model="radioGroup">
              <v-row v-show="step1error" class="mb-0">
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  style="display:flex; align-items:center; justify-content: center; margin:0; padding:0;"
                >
                  <p style="color:red">Seleccione un plan</p>
                </v-col>
              </v-row>
              <div v-for="perfil in arrayPerfiles" :key="perfil.id">
                <v-row class="mt-2 mb-2">
                  <v-col
                    cols="12"
                    sm="11"
                    md="11"
                    lg="11"
                    style="display:flex;align-items: center;"
                  >
                    <v-icon v-if="perfil.id == 1">mdi-phone</v-icon>
                    <v-icon v-if="perfil.id == 2">mdi-television</v-icon>
                    <v-icon v-if="perfil.id == 3">mdi-cellphone</v-icon>
                    <p v-text="perfil.tipo" style="margin:0 10px;padding:0"></p>
                    <v-radio style="position:absolute;left:95%" :value="perfil.id"></v-radio>
                  </v-col>
                </v-row>
                <hr />
              </div>
              <v-row class="mb-2">
                <v-col cols="12">
                  <v-btn tile color="#69C0F7" block dark @click="irPaso2()">Continuar</v-btn>
                </v-col>
              </v-row>
              <v-row class="mb-0">
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  style="display:flex; align-items:center; justify-content: center; margin:0; padding:0;"
                >
                  <p class="mr-2">¿Ya tienes una cuenta?</p>
                  <p>
                    <router-link to="/">
                      <a href>Iniciar Sesión</a>
                    </router-link>
                  </p>
                </v-col>
              </v-row>
            </v-radio-group>
          </v-card-text>
        </v-card>
        <!-- INGRESAR DATOS DE CONFIRMACION SEGUN PLAN -->
        <v-card elevation="0" v-if="step2" style="max-width:500px;">
          <v-card-title
            class="text-h2 text-center justify-center"
            style="justify-content:center"
            v-if="step2"
          >Regístrate</v-card-title>

          <!-- PLAN TRIO -->
          <v-card-title
            class="text-h6 text-center justify-center"
            style="justify-content:center"
            v-if="step2trio.title"
          >Ingresa los datos del titular del servicio Movistar.</v-card-title>
          <v-card-text v-if="step2trio.title">
            <v-form ref="formstep2trio" @submit.prevent="formRegistraMovistarPlay('formstep2trio')">
              <v-row class="mb-0 mt-0" v-show="step2trio.error">
                <v-col
                  cols="12"
                  lg="12"
                  style="display:flex; align-items:center; justify-content: center; margin:0; padding:0;"
                >
                  <p style="color:red">Los datos ingresados no son correctos.</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4">
                  <v-select
                    :items="['Lima']"
                    placeholder="Departamento"
                    :rules="reglas.departamento"
                    v-model="step2trio.departamento"
                  ></v-select>
                </v-col>

                <v-col cols="12" lg="8">
                  <v-text-field
                    placeholder="Ingresa tu teléfono"
                    prepend-icon="mdi-phone"
                    :rules="reglas.telefono"
                    :counter="9"
                    v-model="step2trio.telefono"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4">
                  <v-select
                    :items="['DNI', 'CEX', 'RUC']"
                    placeholder="Documento"
                    :rules="reglas.documento"
                    v-model="step2trio.documento"
                  ></v-select>
                </v-col>

                <v-col cols="12" lg="8  ">
                  <v-text-field
                    placeholder="Ingresa tu documento"
                    prepend-icon="mdi-contacts"
                    :rules="reglas.nrodocumento"
                    v-model="step2trio.nrodocumento"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-2 mb-2">
                <v-col cols="12">
                  <v-btn tile color="#69C0F7" block dark type="submit">Continuar</v-btn>
                </v-col>
              </v-row>
            </v-form>
            <v-row class="mb-0">
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="12"
                style="display:flex; align-items:center; justify-content: center; margin:0; padding:0;"
              >
                <p class="mr-2">¿Ya tienes una cuenta?</p>
                <p>
                  <router-link to="/">
                    <a href>Iniciar Sesión</a>
                  </router-link>
                </p>
              </v-col>
            </v-row>
          </v-card-text>
          <!-- PLAN TRIO -->

          <!-- PLAN TV -->
          <v-card-title
            class="text-h6 text-center justify-center"
            style="justify-content:center"
            v-if="step2tv.title"
          >Completa los datos que te identifican como usuario Movistar.</v-card-title>
          <v-card-text v-if="step2tv.title">
            <v-form ref="formstep2tv" @submit.prevent="formRegistraMovistarPlay('formstep2tv')">
              <v-row>
                <v-col cols="12" lg="12">
                  <v-text-field
                    placeholder="Ingresa tu número de cuenta"
                    prepend-icon="mdi-contacts"
                    :rules="reglas.numeroCuenta"
                    v-model="step2tv.numeroCuenta"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="4">
                  <v-select
                    :items="['DNI', 'CEX', 'RUC']"
                    placeholder="Documento"
                    :rules="reglas.documento"
                    v-model="step2tv.documento"
                  ></v-select>
                </v-col>

                <v-col cols="12" lg="8  ">
                  <v-text-field
                    placeholder="Ingresa tu documento"
                    prepend-icon="mdi-contacts"
                    :rules="reglas.nrodocumento"
                    v-model="step2tv.nrodocumento"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-2 mb-2">
                <v-col cols="12">
                  <v-btn tile color="#69C0F7" block dark type="submit">Continuar</v-btn>
                </v-col>
              </v-row>
            </v-form>
            <v-row class="mb-0">
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="12"
                style="display:flex; align-items:center; justify-content: center; margin:0; padding:0;"
              >
                <p class="mr-2">¿Ya tienes una cuenta?</p>
                <p>
                  <router-link to="/">
                    <a href>Iniciar Sesión</a>
                  </router-link>
                </p>
              </v-col>
            </v-row>
          </v-card-text>
          <!-- PLAN TV -->

          <!-- PLAN MOVIL -->
          <v-card-title
            class="text-h6 text-center justify-center"
            style="justify-content:center"
            v-if="step2movil.title"
          >Ingresa tu número celular Movistar y te enviaremos un código por SMS.</v-card-title>
          <v-card-text v-if="step2movil.title">
            <v-form
              ref="formstep2movil"
              @submit.prevent="formRegistraMovistarPlay('formstep2movil')"
            >
              <v-row>
                <v-col cols="12" lg="12">
                  <v-text-field
                    placeholder="Número celular Movistar"
                    prepend-icon="mdi-phone"
                    :rules="reglas.telefono"
                    v-model="step2movil.telefono"
                    :counter="9"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="mt-2 mb-2">
                <v-col cols="12">
                  <v-btn tile color="#69C0F7" block dark type="submit">Continuar</v-btn>
                </v-col>
              </v-row>
            </v-form>

            <v-row class="mb-0">
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="12"
                style="display:flex; align-items:center; justify-content: center; margin:0; padding:0;"
              >
                <p class="mr-2">¿Ya tienes una cuenta?</p>
                <p>
                  <router-link to="/">
                    <a href>Iniciar Sesión</a>
                  </router-link>
                </p>
              </v-col>
            </v-row>
          </v-card-text>
          <!-- PLAN MOVIL -->
        </v-card>

        <!-- ULTIMO PASO REGISTRO DE EMAIL Y CONTRASEÑA PARA MOVISTAR PLAY -->
        <v-card elevation="0" v-if="step3" style="max-width:500px;">
          <v-card-title
            class="text-h2 text-center justify-center"
            style="justify-content:center"
            v-if="step3"
          >Regístrate</v-card-title>
          <v-card-title
            class="text-h6 text-center justify-center"
            style="justify-content:center"
            v-if="step3"
          >¡Estás a un paso de disfrutar de Movistar Play solo completa estos datos!</v-card-title>

          <v-card-text v-if="step3">
            <v-form ref="formregistrarmplay" @submit.prevent="RegistrarMovistarPlay()">
              <v-row>
                <v-col cols="12" lg="12">
                  <v-text-field
                    placeholder="Ingresa tu correo electrónico"
                    prepend-icon="mdi-email"
                    :rules="reglas.email"
                    v-model="formRegistro.email"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="12">
                  <v-text-field
                    hint="Ingresa más de 5 carácteres, entre números y letras"
                    :type="mostrarPassword ? 'text' :'password'"
                    placeholder="Ingresa tu contraseña"
                    prepend-icon="mdi-key"
                    :append-icon="mostrarPassword ? 'mdi-eye' :'mdi-eye-off'"
                    @click:append="mostrarPassword =!mostrarPassword"
                    :rules="reglas.password"
                    v-model="formRegistro.password"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="12">
                  <v-text-field
                    hint="Ingresa más de 5 carácteres, entre números y letras"
                    placeholder="Confirma tu contraseña"
                    :type="mostrarPassword ? 'text' :'password'"
                    :append-icon="mostrarPassword ? 'mdi-eye' :'mdi-eye-off'"
                    @click:append="mostrarPassword =!mostrarPassword"
                    prepend-icon="mdi-key"
                    :rules="reglas.password"
                    v-model="formRegistro.confirmarpassword"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" lg="12" style="display:flex; justify-content:center;">
                  <v-checkbox
                    v-model="formRegistro.TyC"
                    label="Acepto los términos y condiciones"
                    :rules="reglas.tyc"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row class="mt-2 mb-2">
                <v-col cols="12">
                  <v-btn tile color="#69C0F7" block dark type="submit">Regístrate</v-btn>
                </v-col>
              </v-row>
            </v-form>
            <v-row class="mb-0">
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="12"
                style="display:flex; align-items:center; justify-content: center; margin:0; padding:0;"
              >
                <p class="mr-2">¿Ya tienes una cuenta?</p>
                <p>
                  <router-link to="/">
                    <a href>Iniciar Sesión</a>
                  </router-link>
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <!-- ULTIMO PASO REGISTRO DE EMAIL Y CONTRASEÑA PARA MOVISTAR PLAY -->
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reglas: {
        departamento: [(v) => !!v || "Campo requerido"],
        tyc: [(v) => !!v || "Es necesario aceptar los Términos y condiciones"],
        documento: [(v) => !!v || "Campo requerido"],
        nrodocumento: [
          (v) => !!v || "Campo requerido",
          (v) => /^[0-9]+$/i.test(v) || "No se permiten letras",
        ],
        telefono: [
          (v) => !!v || "Campo requerido",
          (v) => /^[0-9]+$/i.test(v) || "No se permiten letras",
          (v) => (v && v.length == 9) || "El número deber ser de 9 caracteres",
        ],
        email: [
          (v) => !!v || "Campo requerido",
          (v) => /.+@.+\..+/.test(v) || "Ingrese un correo electrónico válido",
        ],
        numeroCuenta: [
          (v) => !!v || "Campo requerido",
          (v) => /^[0-9]+$/i.test(v) || "No se permiten letras",
        ],
        password: [
          (v) => !!v || "Campo requerido",
          (v) =>
            (v && v.length >= 5) ||
            "La contraseña debe ser mayor a 5 caracteres",
        ],
        confirmarpassword: [
          (v) => !!v || "Campo requerido",
          (v) =>
            (v && v == this.formRegistro.confirmarpassword) ||
            "Las contraseñas no coinciden",
        ],
      },
      mostrarPassword: false,
      radioGroup: null, // 1: trio, 2: solo tv, 3: movil
      step1: true,
      step1error: false,
      step2: false,
      step2trio: {
        title: false,
        departamento: "",
        telefono: "",
        documento: "",
        nrodocumento: "",
        error: false,
      },
      step2tv: {
        title: false,
        numeroCuenta: "",
        documento: "",
        nrodocumento: "",
      },
      step2movil: {
        title: false,
        telefono: "",
      },
      formRegistro: {
        id_cuenta: "",
        email: "",
        password: "",
        confirmarpassword: "",
        TyC: false,
      },
      step3: false,
      arrayPerfiles: [],
    };
  },
  created() {
    this.listarPerfiles();
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

    irPaso2() {
      let vue = this;
      if (vue.radioGroup == null) {
        vue.step1error = true;
      } else {
        vue.step1error = false;
        switch (vue.radioGroup) {
          case 1:
            vue.step2trio.title = true;
            break;
          case 2:
            vue.step2tv.title = true;
            break;
          case 3:
            vue.step2movil.title = true;
            break;
        }
        vue.step2 = true;
        vue.step1 = false;
      }
    },
    listarPerfiles() {
      let vue = this;
      vue.axios
        .get("http://localhost:49220/api/afiliacion/listarperfil")
        .then((response) => {
          vue.arrayPerfiles = response.data;
        });
    },
    formRegistraMovistarPlay(formValidar) {
      let vue = this;
      let validar = false;
      switch (formValidar) {
        case "formstep2trio":
          validar = vue.$refs.formstep2trio.validate();
          break;
        case "formstep2tv":
          validar = vue.$refs.formstep2tv.validate();
          break;
        case "formstep2movil":
          validar = vue.$refs.formstep2movil.validate();
          break;
      }
      if (validar) {
        switch (vue.radioGroup) {
          case 1:
            var data = {
              id_perfil: vue.radioGroup,
              ciudad: vue.step2trio.departamento,
              numero_dni: vue.step2trio.nrodocumento,
              numero_telefono: vue.step2trio.telefono,
            };
            break;
          case 2:
            var data = {
              id_perfil: vue.radioGroup,
              numero_cuenta: vue.step2tv.numeroCuenta,
              numero_dni: vue.step2tv.nrodocumento,
            };
            break;
          case 3:
            var data = {
              id_perfil: vue.radioGroup,
              numero_telefono: vue.step2movil.telefono,
            };
            break;
        }
        var config = {
          method: "post",
          url: "http://localhost:49220/api/afiliacion/verificarcliente",
          data: data,
        };
        vue
          .axios(config)
          .then((response) => {
            vue.swal(
              "Usuario verificado.",
              "success",
              5000,
              "top",
              "animate__animated animate__fadeInDown",
              "animate__animated animate__fadeOut"
            );
            vue.formRegistro.id_cuenta = response.data[0].id;
            vue.step2trio.title = false;
            vue.step2tv.title = false;
            vue.step2movil.title = false;
            vue.step2 = false;
            vue.step3 = true;
          })
          .catch((error) => {
            if (error.response) {
              vue.swal(
                "Los datos ingresados no pertenecen a ningún usuario de Movistar, verifíquelos por favor.",
                "error",
                5000,
                "top",
                "animate__animated animate__fadeInDown",
                "animate__animated animate__fadeOut"
              );
              console.log(error.response.status);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          });
      } else {
        vue.swal(
          "Verifique que todos los campos estén completados correctamente",
          "warning",
          5000,
          "top",
          "animate__animated animate__fadeInDown",
          "animate__animated animate__fadeOut"
        );
      }
    },
    RegistrarMovistarPlay() {
      let vue = this;
      let validar = vue.$refs.formregistrarmplay.validate();
      if (validar) {
        if (vue.formRegistro.password != vue.formRegistro.confirmarpassword) {
          vue.swal(
            "Las contraseñas no coinciden, verifíquelas por favor.",
            "warning",
            5000,
            "top",
            "animate__animated animate__fadeInDown",
            "animate__animated animate__fadeOut"
          );
          return;
        }
        vue.axios
          .post("http://localhost:49220/api/afiliacion/registrarcliente", {
            persona: {
              id_cuenta: vue.formRegistro.id_cuenta,
              correo: vue.formRegistro.email,
              clave: vue.formRegistro.password,
            },
            id_perfil: vue.radioGroup,
          })
          .then((response) => {
            vue.swal(
              "Registro exitoso.",
              "warning",
              1500,
              "top",
              "animate__animated animate__fadeInDown",
              "animate__animated animate__fadeOut"
            );
            setTimeout(() => {
              vue.$router.push("/").catch(() => {});
            }, 2000);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  },
};
</script>
<style >
.margin-0-padding-0 {
  margin: 0;
  padding: 0;
}
.v-card__title {
  word-break: break-word;
}
@media only screen and (max-width: 960px) {
  #imagen_head {
    display: none;
  }
}
</style>