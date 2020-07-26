import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from './auth.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioLogeado: false,
    dataUsuario: false,
    token: false,
    buscador_select:0,
    buscador_text:'',
  },
  mutations: {
  },
  // en los componentes puedes mapear los actions con ...mapActions(['']) y usar this.nombreDelAction(valores)
  // o usar dispatch this.$store.dispatch('nombreDelAction', valores)
  actions: {

  },
  modules: {
    auth
  }
})
