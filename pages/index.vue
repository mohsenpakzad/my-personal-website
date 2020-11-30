<template>
  <v-container fluid>
    <v-row class="ma-3">
      <v-col>
        <v-avatar class="mb-4" size="250">
          <v-img src="/me.jpg"></v-img>
        </v-avatar>
        <h1 class="font-weight-medium text-h3 py-3">
          Hello.
        </h1>
        <h2 class="font-weight-medium text-h4 py-3">
          My name is Mohsen Pakzad.
        </h2>

        <!-- TODO: make formattedAge show also months and days -->
        <h3 class="font-weight-medium text-h4 py-3">
          I born in {{ myFormattedBirthday }}, and currently {{ myFormattedAge }} old.
        </h3>
        <p class="font-weight-regular headline py-4">
          I'm computer engineer of Shiraz university.
        </p>
        <v-btn
            outlined
            :href="myGithubPageLink"
            target="_blank"
            large
        >
          <v-icon left>mdi-github</v-icon>
          My github page
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {
  name: 'index',
  data: () => ({
    myGithubPageLink: 'https://github.com/mohsenpakzad',
    myBirthday: moment('1999-7-25')
  }),
  computed: {
    myFormattedBirthday() {
      return this.myBirthday.format('MMMM Do YYYY');
    },
    myFormattedAge() {
      return this.myBirthday.fromNow(true);
    }
  },
}
</script>
