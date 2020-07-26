<template>
    <div>
        <v-dialog v-model="dialog_pago" width="40%">
            <v-card>
                <button @click="cerrar_modal()">Cerrar</button>
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
                            <v-form class="mx-5">
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field label="Total a pagar" color="black" v-model="campos_pago.total" disabled></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field label="Fecha de vencimiento" color="black" v-model="campos_pago.fecha_vencimiento" disabled></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-spacer></v-spacer>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="12" sm="12" md="6">
                                        <v-text-field label="Número de su tarjeta" color="black" v-model="campos_pago.fecha_vencimiento_tarjeta"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="12" md="6">
                                        <v-text-field label="Fecha de vencimiento" color="black" v-model="campos_pago.año_tarjeta"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="12" md="6" class="d-flex">
                                        <v-text-field label="CCV" color="black" v-model="campos_pago.ccv"></v-text-field><v-icon color="blue">mdi-help-circle mdi-blue</v-icon>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12" >
                                        <v-icon>mdi-security</v-icon><span>Esta en un entorno seguro </span>
                                        <br><span style="font-size: 10px;font-weight: initial;color: gray;padding-left: 4px">Este sitio cumple con los estandares de seguridad de la industria de medio de pago PCI-DSS para proteger su información personal y de su tarjeta</span>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    props:['dialog_pago'],
    data() {
        return {
            campos_pago:{
                total:'100.00',
                numero_tarjeta:'',
                fecha_vencimiento_tarjeta:'',
                subtotal: 164,
                fecha : "2020-07-13",
                igv:18,
                documento : "PAGO-0000001",
                año_tarjeta : '',
                cvv_tarjeta : '',
                documento : "PAGO-0000001",
                tipo_documento: "FACTURA",
                fecha_vencimiento: "2020-07-28",
                detalle_pago:{
                    total : 100,
                    subtotal : 82,
                    igv : 18,
                    descripcion : "Pago de membresia Movistar Play Lite",
                    fecha : "2020-07-13",
                    periodo : "Primer mes" 
                }
            }
        }
    },methods: {
        cerrar_modal(){
            this.$emit("update_state", false);
        }
    },
}
</script>