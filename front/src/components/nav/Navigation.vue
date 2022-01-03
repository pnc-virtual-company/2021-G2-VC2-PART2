<template>
  <nav class="navigation" >
    <div class="navbar">
      <ul>
        <div class="circle">
          <v-img height="50" width="50" :src="imgUrl + userAction.image" class="rounded-circle"></v-img>
        </div>
        <v-list-item-title class="p">{{userAction.username}}</v-list-item-title>
        <v-list-item :to="{ path: '/home' }"  v-if="userAction.role != 'STUDENT'">
          <v-icon class="white--text">mdi-home</v-icon>
          <v-list-item-title class="white--text">Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/user' }" v-if="userAction.role == 'Admin'">
          <v-icon class="white--text">mdi-account</v-icon>
          <v-list-item-title class="white--text">Users</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/students' }" v-if="userAction.role != 'STUDENT'">
          <v-icon class="white--text">mdi-account-group-outline</v-icon>
          <v-list-item-title class="white--text">Students</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/studentInfo' }" v-if="userAction.role == 'STUDENT'">
          <v-icon class="white--text">mdi-account-group-outline</v-icon>
          <v-list-item-title class="white--text">Student</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/permission' }">
          <v-icon class="white--text">mdi-comment-account-outline</v-icon>
          <v-list-item-title class="white--text">Permissions</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/disciples' }">
          <v-icon class="white--text">mdi-alert-decagram</v-icon>
          <v-list-item-title class="white--text">Disciples</v-list-item-title>
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
        userAction: [],
        isSignout: false,
        userID: null,
        user: '',
        imgUrl: "http://127.0.0.1:8000/storage/images/",
      }
    },
    watch:{
      userID(){
        return this.userID !== null;
      }
    },
    methods: {
      Signout(){
        this.$emit('sign-out', this.isSignout);
        this.$router.push('/');
        this.userID = null;
        localStorage.clear();
      },
      getActionUser(){
        axios.get('/getUserByID/' + this.userID).then(res=> {
          this.userAction = res.data;
        })
      }
    },
    mounted() {
      this.userID = localStorage.getItem('UserID');
      axios.get('/users').then(res => {
        for(let user of res.data){
          if(user.id == this.userID){
            this.user = user;
          }
        }
      })
      this.getActionUser();
    
    },
  }
</script>

<style scoped>

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .rounded-circle{
    margin-top: 3px;
    margin-left: 0px;
  }
  
  .p{
    color: white;
    font-size: 15px;
    margin: 10px;
    margin-top: 13px;
    margin-left: 10px;
  }

  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  
  .navbar {
    display: flex;
    position: fixed;
    z-index: 99;
    width: 100%;
    justify-content: space-between;
    background-color: #40C4FF;
  }

  nav{
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 8px 8px, rgba(0, 0, 0, 0.23) 0px 4px 4px;
  }

  ul{
    display: flex;
    float: right;
    height: 9vh;
  }
  
  .btn-Signout {
    font-size: 30px;
    text-transform: uppercase; 
    text-decoration: none;
    cursor: pointer;
    margin-top: 8px;
    margin-right: 20px;
  }
    
</style>
