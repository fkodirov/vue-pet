<script lang="ts">
import { mapGetters } from 'vuex';
// import axios from 'axios'
// import { mapActions } from 'vuex';
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
export default {
computed: {
    ...mapGetters(['isAuth','user']),
  },
}
</script>

<template>
    <table>
      <tr><td>Name</td><td>{{ user.username }}</td></tr>
      <tr><td>Login</td><td>{{ user.login }}</td></tr>
      <tr><td>Email</td><td>{{ user.email }}</td></tr>
      <tr><td>Phone</td><td>{{ user.phone }}</td></tr>
      <tr><td>Birthdate</td><td>{{ user.birthdate }}</td></tr>
    </table>
</template>

<style scoped>

</style>
