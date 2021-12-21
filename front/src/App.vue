<template>
   <v-app>
    <app-nav
      v-if="user !== null">
    </app-nav>
    <v-main>
      <router-view @userLogin="logined"></router-view>  
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
      },
    },
    mounted() {
      let userid = localStorage.getItem('UserID');
      if ( userid != null){
        this.menubar = true;
      }
    },
  };
</script>

<style scoped>
  
</style>