<template style="background:#262626;height:100%">
  <div class="mt-16 pt-16" style="background:#262626;height:100%">
    <v-container>
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
            v-for="tipo_consumo in array_tipo_consumo"
            :key="tipo_consumo.tipo"
            :href="`#tab-${tipo_consumo.tipo}`"
            v-text="tipo_consumo.nombre"
          ></v-tab>
          <v-tab-item v-for="tipo_consumo in array_tipo_consumo" :key="tipo_consumo.tipo" :value="'tab-' + tipo_consumo.tipo">
            <v-card flat tile>
              <tablasConsumo :tipo_consumo="tipo_consumo.tipo"></tablasConsumo>
            </v-card>
          </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>
<script>
import tablasConsumo from "../components/Tablas_consumo.vue";
export default{
  components: {
    tablasConsumo,
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
      array_tipo_consumo: [
        { nombre: "Vistos", tipo: 1 },
        { nombre: "Mi lista", tipo: 2 },
        { nombre: "Mis alquileres", tipo: 3 },
      ],
    };
  },
};
</script>



