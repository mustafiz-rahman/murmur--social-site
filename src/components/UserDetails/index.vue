<template>
    <div>
        <b-card  title="">
            <h4>{{ user.name }}</h4>
            
        <b-card-text >{{user.email}} </b-card-text>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name:"UserDetails",
    computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },

}
</script>
