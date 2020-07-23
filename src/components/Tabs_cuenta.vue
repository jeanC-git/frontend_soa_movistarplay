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
                            max-width="100%"
                        >
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-list-item-title class="headline mb-13">Modificar rango Edad Parental</v-list-item-title>
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
    </div>
</template>
<script>
export default {
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
        }
    },methods: {
        Activar_control(){
            let vue = this;
            (vue.checkbox==true) ? vue.disabled_card_control=false : vue.disabled_card_control=true ;
        }
    },
}
</script>