<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout
          column
          justify-center
          align-center
        >

          <p class="display-4 pa-8">
            {{ error.statusCode === 404 ? pageNotFound: otherError}}
          </p>

          <v-btn to="/" rounded large nuxt color="primary">
            <v-icon left>home</v-icon>
              Home page
          </v-btn>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    layout: 'empty',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        pageNotFound: '404 Not Found',
        otherError: 'An error occurred'
      }
    },
    head() {
      const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
      return {
        title
      }
    }
  }
</script>
