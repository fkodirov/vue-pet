<script lang="ts">
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
// import axios from 'axios'
// import { mapActions } from 'vuex';
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
export default {
  data() {
    return {
      errors:[] as string[],
      passwordShow: false,
      form: {
        login:"",
        password:"",
      },
      
    }
  },
methods:{
  ...mapActions(["login"]),
  show(){
    this.passwordShow=!this.passwordShow;
  },
  checkForm(){
    this.errors=[];
    if(!this.form.login || this.form.login.length<6){
      this.errors.push("login")
    }
    // if(!this.form.password || this.form.password.length<8){
    //   this.errors.push("password")
    // }
    if(this.errors.length!==0)
      return false
    return true;
  },
  async sendForm(){
    await this.login(this.form);
//     const promise=new Promise(resolve => setTimeout(()=>resolve('Данные отправлены'), 1000));
//     promise.then((value) => {
//     console.log(value);
// });
      // axios.post('/registration',JSON.stringify(this.form))
      // .then((res)=>console.log(res))
  },
  handleSubmit(){
    if(this.checkForm()){
    console.log("onSubmit")
    this.sendForm()}
  }
},
computed: {
    ...mapGetters(['isAuth']),
  },
created(){
  if(this.isAuth)
  this.$router.push('/');
},
watch:{
  isAuth:{
    handler(){
      this.$router.push("/")
    }
  }
}

}

</script>

<template>
  <div class="login w-100">
    <div class="login__inner">
  <h1>Авторизация</h1>
  <form class="p-3" @submit.prevent novalidate>
  <div class="mb-1">
    <label for="login" class="form-label">Логин</label>
    <input v-model="form.login" @focusin="errors=errors.filter(e=>e!='login')" type="text" class="form-control" :class="{'is-invalid':errors.includes('login')}" id="login">
    <p v-show="errors.includes('login')" class="text-danger">Invalid login!</p>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Пароль</label>
    <div class="password"><input :type="!passwordShow ? 'password' : 'text'" v-model="form.password" @focusin="errors=errors.filter(e=>e!='password')" class="form-control password" :class="{'is-invalid':errors.includes('password')}" id="password">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" @click="show" fill="currentColor" :style="{ 'right': errors.includes('password') ? '30px' : '8px' }"
 class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  </div>
    <p v-if="errors.includes('password')" class="text-danger">Invalid password!</p>
  </div>
  <button type="submit" @click="handleSubmit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</template>

<style scoped>
.login{
  display: flex;
  justify-content: center;
}
.login__inner{
  max-width: 500px;
  width: 100%;
}
.password{
  position: relative;
}
.bi-eye{
  position: absolute;
  right: 8px;
  top: 50%;
  background-image: url();
  transform: translate(-50%, -50%);
}
</style>
