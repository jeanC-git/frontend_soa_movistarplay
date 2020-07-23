<template style="background:#262626;height:100%">
  <div class="mt-16 pt-16" style="background:#262626;height:100%">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />cuenta
  </div>
</template>
<script>
import tablasConsumo from "./Tablas_consumo.vue";
export default {
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



