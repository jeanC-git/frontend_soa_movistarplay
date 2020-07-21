<template>
  <v-tabs vertical icons-and-text>
    <v-tab>
      <v-icon left class="mdi-36px">mdi-youtube</v-icon>Peliculas / TV en vivo
    </v-tab>
    <v-tab>
      <v-icon left class="mdi-36px">mdi-view-module</v-icon>Series
    </v-tab>

    <v-tab-item>
      <v-card flat>
        <v-form ref="formSubirContenido" @submit.prevent="subirContenido()">
          <v-card-title>
            <h1
              class="font-weight-bold display-1 basil--text"
            >Formulario para películas y canales tv</h1>
            <v-spacer></v-spacer>
            <v-btn class="ma-2" outlined color="indigo" @click="reset()">Limpiar campos</v-btn>
            <v-btn rounded color="primary" dark type="submit">
              <v-icon>mdi-plus</v-icon>Agregar Contenido
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" lg="4">
                <v-select
                  label="Tipo contenido"
                  :items="[{id:2, nombre: 'Película'},{id:3, nombre:'TV en vivo' } ]"
                  item-value="id"
                  item-text="nombre"
                  prepend-icon="mdi-movie"
                  v-model="nuevoContenido.tipo_contenido"
                  :rules="reglasValidacion.tipo_contenido"
                ></v-select>
              </v-col>
              <v-col cols="12" lg="4">
                <v-select
                  label="Categoria"
                  :items="arrayCategorias"
                  item-value="id"
                  item-text="tipo"
                  prepend-icon="mdi-comment-edit"
                  v-model="nuevoContenido.categoria"
                ></v-select>
              </v-col>
              <v-col cols="12" lg="4">
                <v-select
                  label="Tipo control"
                  :items="[{id:1, nombre: 'No'},{id:2, nombre:'Si' } ]"
                  item-value="id"
                  item-text="nombre"
                  v-model="nuevoContenido.tipo_control"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="4">
                <v-text-field
                  outlined
                  label="Link trailer"
                  placeholder="Link trailer"
                  v-model="nuevoContenido.link_trailer"
                  prepend-icon="mdi-link"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="4">
                <v-text-field
                  outlined
                  label="Link contenido"
                  placeholder="Link contenido"
                  prepend-icon="mdi-link"
                  v-model="nuevoContenido.link_tipo_contenido"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="4">
                <v-text-field
                  outlined
                  label="Link Portada"
                  placeholder="Link Portada"
                  prepend-icon="mdi-link"
                  v-model="nuevoContenido.link_portada"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="4">
                <v-text-field
                  outlined
                  rows="2"
                  name="input-7-4"
                  label="Nombre del contenido"
                  placeholder="Nombre del contenido"
                  v-model="nuevoContenido.nombre"
                  prepend-icon="mdi-rename-box"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="4">
                <v-text-field
                  outlined
                  rows="2"
                  name="input-7-4"
                  label="Duración de contenido"
                  placeholder="Ejm.: 01:30:00"
                  v-model="nuevoContenido.duracion"
                  prepend-icon="mdi-rename-box"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="4" v-if="nuevoContenido.tipo_contenido == 2">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Fecha de estreno"
                      prepend-icon="mdi-calendar-blank"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      @change="nuevoContenido.fecha_estreno = date"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    @change="nuevoContenido.fecha_estreno = date"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancelar</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="12">
                <v-textarea
                  outlined
                  rows="2"
                  name="input-7-4"
                  label="Descripción del contenido"
                  v-model="nuevoContenido.descripcion"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>
        </v-form>
      </v-card>
    </v-tab-item>

    <v-tab-item>
      <v-card flat>
        <v-form ref="formSubirContenido" @submit.prevent="subirContenido()">
          <v-card-title>
            <h1 class="font-weight-bold display-1 basil--text">Formulario para series</h1>
            <v-spacer></v-spacer>
            <v-btn class="ma-2" outlined color="indigo">Limpiar campos</v-btn>
            <v-btn rounded color="primary" dark type="submit">
              <v-icon>mdi-plus</v-icon>Agregar Contenido
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-row class>
              <v-col cols="12" lg="4">
                <v-select
                  label="Tipo contenido"
                  :items="[{id:1, nombre: 'Serie'} ]"
                  hide-details
                  item-value="id"
                  item-text="nombre"
                  prepend-icon="mdi-movie"
                  v-model="nuevoContenido.tipo_contenido"
                  :rules="reglasValidacion.tipo_contenido"
                ></v-select>
              </v-col>
              <v-col cols="12" lg="4">
                <v-select
                  label="Categoria"
                  :items="arrayCategorias"
                  prepend-icon="mdi-comment-edit"
                  item-value="id"
                  item-text="tipo"
                  v-model="nuevoContenido.categoria"
                  hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" lg="4">
                <v-select
                  label="Tipo control"
                  :items="[{id:1, nombre: 'Si', value: true},{id:2, nombre:'No',value: false } ]"
                  item-value="value"
                  item-text="nombre"
                  hide-details
                  v-model="nuevoContenido.tipo_control"
                ></v-select>
              </v-col>
            </v-row>
            <v-row class>
              <v-col cols="12" lg="5">
                <v-text-field
                  outlined
                  label="Link Trailer"
                  placeholder="Link Trailer"
                  v-model="nuevoContenido.link_trailer"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="4">
                <v-text-field
                  outlined
                  label="Link Portada"
                  placeholder="Link Portada"
                  hide-details
                  v-model="nuevoContenido.link_portada"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  outlined
                  label="Número de  capitúlos"
                  placeholder=" Número de capitulos"
                  hide-details
                  v-model="nuevoContenido.capitulos"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class>
              <v-col cols="12" lg="6">
                <v-text-field
                  outlined
                  name="input-7-4"
                  label="Nombre del contenido"
                  hide-details
                  placeholder="Nombre del contenido"
                  v-model="nuevoContenido.nombre"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="3">
                <v-select
                  outlined
                  name="input-7-4"
                  label="Acceso"
                  placeholder="Tipo de acceso"
                  hide-details
                  :items="[{id: 1, nombre: 'Lite'} , {id: 2, nombre: 'Premium'}]"
                  item-value="id"
                  item-text="nombre"
                  v-model="nuevoContenido.acceso.id_plan"
                ></v-select>
              </v-col>
              <v-col cols="12" lg="3">
                <v-text-field
                  outlined
                  rows="2"
                  name="input-7-4"
                  label="Precio de alquiler"
                  hide-details
                  placeholder="Precio de alquiler"
                  v-model="nuevoContenido.acceso.precio"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class>
              <v-col cols="12" lg="12">
                <v-textarea
                  outlined
                  rows="2"
                  hide-details
                  name="input-7-4"
                  label="Descripción del contenido"
                  v-model="nuevoContenido.descripcion"
                ></v-textarea>
              </v-col>
            </v-row>
            <hr />
            <v-row>
              <v-col cols="12" lg="12">
                <v-btn color="secondary" small rounded @click="agregarTemporada()">
                  <v-icon>mdi-plus</v-icon>Temporada
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="12">
                <v-list>
                  <v-list-group
                    prepend-icon="mdi-link"
                    v-for="(  temporada, index) in nuevoContenido.arrayTemporada"
                    :key="temporada.nombre"
                  >
                    <template v-slot:activator>
                      <v-list-item-title>{{temporada.nombre}}</v-list-item-title>
                    </template>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" small rounded @click="agregarCapitulo(index)">
                      <v-icon>mdi-plus</v-icon>capitulo
                    </v-btn>
                    <v-list-item v-for="(capitulo, index) in temporada.capitulo" :key="index">
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="12" lg="4">
                            <v-text-field label="Nombre" v-model="capitulo.nombre"></v-text-field>
                          </v-col>
                          <v-col cols="12" lg="4">
                            <v-text-field label="URL" v-model="capitulo.url_capitulo"></v-text-field>
                          </v-col>
                          <v-col cols="12" lg="4">
                            <v-text-field label="Link portada" v-model="capitulo.portada_capitulo"></v-text-field>
                          </v-col>
                          <v-col cols="12" lg="10">
                            <v-textarea rows="1" label="Descripcion" v-model="capitulo.descripcion"></v-textarea>
                          </v-col>
                          <v-col cols="12" lg="2">
                            <v-text-field label="Duracion" v-model="capitulo.duracion"></v-text-field>
                          </v-col>
                        </v-row>
                        <hr />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </v-list>
              </v-col>
            </v-row>
            <br />
            <br />
          </v-card-text>
        </v-form>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  created() {
    let vue = this;
    vue.listarCategorias();
  },
  data() {
    return {
      date: "",
      menu: false,
      reglasValidacion: {
        tipo_contenido: [v => !!v || "Campo requerido"]
      },
      nuevoContenido: {
        tipo_contenido: "",
        categoria: "",
        tipo_control: true,
        link_trailer: "",
        link_portada: "",
        nombre: "",
        descripcion: "",
        fecha_estreno: "",
        link_tipo_contenido: "",
        duracion: "",
        capitulos: "",
        arrayTemporada: [],
        acceso: {
          id_plan: "",
          precio: ""
        }
      },
      arrayCategorias: []
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
          popup: showClass
        },
        hideClass: {
          popup: hideClass
        },
        onOpen: toast => {
          toast.addEventListener("mouseenter", vue.$swal.stopTimer);
          toast.addEventListener("mouseleave", vue.$swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: type,
        title:
          "<p class='font-sacramento' style='font-family: Arial, sans-serif'>" +
          title +
          "</p>"
      });
    },
    hoyFecha() {
      let vue = this;
      var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth() + 1;
      var yyyy = hoy.getFullYear();

      dd = vue.agregarCero(dd);
      mm = vue.agregarCero(mm);

      vue.date = yyyy + "-" + mm + "-" + dd;
    },
    agregarCero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    subirContenido() {
      let vue = this;
      let validar = vue.$refs.formSubirContenido.validate();
      let data = null;
      if (
        vue.nuevoContenido.tipo_contenido == 2 ||
        vue.nuevoContenido.tipo_contenido == 3
      ) {
        data = {
          descripcion: vue.nuevoContenido.descripcion,
          fecha_estreno: vue.nuevoContenido.fecha_estreno,
          duracion: vue.nuevoContenido.duracion,
          url: vue.nuevoContenido.link_tipo_contenido
        };
      } else {
        vue.nuevoContenido.tipo_contenido = 1;
        data = {
          capitulos: vue.nuevoContenido.capitulos,
          descripcion: vue.nuevoContenido.descripcion,
          fecha_estreno: vue.nuevoContenido.fecha_estreno,
          temporada: vue.nuevoContenido.arrayTemporada
        };
      }
      if (validar) {
        vue.axios
          .post("http://localhost:49220/api/publicacion/insertarcontenido", {
            contenido: {
              id_tipo_contenido: vue.nuevoContenido.tipo_contenido,
              id_administrador: 1,
              id_categoria: vue.nuevoContenido.categoria,
              url_contenido: vue.nuevoContenido.link_trailer,
              portada: vue.nuevoContenido.link_portada,
              tipo_control: 2,
              nombre: vue.nuevoContenido.nombre
            },
            tipo_contenido: data,
            acceso: {
              id_plan: "",
              precio: ""
            }
          })
          .then(response => {
            vue.swal(
              "Contenido agregado.",
              "success",
              5000,
              "top",
              "animate__animated animate__fadeInDown",
              "animate__animated animate__fadeOut"
            );
            if (vue.nuevoContenido.tipo_contenido == 1) {
              vue.nuevoContenido.arrayTemporada = [];
            }
            vue.reset();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("error");
      }
    },
    listarCategorias() {
      let vue = this;
      vue.axios
        .get("http://localhost:49220/api/Consumo/ListarCategorias")
        .then(response => {
          vue.arrayCategorias = response.data;
        });
    },
    agregarTemporada() {
      let vue = this;
      let count = vue.nuevoContenido.arrayTemporada.length;
      let count_1 = count + 1;
      let nueva_temporada = {
        nombre: "Temporada " + count_1,
        num_capitulos: vue.nuevoContenido.capitulos,
        fecha_estreno: vue.nuevoContenido.fecha_estreno,

        capitulo: []
      };
      vue.nuevoContenido.arrayTemporada.push(nueva_temporada);
    },
    agregarCapitulo(index) {
      let vue = this;

      let nuevo_capitulo = {
        duracion: "00:00:00",
        nombre: "Nombre del capitulo",
        descripcion: "Descripción",
        url_capitulo: "Url del capitulo",
        portada_capitulo: "Portada del capitulo"
      };
      vue.nuevoContenido.arrayTemporada[index].capitulo.push(nuevo_capitulo);
    },
    reset() {
      let vue = this;
      vue.$refs.formSubirContenido.reset();
    }
  }
};
</script>