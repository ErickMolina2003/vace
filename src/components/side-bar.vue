<template>
  <v-navigation-drawer permanent fixed app>
    <v-list-item>
        <v-img :src="require('../assets/Logo_Vace.png')" alt="Logo" class="mx-auto my-auto" max-width="150"> </v-img>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="`/${item.to}`" v-on="on">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Quiénes somos", icon: "mdi-account", to: "quienes-somos" },
        { title: "Misión y Visión", icon: "mdi-account", to: "mision-vision"},
        { title: "Valores y Estrategias", icon: "mdi-account", to: "valores-estrategias" },
        { title: "Tecnologías", icon: "mdi-account", to:"tecnologias" },
        { title: "Equipo", icon: "mdi-account", to:"equipo" },
      ],
      right: null,
    };
  },
};
</script>
