<template>
  <div class="c">
    <b-card title="Create Murmur">
      <div>
        <b-form @submit.prevent="onSubmit">
          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              v-model="murmur"
              placeholder="how are you doing!"
              required
            ></b-form-input>
          </b-form-group>
          <div class="text-left">
            <b-button type="submit" variant="primary">Post</b-button>
          </div>
        </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { mapState } from 'vuex'
//import createMurmurVue from "~/components/CreateMurmur/CreateMurmur.vue"
export default {
  name: 'CreateMurmur',
  middleware: ['auth'],
  computed: {
    ...mapState('auth', ['loggedIn', 'user']),
  },

  data() {
    return {
      murmur: '',
    }
  },
  methods: {
    async onSubmit() {
      await axios.post('http://localhost:3001/murmur', {
        murmur: this.murmur,
      })
    },
  },
}
</script>
