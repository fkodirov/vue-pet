<script lang="ts">
import { mapActions } from 'vuex';
// import axios from 'axios'
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
        email:"",
        phone:"",
        password:"",
        username:"",
        birthdate:"",
      },
      
    }
  },
methods:{
  ...mapActions(['addUser']),
  show(){
    this.passwordShow=!this.passwordShow;
  },
  checkForm(){
    this.errors=[];
    if(!this.form.login || this.form.login.length<6){
      this.errors.push("login")
    }
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(!this.form.email || !EMAIL_REGEXP.test(this.form.email)){
      this.errors.push("email")
    }
    if(!this.form.password || this.form.password.length<8){
      this.errors.push("password")
    }
    const validationRegex = /^\d{12}$/;
    if(!this.form.phone  || !this.form.phone.match(validationRegex) || !(this.form.phone.slice(0, 3)=='998')){
      this.errors.push("phone")
    }
    if(!this.form.username || this.form.username.length<2){
      this.errors.push("username")
    }
    if(!this.form.birthdate){
      this.errors.push("bithdate")
    }
    if(this.errors.length!==0)
      return false
    return true;
  },
  sendForm(){
    const promise=new Promise(resolve => setTimeout(()=>resolve('Данные отправлены'), 1000));
    promise.then((value) => {
    console.log(value);
    this.$router.push('/profile')
});
      // axios.post('/registration',JSON.stringify(this.form))
      // .then((res)=>console.log(res))
  },
  handleSubmit(){
    if(this.checkForm()){
    this.addUser(this.form)
    console.log("onSubmit")
    this.sendForm()}
  }
}}

</script>

<template>
  <div class="registration w-100">
    <div class="registration__inner">
  <h1>Регистрация</h1>
  <form class="p-3" @submit.prevent novalidate>
  <div class="mb-1">
    <label for="login" class="form-label">Логин</label>
    <input v-model="form.login" @focusin="errors=errors.filter(e=>e!='login')" type="text" class="form-control" :class="{'is-invalid':errors.includes('login')}" id="login">
    <p v-show="errors.includes('login')" class="text-danger">Invalid login!</p>
  </div>
  <div class="mb-1">
    <label for="email" class="form-label">Email</label>
    <input v-model="form.email" type="email" @focusin="errors=errors.filter(e=>e!='email')" class="form-control" :class="{'is-invalid':errors.includes('email')}" id="email">
    <p v-show="errors.includes('email')" class="text-danger">Invalid email!</p>
  </div>
  <div class="mb-1">
    <label for="phone" class="form-label">Телефон</label>
    <input v-model="form.phone" type="text" @focusin="errors=errors.filter(e=>e!='phone')" class="form-control" :class="{'is-invalid':errors.includes('phone')}" id="phone">
    <p v-show="errors.includes('phone')" class="text-danger">Invalid phone!</p>
  </div>
  <div class="mb-1">
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
  <div class="mb-1">
    <label for="username" class="form-label">Имя</label>
    <input type="text" v-model="form.username" @focusin="errors=errors.filter(e=>e!='username')" class="form-control" :class="{'is-invalid':errors.includes('username')}" id="username">
    <p v-if="errors.includes('username')" class="text-danger">Invalid username!</p>
  </div>
  <div class="mb-3">
    <label for="date" class="form-label">Дата рождения</label>
    <input type="date" v-model="form.birthdate" @focusin="errors=errors.filter(e=>e!='bithdate')" class="form-control" :class="{'is-invalid':errors.includes('bithdate')}" id="date">
    <p v-if="errors.includes('bithdate')" class="text-danger">Invalid birthdate!</p>
  </div>
  <button type="submit" @click="handleSubmit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</template>

<style scoped>
.registration{
  display: flex;
  justify-content: center;
}
.registration__inner{
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
