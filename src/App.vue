<template>
  <v-app>
    <AppBar></AppBar>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import AppBar from "./components/VAppBar";

export default {
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style >
/* TRANSITION SLIDE */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

/* TRANSITION FADE */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>