<template>
  <div style="background: #272727;">
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
        style="display:flex; justify-content:center;"
      >
        <v-card class="text-center" style="padding-top: 10%" height="100vh" width="100vw" dark>
          <v-card-text>
            <br />
            <br />
            <br />
            <p class="text-center" style="font-size: 2.1rem">Página no encontrada</p>
            <br />
            <v-icon x-large>mdi-emoticon-sad</v-icon>
            <br />
            <br />
            <br />
            <br />
            <br />
            <router-link to="/" style="text-decoration: none; color:white">
              <p class="text-center" style="font-size: 4rem ; ">Inicio</p>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>