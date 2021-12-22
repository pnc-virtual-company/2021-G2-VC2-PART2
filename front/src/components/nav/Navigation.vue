<template>
  <nav>
    <v-navigation-drawer  v-model="sidebar" app absolute left temporary>
      <v-list>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>
       <img src="../../assets/pnc.png" alt="Vuetify Admin" width="50" height="50"/>
      <v-toolbar-title class="ml-2">
        <h3>Admin</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn active-class="white-5 white--text" text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left class="yellow--text">{{ item.icon }}</v-icon>{{ item.title }}
        </v-btn>
      </v-toolbar-items> 
    </v-toolbar>
  </nav>
</template>

<script>

  export default {
    data() {
      return {
        sidebar: false,
        group: false,
        menuItems: [
          { title: 'Users', path: '/users', icon: 'mdi-account-circle' },
          { title: 'Students', path: '/studentcrudview', icon: 'mdi-account-multiple' },
          { title: 'Permission', path: '/permission', icon: 'mdi-book-open-page-variant' },
          { title: 'Discipline', path: '/disciples', icon: 'mdi-folder-open' },
          { title: 'logout', path: '/', icon: 'mdi-login' },
        ]
      }
    },
    methods: {
    },
  }

</script>

<style>


</style>