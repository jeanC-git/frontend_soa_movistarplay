<template>
  <div>
    <v-card flat>
      <hr />
      <v-card-title>Datos generales</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="4">
            <v-select label="Tipo contenido" :items="['Serie', 'Película']"></v-select>
          </v-col>
          <v-col cols="12" lg="4">
            <v-select label="Categoria" :items="arrayCategorias"></v-select>
          </v-col>
          <v-col cols="12" lg="4">
            <v-select label="Tipo contenido" :items="['Serie', 'Película']"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="4">
            <v-text-field outlined label="Link Trailer"></v-text-field>
          </v-col>
          <v-col cols="12" lg="4">
            <v-select label="Tipo control" :items="['Si', 'No']"></v-select>
          </v-col>
          <v-col cols="12" lg="4">
            <v-select label="Tipo contenido" :items="['Serie', 'Película']"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="12">
            <v-textarea
              outlined
              rows="2"
              name="input-7-4"
              label="Descripción contenido"
              value="Escriba una descripcion del contenido"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>