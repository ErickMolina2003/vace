/* eslint-disable vue/valid-template-root */ /* eslint-disable
vue/valid-template-root */
<template>
  <v-container>
      <v-row justify="center" class="mb-5">
          <h1>Tecnologías</h1>
      </v-row>
    <v-row>
      <v-card class="mx-auto" max-width="350">
        <v-img src="../assets/vue.png" height="200px" width="330"></v-img>

        <v-card-title> Vue </v-card-title>

        <v-card-subtitle> Evan You </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text @click="irVue">
            Conoce más
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Es un framework de JavaScript de código abierto para la
              construcción de interfaces de usuario y aplicaciones de una sola
              página con uso de routing.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <v-card class="mx-auto" max-width="350">
        <v-img src="../assets/vueti.png" height="200px" width="330"></v-img>

        <v-card-title> Vuetify </v-card-title>

        <v-card-subtitle> Evan You </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text @click="irVuetify"> Conoce más </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Vuetify es un framework progresivo que intenta llevar al
              desarrollo web al siguiente nivel. Para poder cumplir con esta
              tarea de la mejor forma ofrece estructuras pre diseñadas.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
    <v-row class="mt-10">
      <v-card class="mx-auto" max-width="350">
        <v-img src="../assets/AWS.png" height="200px" width="330"></v-img>

        <v-card-title> AWS </v-card-title>

        <v-card-subtitle> Amazon </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text @click="irAWS"> Conoce más </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Es una colección de servicios de computación en la nube pública
              (llamados servicios web) que en conjunto forman una plataforma de
              computación en la nube.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>

      <v-card class="mx-auto" max-width="350">
        <v-img src="../assets/Django.png" height="200px" width="330"></v-img>

        <v-card-title> Django </v-card-title>

        <v-card-subtitle> Django Software Foundation </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text @click="irDjango"> Conoce más </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              Django es un framework de desarrollo web de código abierto,
              escrito en Python, que respeta el patrón de diseño conocido como
              modelo–vista–controlador (MVC).
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),

  methods: {
    irVue() {
      window.open("https://vuejs.org/", "__blank");
    },
    irVuetify() {
      window.open("https://vuetifyjs.com/", "__blank");
    },
    irAWS() {
      window.open("https://aws.amazon.com/", "__blank");
    },
    irDjango() {
      window.open("https://www.djangoproject.com/", "__blank");
    },
  },
};
</script>
