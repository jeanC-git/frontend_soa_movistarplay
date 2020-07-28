<template>
  <div>
    <v-container>
      <template>
        <div style="display: flex;justify-content: end;" v-if="tipo_pago==1">
          <v-btn class="mx-2" color="secondary" outlined icon @click="listarPagosServicio()">
            <v-icon>mdi-file-refresh</v-icon>
          </v-btn>
          <v-btn color="primary" dark class="mb-2" @click="activar_pago=true">Hacer pago del mes</v-btn>
          <pagoServicio
            :dialog_pago="activar_pago"
            @update_state="estate"
            :data_alquiler="[]"
            :titulo="'Pago del mes'"
          ></pagoServicio>
        </div>
        <!-- TABLE DE SERVICIOS -->

        <v-data-table
          :headers="headers_pago_servicio"
          :items-per-page="5"
          :items="arrayPagos.servicios"
          class="elevation-1"
          v-if="tipo_pago==1"
        ></v-data-table>
        <!-- TABLE DE ALQUILERES -->
        <v-data-table
          :headers="headers_pago_alquiler"
          :items-per-page="5"
          class="elevation-1"
          :items="arrayPagos.alquileres"
          v-if="tipo_pago==2"
        ></v-data-table>
      </template>
      <v-dialog v-model="dialog_lista" width="40%">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="6">
                <div class="d-flex justify-center">
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
              </v-col>
              <v-col cols="12" sm="12" md="6">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Telefonia del Perú S.A.A.</v-list-item-title>
                    <v-spacer></v-spacer>
                    <v-list-item-title>R.U.C 20100017491</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <span
                  class="headline mb-13 ml-5"
                  style="font-size: 17px !important;"
                >Constancia de Pago</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <template>
                  <v-data-table
                    :headers="headers_detalle_alquiler"
                    :items-per-page="5"
                    :items="arrayPagos.alquileres"
                    class="elevation-1"
                  ></v-data-table>
                </template>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import pagoServicio from "./Modal_pago servicio.vue";

export default {
  components: {
    pagoServicio,
  },
  props: ["tipo_pago"],
  data() {
    return {
      activar_pago: false,
      dialog_lista: false,
      arrayPagos: {
        servicios: [],
        alquileres: [],
      },
      headers_pago_servicio: [
        { text: "Total", align: "start", value: "total" },
        { text: "Subtotal", align: "start", value: "subtotal" },
        { text: "Fecha", align: "start", value: "fecha" },
        { text: "Descripcion", align: "start", value: "descripcion" },
        { text: "Tipo documento", align: "start", value: "tipo_documento" },
      ],
      headers_pago_alquiler: [
        { text: "Descripción", align: "start", value: "descripcion" },
        { text: "Periódo", align: "start", value: "periodo" },
        { text: "Subtotal", align: "start", value: "subtotal" },
        { text: "Total", align: "start", value: "total" },
        { text: "Fecha", align: "start", value: "fecha" },
        { text: "Tipo documento", align: "start", value: "tipo_documento" },
      ],
      headers_detalle_alquiler: [
        { text: "Fecha", align: "center", value: "Fecha" },
        { text: "Detalle", align: "center", value: "Detalle" },
        { text: "Periodo", align: "center", value: "Periodo" },
        { text: "Importe", align: "center", value: "Importe" },
      ],
    };
  },
  methods: {
    estate(estado) {
      this.activar_pago = false;
    },
    listarPagosServicio() {
      let vue = this;
      vue.axios
        .get(
          "http://localhost:49220/api/publicacion/ListarPagoServicio?id_cliente=" +
            vue.$store.state.auth.user.id_cliente
        )
        .then((response) => {
          console.log(response.data);
          vue.arrayPagos.servicios = response.data;
        });
    },
    listarPagosAlquileres() {
      let vue = this;
      vue.axios
        .get(
          "http://localhost:49220/api/publicacion/ListarPagoAlquileres?id_cliente=" +
            vue.$store.state.auth.user.id_cliente
        )
        .then((response) => {
          console.log(response.data);
          vue.arrayPagos.alquileres = response.data;
        });
    },
  },
  created() {
    let vue = this;
    vue.listarPagosServicio();
    vue.listarPagosAlquileres();
  },
};
</script>