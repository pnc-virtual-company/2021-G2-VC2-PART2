<template>
   <v-app>
    <app-nav>
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
        isLogin: true,
        userID : '',
      };
    },
    methods: {
      logined(login){
        this.menubar = login;
        this.isLogin = !login;
        console.log(login);
      },
    },
    mounted() {
      this.userID = localStorage.getItem('UserID');
      if ( this.userID != null){
        this.menubar = true;
        this.isLogin = false;
      }
    },
  };
</script>

<style scoped>
  
</style>