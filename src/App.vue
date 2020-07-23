<template>
  <v-app>
    <AppBar></AppBar>
    <router-view></router-view>

  </v-app>
</template>

<script>
import AppBar from "./components/VAppBar";

export default {
  components: {
    AppBar
  },
  data: () => ({
    //
  })
};
</script>
