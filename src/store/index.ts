import { createStore } from 'vuex'
import profile from './profile'

export const store = createStore({
  modules: {
    profile,
  }})