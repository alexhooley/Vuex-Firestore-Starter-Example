<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary right app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.id" :to="(item.to)">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="https://github.com/" target="_blank">
          <v-list-tile-action>
            <v-icon>open_in_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>VIEW ON GITHUB</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark app class="amber darken-2">
      <router-link to="/" tag="v-toolbar-title" style="cursor:pointer">
        <v-toolbar-title class="headline text-uppercase" to="/">
          <span>VUEX</span>
          <span class="font-weight-light">FIRESTORE</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.id" :to="(item.to)">{{item.name}}</v-btn>
        <v-btn flat href="https://github.com/alexhooley/Vuex-Firestore-Starter-Example" target="_blank">
          View on Github
          <v-icon right>open_in_new</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appFooter from './components/appFooter'

export default {
  name: 'App',
  components: {
    'app-footer': appFooter
  },
  data () {
    return {
      drawer: null,
      menuItems: [
        { name: 'HOME', icon: 'home', to: '/' },
        { name: 'FIRESTORE DB', icon: 'data_usage', to: '/firestore-db' },
        { name: 'FIREBASE AUTH', icon: 'supervisor_account', to: '/firebase-auth' }
      ]
    }
  }
}
</script>
