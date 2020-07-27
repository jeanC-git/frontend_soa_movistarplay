<template  style="background:#262626">
    <div>
        <v-data-table dark
        style="background:#262626"
        :headers="headers_mi_lista"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        v-if="tipo_consumo==2"
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
        <v-data-table dark
        style="background:#262626"
        :headers="headers_mis_alquileres"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        v-else-if="tipo_consumo==3"
        >
        </v-data-table>
    </div>
</template> 
<script>
export default {
    props: ["tipo_consumo"],
    data() {
        return {
        headers_mi_lista: [
            { text: 'Nombre', value: 'nombre' },
            { text: 'Tiempo de vista', value: 'tiempo_vista' },
            { text: 'Fecha', value: 'fecha' },
            { text: 'Portada', value: 'portada' },
        ],
        headers_mis_alquileres: [
            { text: 'Nombre', value: 'calories' },
            { text: 'Fecha inicio', value: 'fat' },
            { text: 'Fecha fin', value: 'carbs' },
            { text: 'tipo control', value: 'protein' },
        ],
        items:[

        ],buscador:'',
        }
    },
    mounted() {
        this.get_listas();
    },methods: {
        get_listas(){
            let vue = this;
            console.log(vue.tipo_consumo);
            if(vue.tipo_consumo==2){
            let id_cliente = this.$store.state.auth.user.id_cliente;
                vue.axios.get('http://localhost:49220/api/Consumo/MiLista?id_cliente='+id_cliente).then(function(response){
                    vue.items=response.data;
                    console.log(vue.items);
                });
            }else if(vue.tipo_consumo==3){
                let id_cliente = this.$store.state.auth.user.id_cliente;
                vue.axios.get('http://localhost:49220/api/Consumo/Misalquileres?id_cliente='+id_cliente).then(function(response){
                    vue.items=response.data;
                    console.log(vue.items);
                });
            }
        },listarContenidos() {
            let vue = this;
            let id_cliente = this.$store.state.auth.user.id_cliente;
            let buscador = vue.buscador;
            if(buscador==''){
                vue.get_listas();
            }else{
                vue.axios.get(
                    "http://localhost:49220/api/Consumo/busquedahistorial?id_cliente=" +id_cliente+"&nombre="+
                    vue.buscador
                ).then((response) => {
                    vue.items = response.data;
                })
                .catch((error) => {
                console.log(error);
                });
            }
        },      
    },
}
</script>