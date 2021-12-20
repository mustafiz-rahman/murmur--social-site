import vuex from 'vuex'

// export const getters = {
//     isAuthenticated(state) {
//       return state.auth.loggedIn
//     },
  
//     loggedInUser(state) {
//       return state.auth.user
//     }
//   }

export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    }
  }
  