<template>
  <v-app>
    <div v-if="$store.getters['auth/isSignIn']">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        fixed
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
        <v-spacer></v-spacer>
        <v-btn @click="signOut" text>ログアウト</v-btn>
      </v-app-bar>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
      <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
        <v-list>
          <v-list-item @click.native="right = !right">
            <v-list-item-action>
              <v-icon light>
                mdi-repeat
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </div>
    <div v-else>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    signOut: function() {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>
