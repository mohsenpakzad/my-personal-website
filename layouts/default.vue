<template>
  <v-app
  >

    <app-header></app-header>

    <v-main>

      <nuxt/>

    </v-main>

  </v-app>
</template>

<script>
  import AppHeader from "../components/AppHeader";

  export default {
    name: 'default',
    components: {
      AppHeader
    }
  }

</script>
