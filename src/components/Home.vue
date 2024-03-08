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
created(){
  if(!this.user.username)
  this.$router.push('login');
}
}
</script>

<template>
    <h1 v-if="user.username">Hello {{ user.username }}</h1>
</template>

<style scoped>

</style>
