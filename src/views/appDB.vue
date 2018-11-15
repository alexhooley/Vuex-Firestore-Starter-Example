<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card class="elevation-3">
          <v-list two-line>
            <v-subheader>Item List ({{items.length}})</v-subheader>
            <v-card-actions class="pa-3">
              <v-layout row wrap justify-center>
                <v-form @submit.prevent="addTodo" class="text-xs-center">
                  <v-text-field label="New Item" v-model="newTodo"></v-text-field>
                  <v-btn type="submit" class="mt-3">
                    submit
                  </v-btn>
                </v-form>
              </v-layout>
            </v-card-actions>
            <v-list-tile v-for="item in items" :key="item.id" avatar @click="''">
              <v-list-tile-avatar>
                <v-icon>whatshot</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple @click="removeTodo(item.id)">
                  <v-icon color="grey lighten-1">cancel</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <code class="pa-4" style="width:100%; height:100%;">Output:<br>{{items}}</code>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import db from '../firebase.js'

export default {
  data: () => ({
    newTodo: ''
  }),
  computed: {
    ...mapState('testData', ['items'])
  },
  methods: {
    ...mapActions('testData', ['init']),
    removeTodo (id) {
      db.collection('items').doc(id).delete()
      console.log('Remove Todo Action Initiated - views/appDB.vue')
    },
    addTodo () {
      if (this.newTodo.trim()) {
        db.collection('items').add({
          text: this.newTodo
        })
        this.newTodo = ''
        console.log('Add Todo Action Initiated - views/appDB.vue')
      }
    }
  },
  created () {
    console.log('Vue Created Lifecycle Hook - views/appDB.vue')
    this.init()
  }
}
</script>
