<template>
  <v-app>
    <router-view></router-view>

    <!-- FOOTER -->
    <v-footer fixed paddless color="#212121" class="pt-3">
      <p
        class="text-left ml-5"
        style="color:#8e8e8e"
      >Contáctanos. | Mi Movistar | Términos y Condiciones | Movistar Play | Movistar | Política Protección de Datos | Centro de Ayuda | Mapa del sitio</p>
      <v-spacer></v-spacer>

      <p class="text-right mr-5" style="color:#8e8e8e">© Movistar Play</p>
    </v-footer>
    <!-- FOOTER -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>
