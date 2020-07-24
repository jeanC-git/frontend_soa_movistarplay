<template>
    <div>
        <v-container>
            <template>
                <div>
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                    >Hacer pago del mes</v-btn>
                </div>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                >
                </v-data-table>
            </template>
            <!-- <v-row cols="12" sm="12" md="12" >
                <v-card width="100%">
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
                </v-card>
            </v-row> -->
        </v-container>
    </div>
</template>
<script>
export default {
    props:['tipo_pago'],
    data() {
        return {
            headers: [
                {text: 'Total',value: 'total'},
                { text: 'Subtotal', value: 'subtotal'},
                { text: 'Fecha', value: 'fecha' },
                { text: 'igv', value: 'documento' },
                { text: 'Tipo documento', value: 'Tipo documento' },
                { text: 'Fecha vencimiento', value: 'Fecha vencimiento' },
            ]
        }
    },
}
</script>