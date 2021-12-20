<template>
  <v-app >
    <div v-if="menubar">
      <v-navigation-drawer  v-model="showDrawer" absolute bottom temporary>
      <app-nav></app-nav>
      </v-navigation-drawer>
      <v-app-bar app> 
        <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Admin</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="logOut">
          <v-icon >mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <v-main>
      <router-view  @userLogin="logined">
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from "./components/nav/Navigation.vue";
  export default {
    name: "App",
    components: {
      'app-nav': Navigation,
    },
    data() {
      return {
        menubar: false,
        showDrawer: false,
        isLogin: true
      };
    },
    methods: {
      logined(login){
        this.menubar = login;
        this.isLogin = !login;
      }
    },
  };
</script>
 