<template>
  <div>
    <v-dialog v-model="dialog_pago" width="40%" :persistent="dialog_persistent">
      <v-card>
        <v-card-title>
          {{titulo}} {{data_alquiler.nombre}}
          <v-spacer></v-spacer>
          <button @click="cerrar_modal()" icon>
            <v-icon>mdi-close</v-icon>
          </button>
        </v-card-title>
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
        </v-container>
        <v-form ref="form" @submit.prevent="alquilarContenido()">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-form class="mx-5">
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        label="Total a pagar"
                        color="black"
                        v-model="campos_pago.total"
                        filled
                        disabled
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="Número de su tarjeta"
                        color="black"
                        v-model="campos_pago.numero_tarjeta"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        label="Fecha de vencimiento"
                        color="black"
                        v-model="campos_pago.fecha_vencimiento_tarjeta"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="6" class="d-flex">
                      <v-text-field label="CCV" color="black" v-model="campos_pago.ccv"></v-text-field>
                      <v-icon color="blue">mdi-help-circle mdi-blue</v-icon>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-icon>mdi-security</v-icon>
                      <span>Esta en un entorno seguro</span>
                      <br />
                      <span
                        style="font-size: 10px;font-weight: initial;color: gray;padding-left: 4px"
                      >Este sitio cumple con los estandares de seguridad de la industria de medio de pago PCI-DSS para proteger su información personal y de su tarjeta</span>
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#43aafb" class="mx-3" type="submit">Pagar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["dialog_pago", "data_alquiler", "titulo"],
  data() {
    return {
      dialog_persistent: true,
      campos_pago: {
        total: 0,
        numero_tarjeta: "",
        fecha_vencimiento_tarjeta: "",
        subtotal: 0,
        igv: 0.18,
        anio_tarjeta: "",
        ccv: "",
        documento: "",
        tipo_documento: "",
        fecha_vencimiento: "",
        detalle_pago: {
          total: 0,
          subtotal: 0,
          igv: 0.18,
          descripcion: "",
          fecha: this.hoyFecha,
          periodo: "",
        },
      },
    };
  },
  mounted() {
    let vue = this;

    vue.campos_pago.total = vue.$store.state.auth.user.id_plan == 1 ? 80 : 120;
    vue.campos_pago.subtotal = parseFloat(vue.campos_pago.total * 0.82).toFixed(
      2
    );
    vue.campos_pago.documento = "F-000" + Math.floor(Math.random() * 100);
    vue.campos_pago.tipo_documento = "FACTURA";
    vue.campos_pago.detalle_pago.total = vue.campos_pago.total;
    vue.campos_pago.detalle_pago.subtotal = vue.campos_pago.subtotal;
    vue.campos_pago.detalle_pago.descripcion = "Pago de membresía del mes";
    vue.campos_pago.detalle_pago.periodo =
      "1 mes a partir de " + vue.hoyFecha();
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
    cerrar_modal() {
      this.$emit("update_state", false);
    },
    hoyFecha() {
      let vue = this;
      var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth() + 1;
      var yyyy = hoy.getFullYear();

      dd = vue.agregarCero(dd);
      mm = vue.agregarCero(mm);

      return yyyy + "-" + mm + "-" + dd;
    },
    agregarCero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    alquilarContenido() {
      let vue = this;
      let data = {
        pago: {
          id_cliente: vue.$store.state.auth.user.id_cliente,
          total: vue.campos_pago.total,
          subtotal: vue.campos_pago.subtotal,
          fecha: vue.campos_pago.fecha,
          igv: 0.18,
          documento: vue.campos_pago.documento,
          tipo_documento: vue.campos_pago.tipo_documento,
          fecha_vencimiento: vue.campos_pago.fecha_vencimiento_tarjeta,
          // 1: "pago por motivo de membresia mensual ; 2: pago por motivo de alquiler de contenido "
          tipo_pago: "1",
          detalle_pago: [
            {
              total: vue.campos_pago.detalle_pago.total,
              subtotal: vue.campos_pago.detalle_pago.subtotal,
              igv: 0.18,
              descripcion: vue.campos_pago.detalle_pago.descripcion,
              fecha: vue.campos_pago.detalle_pago.fecha,
              periodo: vue.campos_pago.detalle_pago.periodo,
            },
          ],
        },
      };

      vue.axios
        .post("http://localhost:49220/api/publicacion/insertarpago", data)
        .then((response) => {
          vue.campos_pago.fecha_vencimiento = "";
          vue.campos_pago.fecha_vencimiento_tarjeta = "";
          vue.campos_pago.numero_tarjeta = "";
          vue.campos_pago.ccv = "";

          vue.swal(
            `Acaba de realizar el pago del mes`,
            "success",
            2500,
            "top",
            "animate__animated animate__fadeInDown",
            "animate__animated animate__fadeOut"
          );
        })
        .catch((error) => {});
      vue.cerrar_modal();
    },
  },
};
</script>