import { auth } from '~/plugins/firebase'

export default function({ route, store, redirect }: any) {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.commit('auth/setUser', user)
    } else {
      store.commit('auth/clear', user)
      if (route.name !== 'signin') redirect('/signin')
    }
  })
}
