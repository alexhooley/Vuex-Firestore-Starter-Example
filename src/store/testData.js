import { firestoreAction } from 'vuexfire'
import db from '../firebase'

const state = {
  items: []
}

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('items', db.collection('items'))
    console.log('Vuexfire/Firestore BindRef Action Inititated - store/testData.js')
  })
}

export default {
  namespaced: true,
  state,
  actions
}
