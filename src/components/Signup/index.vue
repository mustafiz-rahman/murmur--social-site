<template>
<b-row class="text-center">
    <b-col></b-col>
    <b-col cols="4"><div class="mr">
        <b-card title="Signup">
      <div>
        <b-form  @submit.prevent="register">
          <b-form-group id="input-group-2">
              <b-form-input
              id="input-1"
              type="text"
              v-model="name"
              placeholder="User Name"
              required
            ></b-form-input>
            <b-form-group></b-form-group>
            <b-form-input
              id="input-2"
              type="email"
              v-model="email"
              placeholder="Enter Your Email"
              required
            ></b-form-input>
            <b-form-group></b-form-group>
            <b-form-input
              id="input-3"
              type="password"
              v-model="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
          <div class="text-left">
            <b-button type="submit" variant="primary">Signup</b-button>
          </div>
          <p>Alrady have an account? <NuxtLink to="/signin">Signin</NuxtLink> </p> 
          <p id="err"></p>
        </b-form>
      </div>
    </b-card>
    </div></b-col>
    <b-col></b-col>
  </b-row>

    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
//import createMurmurVue from "~/components/CreateMurmur/CreateMurmur.vue"
export default {
  name: 'Signup',

  data() {
    return {
      name:'',
      email:'',
      password:''
    }
  },
  methods: {
    async register(){
      try{
        await axios.post('http://localhost:3001/auth/signup',{
        name:this.name,
        email:this.email,
        password:this.password
      })
      }catch(e){
        document.getElementById("err").innerHTML ='User already exists!';
      }
      
    }
  }
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