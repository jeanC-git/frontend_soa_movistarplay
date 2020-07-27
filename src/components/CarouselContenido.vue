<template>
  <div>
    <!-- TV EN VIVO -->
    <v-row>
      <v-col
        cols="12"
        md="12"
        xs="12"
        class="margin-0-padding-0"
        style="display:flex; align-items:center"
      >
        <p class="text-left" style="color:white; margin-left:4%; font-size:1.7rem">{{nombre}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="12" xs="12" class="margin-0-padding-0">
        <v-sheet class="mx-auto" elevation="8" max-width="100%" dark style="background:#000000">
          <v-slide-group
            v-model="model"
            class="pa-4"
            prev-icon="mdi-chevron-left"
            next-icon="mdi-chevron-right"
            show-arrows="mobile"
          >
            <v-slide-item
              v-for="contenido in data"
              :key="contenido.id"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                height="140"
                width="250"
                class="margin-0-padding-0"
                @click="toggle,reproducir_video(contenido)"
              >
                <v-img :aspect-ratio="16/9" :src="contenido.portada" class="margin-0-padding-0">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                      <p
                        class="text-center"
                        style="color:white; font-size:1.3rem;margin-top:30%"
                      >{{contenido.nombre}}</p>
                    </v-scale-transition>
                  </v-row>
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
    </v-row>
    <!-- TV EN VIVO -->
    <pagoAlquiler :dialog_pago="activar_pago"  @update_state="estate"></pagoAlquiler>
    <!-- VER VIDEO -->
    <v-dialog v-model="dialog_video" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog_video = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title v-text="info_peli.title"></v-toolbar-title>
        </v-toolbar>
        <div style="height:100%">
            <video width="100%" height="auto" crossorigin controls id="video" @timeupdate="video_change()">
              <source src="" type="video/mp4" >
            </video> 
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import pagoAlquiler from "./Modal_pago.vue";
export default {
  components: {
    pagoAlquiler,
  },
  props: ["data", "nombre"],
  data() {
    return {
      activar_pago:false,
      dialog_video:false,
      model: "",
      info_peli:{
        title :'',
      },
      video_source:'',
      id_historial:'',
    };
  },
  computed: {
    id_plan() {
      if (this.$store.state.auth.user == null) return;
      return this.$store.state.auth.user.id_plan;
    },
  },
  methods: {
    reproducir_video(acceso) {
      let vue = this;
      if (this.$store.state.auth.user == null) return;
      let id_plan_user = this.$store.state.auth.user.id_plan;
      let id_plan_contenido = acceso.id_planes;
      if(id_plan_contenido!==id_plan_user){
        vue.activar_pago=true;
      }else{
        vue.info_peli.title=acceso.nombre;
        vue.dialog_video=true;
        let data = {
          id_cliente:this.$store.state.auth.user.id_cliente,
          id_contenido:acceso.id_contenido
        }
        vue.axios.post('http://localhost:49220/api/reproducir/contenido',data).then(function(response){
          document.getElementById('video').setAttribute('src',response.data[0].url);
          document.getElementById('video').load();
          let seg=vue.convertir_segundos(response.data[0].tiempo_vista);
          document.getElementById('video').currentTime=seg;
          vue.id_historial= response.data[0].id_historial;
        })
      }
    },estate(estado){
      this.activar_pago=false;
    },video_change(){
      let vue = this;
      var current_time=document.getElementById('video').currentTime;
      var convertido = this.fancyTimeFormat(current_time);
      var data = {
        id: vue.id_historial,
        tiempo_vista:convertido,
      }
      vue.axios.put('http://localhost:49220/api/reproducir/verificar',data).then(function(response){
      })
    },fancyTimeFormat(duration){   
      // Hours, minutes and seconds
      var hrs = ~~(duration / 3600);
      var mins = ~~((duration % 3600) / 60);
      var secs = ~~duration % 60;
      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";
      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }else{
        ret += "00"+ ":" + (mins < 10 ? "0" : "");
      }
      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    },convertir_segundos(duration){
      if( duration!=null){
        var res = duration.split(":");
        var horas = res[0]*3600; 
        var minutos = res[1]*60;
        var segundos = res[2]; 
        console.log(duration);
        return  parseInt(horas)+parseInt(minutos)+parseInt(segundos);
      }else{
        return 0;
      }
    }
  },
  created() {
    // console.log(this.data);
  },mounted() {
  },
};

</script>