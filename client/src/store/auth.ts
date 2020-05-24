import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { auth } from '~/plugins/firebase'
import { RootState } from './index'

interface State {
  signIn: boolean
  token: string
  username: string
}

export const state = () => ({
  signIn: false,
  token: localStorage.getItem('jwt') || '',
  username: ''
})

export const getters: GetterTree<State, RootState> = {
  isSignIn: (state) => state.signIn
}

export const mutations: MutationTree<State> = {
  setUser(state, user) {
    state.signIn = true
    state.username = user.displayName
  },
  clear(state) {
    state.signIn = false
    state.username = ''
  }
}

export const actions: ActionTree<State, RootState> = {
  signOut({ commit }) {
    auth.signOut().then(() => {
      commit('clear')
    })
  }
}
