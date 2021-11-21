<template>
<b-row class="text-center">
    <b-col></b-col>
    <b-col cols="4">
      <div class="mr">
        <b-card title="Signin">
      <div>
        <b-form @submit.prevent="signin">
          <b-form-group id="input-group-2">
            <b-form-input
              id="input-"
              type="email"
              v-model="email"
              placeholder="Enter your Email"
              required
            ></b-form-input>
            <b-form-group></b-form-group>
            <b-form-input
              id="input-2"
              type="password"
              v-model="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
          <div class="text-left">
            <b-button type="submit" variant="primary">Signin</b-button>
          </div>
          <p>Do not have an account? <NuxtLink to="/signup">Signup</NuxtLink> </p>
          <p id="err" ></p>
        </b-form>
      </div>
    </b-card>
    </div>
    </b-col>
    <b-col></b-col>
  </b-row>
    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
//import createMurmurVue from "~/components/CreateMurmur/CreateMurmur.vue"
export default {
  name: 'Signin',

  data() {
    return {
        email: '',
        password:''
    }
  },
  methods: {
  //  async signin() {
  //    try{
  //      await axios.post('http://localhost:3001/auth/signin',{
  //       email:this.email,
  //       password:this.password
  //     }).then((res)=>{
        
  //     })
      

  //    }catch(error){
  //      document.getElementById("err").innerHTML ='Incorrect Email or Password ';
  //    }
      
  //   },
    async signin(){
      const credentials = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$auth.loginWith('local', {
          data: credentials
        })
      this.$router.push('/')
    // do something on success
  } catch (e) {    
    // do something on failure 
  }

    }
    
  },
}
</script>

<style scoped>
  .mr{
    margin-top: 200px;
  }
  #er{
    color: brown;
  }
</style>