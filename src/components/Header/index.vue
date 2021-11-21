<template>
    <div class="h">
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">Murmur!</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Hello {{ user.name }}</em>
          </template>
          <b-dropdown-item href="#" ><em></em></b-dropdown-item>
          <b-dropdown-item  @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"Header",
    computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },
    methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/signin')
    }
  }
    
}
</script>


