<template>
  <v-container>
    <v-layout text-xs-center row wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Vuex/Firestore Boilerplate
        </h1>
      </v-flex>
      <v-flex mb-5 xs12>
        <h2 class="headline font-weight-bold mb-3">What's included?</h2>
        <v-layout justify-center row wrap>
          <a v-for="(next, i) in whatsIncluded" :key="i" :href="next.href" class="subheading mx-3" target="_blank">
            {{ next.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    whatsIncluded: [
      {
        text: 'Vue.js',
        href: 'https://vuejs.org/'
      },
      {
        text: 'Vuetify',
        href: 'https://vuetifyjs.com/'
      },
      {
        text: 'Vuex',
        href: 'https://vuex.vuejs.org/'
      },
      { text: 'Vue Router',
        href: 'https://router.vuejs.org/'
      },
      { text: 'Vuexfire',
        href: 'https://github.com/posva/vuexfire/tree/firestore'
      },
      { text: 'Firestore',
        href: 'https://firebase.google.com/products/firestore/'
      },
      { text: 'Firebase Auth',
        href: 'https://firebase.google.com/products/auth/'
      }

    ]
  })
}
</script>

<style>
</style>
