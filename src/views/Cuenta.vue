<template >
  <div style="background:#D8DCDD;height:100%;width:100%">
    <v-container class="mt-16 " style="background:#D8DCDD;height:100%">
      <v-row>
        <v-col cols="12" md="12" class="text-center">
          <p class="font-weight-medium">Mi cuenta</p>
        </v-col>
      </v-row>
      <v-row>
        <v-tabs 
            v-model="tab"
            background-color="#262626"
            class="elevation-2"
            dark
            :centered="centered"
            :right="right"
            :grow="grow"
            :vertical="vertical"
            :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
            :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
            :icons-and-text="icons"
          >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            v-for="tipo_cuenta in array_tipo_cuenta"
            :key="tipo_cuenta.tipo"
            :href="`#tab-${tipo_cuenta.tipo}`"
            v-text="tipo_cuenta.nombre"
          ></v-tab>
          <v-tab-item v-for="tipo_cuenta in array_tipo_cuenta" :key="tipo_cuenta.tipo" :value="'tab-' + tipo_cuenta.tipo">
            <v-card flat tile>
              <tabscuenta :tipo_cuenta="tipo_cuenta.tipo"></tabscuenta>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import tabscuenta from "../components/Tabs_cuenta.vue";
export default {
  components:{
    tabscuenta
  },
  data() {
    return {
      tab: null,
      icons: false,
      centered: true,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      tabs: 3,
      array_tipo_cuenta: [
        { nombre: "Control parental", tipo: 1 },
        { nombre: "Notificaciones", tipo: 2 },
        { nombre: "Pagos", tipo: 3 },
      ],
    };
  },
};
</script>



