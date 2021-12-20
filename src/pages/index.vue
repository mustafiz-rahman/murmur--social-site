<template>
  <div class="cnt">
    <b-row>
      <b-col><Header /></b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col cols="6" md="3"><user-details /></b-col>
      <b-col cols="6" md="6">
        <create-murmur />
        <murmur-list :murmurs="loadMurmur" />
      </b-col>
      <b-col cols="6" md="3"><user-list /></b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue'
import CreateMurmur from '~/components/CreateMurmur'
import MurmurView from '~/components/MurmurView/MurmurView.vue'
import UserDetails from '~/components/UserDetails'
import UserList from '~/components/Userlist'
import Header from '~/components/Header'
import MurmurList from '~/components/MurmurView/MurmurList.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default Vue.extend({
  middleware: ['auth'],
  computed: {
    ...mapState('auth', ['loggedIn', 'user']),
  },
  components: {
    CreateMurmur,
    UserDetails,
    UserList,
    Header,
    MurmurList,
  },
  // async asyncData(){
  //   const res= await axios.get('http://localhost:3001/murmur');
  //   return{
  //     loadMurmur:res,
  //   }
  //  },
  data() {
    return {
      loadMurmur: [],
    }
  },
  
  

  methods: {
    async postMurmur() {},
  },
})
</script>

<style scoped>
.justify-content-md-center {
  margin: 30px;
}
</style>
