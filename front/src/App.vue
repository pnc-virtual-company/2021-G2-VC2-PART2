<template>
   <v-app>
  
    <navigation v-if="menubar"></navigation>
    
    <v-main>
      <router-view @userLogin="logined" @userLogout="Logout"></router-view>  
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from "./components/nav/Navigation.vue";
  export default {
    name: "App",
    components: {
      Navigation,
    },
    data() {
      return {
        menubar: false,
        userID : '',
      };
    },
    methods: {
      logined(login){
        this.menubar = login;
        console.log(login);
      },
      Logout(logout){
        this.menubar = logout;
        console.log(logout);
      }

    },
    mounted() {
      this.userID = localStorage.getItem('UserID');
      if ( this.userID != null){
        this.menubar = true;
  
      }
    },
  };
</script>

<style scoped>
  
</style>