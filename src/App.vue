<script lang="ts">
import Registration from './components/Registration.vue';
import Navbar from './components/Navbar.vue';
import Login from './components/Login.vue';

import { mapGetters } from 'vuex';
export default {
methods:{
},
computed: {
    ...mapGetters(['isAuth','user']),
  },
components: {
  'Registration': Registration,
  'Navbar': Navbar,
  'Login' : Login,
}
}
</script>

<template>
  <Navbar/>
  <RouterView/>
  <!-- <div v-if="!this.isAuth">
  <Login/>
  <Registration /></div>
  <div v-else>Hello{{ user.username }}</div> -->
</template>

<style scoped>
</style>
