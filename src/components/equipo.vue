<template>
  <div>
    <v-container class="mt-4 flex">
      <v-row align="center" justify="center">
          <h1>Equipo</h1>
      </v-row>
      <v-row class="mt-10">
        <v-col cols="12" lg="3" md="3">
          <v-img
            :src="require('../assets/erick.png')"
            alt="Logo"
            class="mx-auto my-auto"
            height="175"
            max-width="150"
          >
          </v-img>
          <h5 class="mt-2 ml-9">Erick Alejandro Molina</h5>
          <h6 class="mt-2 ml-15">20201002723</h6>
        </v-col>
        <v-col cols="12" lg="3" md="3">
          <v-img
            :src="require('../assets/vivian.png')"
            alt="Logo"
            class="mx-auto my-auto"
            height="175"
            max-width="150"
          >
          </v-img>
          <h5 class="mt-2 ml-9">Viviana Sofía Lanza</h5>
          <h6 class="mt-2 ml-15">20171033265</h6>
        </v-col>
        <v-col cols="12" lg="3" md="3">
          <v-img
            :src="require('../assets/alexi.png')"
            alt="Logo"
            class="mx-auto my-auto"
            height="175"
            max-width="150"
          >
          </v-img>
          <h5 class="mt-2 ml-8">Gustavo Alexi Raudales</h5>
          <h6 class="mt-2 ml-16">20191004555</h6>
        </v-col>
        <v-col cols="12" lg="3" md="3">
          <v-img
            :src="require('../assets/cris.png')"
            alt="Logo"
            class="mx-auto my-auto"
            height="175"
            max-width="150"
          >
          </v-img>
          <h5 class="mt-2 ml-9">Cristian David Rivera</h5>
          <h6 class="mt-2 ml-16">20191004778</h6>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
