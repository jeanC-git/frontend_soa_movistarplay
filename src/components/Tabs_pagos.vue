<template>
    <div>
        <v-container>
            <template>
                <div style="display: flex;justify-content: end;" v-if="tipo_pago==1">
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        @click="dialog_pago=true"
                    >Hacer pago del mes</v-btn>
                </div>
                <v-data-table
                    :headers="headers"
                    :items-per-page="5"
                    class="elevation-1"
                    v-if="tipo_pago==1"
                >
                </v-data-table>
                <!-- TABLE DE ALQUILERES -->
                <v-data-table
                    :headers="headers_pago_alquiler"
                    :items-per-page="5"
                    class="elevation-1"
                    v-if="tipo_pago==2"
                >
                </v-data-table>
            </template>
            <v-dialog v-model="dialog_lista" width="40%">
                <v-card>
                    <v-container>
                        <v-row >
                            <v-col cols="12" sm="12" md="6">
                                <div class="d-flex justify-center">
                                    <v-img
                                    alt="Movistar Play"
                                    class="shrink"
                                    contain
                                    src="images/movistar-logo.png"
                                    transition="scale-transition"
                                    width="70"
                                    />
                                    <v-img
                                    alt="Movistar Play"
                                    class="shrink mt-1 hidden-sm-and-down"
                                    contain
                                    min-width="100"
                                    src="images/movistar-text.png"
                                    width="50"
                                    />
                                </div>
                            </v-col>
                            <v-col cols="12" sm="12" md="6">
                                <v-list-item >
                                    <v-list-item-content>
                                        <v-list-item-title >
                                            Telefonia del Perú S.A.A.
                                        </v-list-item-title>
                                        <v-spacer></v-spacer>
                                        <v-list-item-title >
                                            R.U.C 20100017491
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <span class="headline mb-13 ml-5" style="font-size: 17px !important;">Constancia de Pago</span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <template>
                            <v-data-table
                                :headers="headers_detalle_alquiler"
                                :items-per-page="5"
                                class="elevation-1"
                            >
                            </v-data-table>
                            </template>
                        </v-row>
                    </v-container>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>
<script>
export default {
    props:['tipo_pago'],
    data() {
        return {
            dialog_pago:false,
            dialog_lista:true,
            headers: [
                { text: 'Total'            ,align: 'start',value: 'total'},
                { text: 'Subtotal'         ,align: 'start',value: 'subtotal'},
                { text: 'Fecha'            ,align: 'start',value: 'fecha' },
                { text: 'igv'              ,align: 'start',value: 'documento' },
                { text: 'Tipo documento'   ,align: 'start',value: 'Tipo documento' },
                { text: 'Fecha vencimiento',align: 'start',value: 'Fecha vencimiento' },
            ],headers_pago_alquiler:[
                {text: 'Total'             ,align: 'start',value: 'total'},
                { text: 'Subtotal'         ,align: 'start',value: 'subtotal'},
                { text: 'Fecha'            ,align: 'start',value: 'fecha' },
                { text: 'igv'              ,align: 'start',value: 'documento' },
                { text: 'Tipo documento'   ,align: 'start',value: 'Tipo documento' },
                { text: 'Fecha vencimiento',align: 'start',value: 'Fecha vencimiento' },
            ],headers_detalle_alquiler:[
                {text: 'Fecha'   , align: 'center',value: 'Fecha'},
                { text: 'Detalle', align: 'center',value: 'Detalle'},
                { text: 'Periodo', align: 'center',value: 'Periodo' },
                { text: 'Importe', align: 'center',value: 'Importe' },
            ],
            
        }
    },
}
</script>