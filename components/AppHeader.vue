<template>

  <v-app-bar
    app
    color="primary"
    dark
    flat
  >

    <v-toolbar-title
    >

      <v-icon large color="secondary">mdi-account-alert</v-icon>

    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      icon
      color="secondary"
      @click="toggleTheme"
    >
      <v-icon v-if="$vuetify.theme.dark">mdi-white-balance-sunny</v-icon>
      <v-icon v-else>mdi-weather-night</v-icon>
    </v-btn>

  </v-app-bar>

</template>

<script>
  export default {
    name: "AppHeader",
    methods: {
      toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    }
  }
</script>
