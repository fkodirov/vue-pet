<script lang="ts">
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      errors:[] as string[],
      passwordShow: false,
      form: {
        login:"",
        email:"",
        phone:"",
        password:"",
        username:"",
        birthdate:"",
      },
    }
  },
  methods: {
    ...mapActions(["getUser"])
  },
  created(){
    // this.getUser('e473');
    // this.getUser('12321');
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
        </li>
        <li class="nav-item">
          <router-link to="/profile">Profile</router-link>
          <!-- <a class="nav-link" href="#">Profile</a> -->
        </li>
      </ul>
      <form class="d-flex" role="search" @submit.prevent>
        <button class="btn btn-success me-3" type="button" @click="()=>{$router.push('login')}">Login</button>
        <button class="btn btn-primary" type="button" @click="()=>{$router.push('registration')}">Registration</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
</style>
