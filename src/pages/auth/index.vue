<template>
  <b-container class="cnt">
    <b-row align-h="center">
      <b-col cols="6"
        ><div><Signin /></div
      ></b-col>
      <b-col cols="6"
        ><div><Signup /></div
      ></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue'
import Signin from '~/components/Signin'
import Signup from '~/components/Signup'
export default Vue.extend({
  components: {
    Signin,
    Signup,
  },
})
</script>
    
<style scoped>
.cnt{
        margin-top:150px
    }
</style>
