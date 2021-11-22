<template>
  <v-app>
    <side-bar></side-bar>
    
    <v-container class="mt-3">
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import sideBar from "./components/side-bar.vue";

export default {
  name: "App",

  components: {
    sideBar,
  },

  data: () => ({
    //
  }),
};
</script>
