<template>
  <div>
    <v-card flat>
      <hr />
      <v-card-title>Búsqueda por nombre</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="contenidos"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-row class="mr-2 ml-2">
              <v-col cols="12" lg="11" md="11">
                <v-text-field :label="'Filtro por nombre'" v-model="buscador"></v-text-field>
              </v-col>
              <v-col cols="12" lg="1" md="1">
                <v-btn class="mx-2" fab large @click="listarContenidos()">
                  <v-icon dark>mdi-card-search-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </template>
          <template v-slot:item.portada="{ item }">
            <v-container fluid>
              <v-row justify="space-around"></v-row>
              <v-col cols="12">
                <v-img :src="item.portada" aspect-ratio="1.7" contain></v-img>
              </v-col>
            </v-container>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscador: "",
      headers: [
        { text: "Portada", value: "portada", align: "center" },
        { text: "Nombre", value: "nombre", align: "center" },
        { text: "Duración", value: "calories", align: "center" },
        { text: "Categoría", value: "id_categoria", align: "center" },
      ],
      contenidos: [],
    };
  },
  methods: {
    listarContenidos() {
      let vue = this;
      vue.axios
        .get(
          "http://localhost:49220/api/consumo/busquedapornombre?nombre=" +
            vue.buscador
        )
        .then((response) => {
          console.log(response.data);
          vue.contenidos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>