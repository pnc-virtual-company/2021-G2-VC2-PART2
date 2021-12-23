<template>
  <nav>
    <div class="navbar">
      <ul>
        <div class="circle">
          <img :src="imgUrl + user.profile" alt="">
        </div>
        <p>{{user.username}}</p>
        <v-list-item :to="{ path: '/home' }">
          <v-icon class="white--text">mdi-home</v-icon>
          <v-list-item-title class="white--text">Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/user' }">
          <v-icon class="white--text">mdi-account-circle-outline</v-icon>
          <v-list-item-title class="white--text">Users</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/student' }" >
          <v-icon class="white--text">mdi-account-group-outline</v-icon>
          <v-list-item-title class="white--text">Students</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/permission' }">
          <v-icon class="white--text">mdi-comment-account-outline</v-icon>
          <v-list-item-title class="white--text">Permission</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/disciples' }">
          <v-icon class="white--text">mdi-account-multiple-outline</v-icon>
          <v-list-item-title class="white--text">Disciple</v-list-item-title>
        </v-list-item>
      </ul>
      <div class="navbar-right">
        <span>{{user.role}}</span>
        <v-btn icon class="btn-Signout">
          <v-icon @click="Signout" style="font-size:35px;" class="white--text">mdi-import</v-icon>
        </v-btn>
      </div>
    </div>
  </nav>
</template>

<script>
  import axios from '../../axios-request.js'
  export default {
    emits: ['sign-out'],
    data(){
      return{
        isSignout: false,
        userID: '',
        user: '',
        imgUrl: "http://127.0.0.1:8000/storage/images/",
      }
    },
    methods: {
      Signout(){
        this.$emit('sign-out', this.isSignout);
        this.$router.push('/');
        localStorage.clear();
      }
    },
    mounted() {
      this.userID = localStorage.getItem('userID');
      axios.get('/users').then(res => {
        for(let user of res.data){
          if(user.id == this.userID){
            this.user = user;
          }
        }
      })
    },
  }
</script>

<style scoped>

    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 360px;
    }
   
    .navbar {
      display: flex;
      justify-content: space-between;
      background-color: #159de0;
      /* background-color: #37474F; */
    }
    nav{
      position: sticky;
      top: 0;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 8px 8px, rgba(0, 0, 0, 0.23) 0px 4px 4px;
    }
    ul{
      display: flex;
      float: right;
      height: 8.5vh;
    }
    .navbar-right {
      height: 100%;
      margin: 0;
      z-index: 1;  
    }
    
    .btn-Signout {
      font-size: 30px;
      text-transform: uppercase; 
      text-decoration: none;
      cursor: pointer;
      margin-top: 5px;
      margin-right: 20px;
    }
    p{
      margin-top: 16px;
      margin-right: 10px;
    }
    span{
      margin-right: 200px;
      /* margin-top: 5%; */
    }
    
</style>