<template  style="background:#262626">
    <div>
        <v-data-table dark
        style="background:#262626"
        :headers="headers_vistos"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
        v-if="tipo_consumo==1"
        ></v-data-table>
        <v-data-table dark
        style="background:#262626"
        :headers="headers_mi_lista"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
        v-else-if="tipo_consumo==2"
        ></v-data-table>
        <v-data-table dark
        style="background:#262626"
        :headers="headers_mis_alquileres"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
        v-else-if="tipo_consumo==3"
        ></v-data-table>
    </div>
</template> 
<script>
export default {
     props: ["tipo_consumo"],
    data() {
        return {
        headers_vistos: [
            { text: 'Titulo', value: 'calories' },
            { text: 'Género', value: 'fat' },
            { text: 'Estado', value: 'carbs' },
            { text: 'Visto', value: 'protein' },
        ],
        headers_mi_lista: [
            { text: 'Nombre', value: 'calories' },
            { text: 'Tiempo de vista', value: 'fat' },
            { text: 'Fecha', value: 'carbs' },
            { text: 'Portada', value: 'protein' },
        ],
        headers_mis_alquileres: [
            { text: 'Nombre', value: 'calories' },
            { text: 'Fecha inicio', value: 'fat' },
            { text: 'Fecha fin', value: 'carbs' },
            { text: 'tipo control', value: 'protein' },
        ],
        desserts: [
            {
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
            },
            {
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
            },
            {
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
            },
            {
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
            },
            {
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
            },
            {
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
            },
            {
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
            },
            {
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
            },
            {
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
            },
            {
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
            },
        ],
        }
    },methods: {
        
    },
}
</script>