<template>
  <nav v-if="userID" class="navigation" >
    <div class="navbar">
      <ul>
        <div class="circle">
          <v-img height="40" width="40" :src="imgUrl + userAction.image" class="rounded-circle"></v-img>
        </div>
        <p>{{userAction.username}}</p>
        <v-list-item :to="{ path: '/home' }">
          <v-icon class="white--text">mdi-home</v-icon>
          <v-list-item-title class="white--text">Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/user' }" v-if="userAction.role == 'Admin'">
          <v-icon class="white--text">mdi-account-circle-outline</v-icon>
          <v-list-item-title class="white--text">Users</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/student' }" v-if="userAction.role != 'STUDENT'">
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
        userAction: [],
        isSignout: false,
        userID: null,
        user: '',
        imgUrl: "http://127.0.0.1:8000/storage/images/",
      }
    },
    watch:{
      userID(){
        console.log("isIN")
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
          console.log(res.data);
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
      console.log(this.userID);
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
    margin-top: 6px;
    margin-left: 10px;
  }
  
  p{
    margin-top: 17px;
    margin-left: 15px;
    color: white;
    font-size: 15px;
  }

  img{
    width: 100%;
    height: 100%;
    border-radius: 360px;
  }
  
  .navbar {
    display: flex;
    position: fixed;
    z-index: 99;
    width: 100%;
    justify-content: space-between;
    background-color: #37b8f8;
  }

  nav{
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 8px 8px, rgba(0, 0, 0, 0.23) 0px 4px 4px;
  }

  ul{
    display: flex;
    float: right;
    height: 8.5vh;
  }
  
  .btn-Signout {
    font-size: 30px;
    text-transform: uppercase; 
    text-decoration: none;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 20px;
  }
    
</style>
