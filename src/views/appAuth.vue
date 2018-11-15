<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="elevation-3">
          <v-card-title>
            <h1 class="text-xs-center" style="width: 100%">
              Coming Soon...
            </h1>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  created () {
    console.log('Vue Created Lifecycle Hook - views/appAuth.vue')
  }
}
</script>
