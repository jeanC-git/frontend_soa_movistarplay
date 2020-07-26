<template>
    <div >
        <v-container v-if="tipo_cuenta==1">
            <v-row>
                <v-col cols="12" md="6">
                    <v-card
                            class="mx-auto"
                            outlined
                            max-width="100%"
                        >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-13">Control Parental</v-list-item-title>
                                <v-card-text >Activa esta opción si quieres bloquear contenidos con restricciones de edad. Cualquier película, Serie u otro que esté por encima del control parental configurado no será visible.</v-card-text>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-actions class="justify-center">
                            <v-checkbox
                                v-model="checkbox"
                                :label="'Activar'"
                                @change="Activar_control()"
                            ></v-checkbox>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card
                            :disabled="disabled_card_control"
                            class="mx-auto"
                            outlined
                        >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline">Modificar rango Edad Parental</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item two-line>
                            <v-list-item-content>
                                <v-list-item-title>
                                    <v-checkbox
                                        v-model="checkbox_control_todo"
                                        :label="'TE - Para todos los públicos '"
                                        @change="(checkbox_control_mayor==true) ? checkbox_control_mayor=false : checkbox_control_todo=true"
                                    ></v-checkbox>
                                </v-list-item-title>
                                <v-list-item-title>
                                    <v-checkbox
                                        v-model="checkbox_control_mayor"
                                        :label="'TE - Para todos los públicos '"
                                        @change="(checkbox_control_todo==true) ? checkbox_control_todo=false : checkbox_control_mayor=true"
                                    ></v-checkbox>
                                </v-list-item-title>
                                <v-list-item-title>
                                    <v-card-text class="font-weight-medium">PIN Parental</v-card-text>
                                    <v-text-field
                                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.min,rules.emailMatch]"
                                        :type="show3 ? 'text' : 'password'"
                                        name="input-10-2"
                                        label="Pin"
                                        hint="4 caracteres"
                                        value=""
                                        v-model="pin_acceso"
                                        class="input-group--focused mx-8"
                                        @click:append="show3 = !show3"
                                    ></v-text-field>
                                </v-list-item-title>
                                <v-list-item-title>
                                    <v-card-text class="font-weight-medium">Vuelve a introducirlo</v-card-text>
                                    <v-text-field
                                        class="mx-8"
                                        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.emailMatch]"
                                        :type="show4 ? 'text' : 'password'"
                                        name="input-10-2"
                                        label="Pin"
                                        hint="4 caracteres"
                                        value=""
                                        :disabled="pin_acceso.length>0 ? false : true"
                                        @click:append="show4 = !show4"
                                    ></v-text-field>
                                </v-list-item-title>
                                <v-card-actions class="justify-end">
                                    <v-btn  color="primary">Guardar</v-btn>
                                </v-card-actions>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else-if="tipo_cuenta==2">
            <v-row>
                <v-col cols="12" md="6">
                    <v-card
                            class="mx-auto"
                            outlined
                            max-width="100%"
                        >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-13">Notificaciones en las apps</v-list-item-title>
                                <v-card-text >Ahora podrás recibir notificación de las novedades de Movistar Play en tu móvil y tablet.</v-card-text>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-img
                                alt="Movistar Play"
                                class="shrink ml-16"
                                contain
                                src="images/notifi.png"
                                transition="scale-transition"
                                width="380"
                                @click="irInicio()"
                            />
                        </v-list-item>
                    </v-card>   
                </v-col>
                <v-col cols="12" md="6">
                    <v-card>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline">Elige las notificaciones</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-treeview
                                selectable
                                selected-color="blue"
                                :items="items"
                            ></v-treeview>
                        </v-list-item>
                        <v-card-actions class="justify-end">
                            <v-btn  color="primary">Guardar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else-if="tipo_cuenta==3">
            <v-tabs 
                v-model="tabs_pago"
                background-color="#262626"
                class="elevation-2"
                dark
                :centered="centered"
                :right="right"
                :grow="grow"
                :vertical="vertical"
                :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                :icons-and-text="icons"
                >
                <v-tabs-slider></v-tabs-slider>
                <v-tab
                    v-for="tipo_pago in array_tipo_pago"
                    :key="tipo_pago.tipo"
                    :href="`#tab-${tipo_pago.tipo}`"
                    v-text="tipo_pago.nombre"
                ></v-tab>
                <v-tab-item v-for="tipo_pago in array_tipo_pago" :key="tipo_pago.tipo" :value="'tab-' + tipo_pago.tipo">
                    <v-card flat tile>
                    <tabscuenta :tipo_pago="tipo_pago.tipo"></tabscuenta>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-container>
    </div>
</template>
<script>
import tabscuenta from "../components/Tabs_pagos.vue";
export default {
    components:{
        tabscuenta
    },
    props:['tipo_cuenta'],
    data() {
        return {
            disabled_card_control: true,
            checkbox:false,
            checkbox_control_todo:false,
            checkbox_control_mayor:false,
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            pin_acceso:'',
            password: 'Password',
            rules: {
                required: value => !!value || 'Requerido.',
                min: v => v.length == 4 || 'Tiene que tener 4 caracteres',
                emailMatch: v => v==this.pin_acceso || 'Los pin no son iguales',
            },
            items:[
                {
                    id: 1,
                    name: 'Todos :',
                    children: [
                        { id: 2, name: 'Acción' },
                        { id: 3, name: 'Drama' },
                        { id: 4, name: 'Comedia' },
                        { id: 5, name: 'Infantil/Familiar' },
                        { id: 6, name: 'Terror' },
                        { id: 7, name: 'Estrenos/Alquiler' },
                        { id: 8, name: 'Peruano y Latino' },
                    ],
                },
            ],
            tab: null,
            icons: true,
            centered: false,
            grow: false,
            vertical: true,
            prevIcon: true,
            nextIcon: true,
            right: true,
            tabs: 3,
            tabs_pago:2,
            array_tipo_pago: [
                { nombre: "Lista de Pagos Servicios", tipo: 1 },
                { nombre: "Lista de Pagos Alquileres", tipo: 2 },
            ],
        }
    },methods: {
        Activar_control(){
            let vue = this;
            (vue.checkbox==true) ? vue.disabled_card_control=false : vue.disabled_card_control=true ;
        }
    },
}
</script>