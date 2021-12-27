<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12" id="form-bg">
            <div class="logo">
              <img src="../assets/pnc.png" alt="">
            </div>
            <v-card-text>
              <v-form>
                <!-- <v-text-field prepend-icon="email" label="Email" type="text" v-model="email"></v-text-field>
                <v-text-field prepend-icon="lock" label="Password" type="password" v-model="password"></v-text-field> -->
                <label for="email" class="email">Email</label><br>
                <input type="email" id="email" v-model="email">
                <br><br>
                <label for="password" class="password">Password</label><br>
                <input type="password" id="password" v-model="password">
              </v-form>
              <p>{{errorMessage}}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/" @click="signin" class="login-btn">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import axios from '../axios-request.js'
  export default {
    emits: ["userLogin"],
    data() {
      return {
        email: '',
        password: '',
        islogin: true,
        errorMessage: '',
      }
    },
    methods: {
      signin(){
        let userSignin = {
          email: this.email,
          password: this.password
        }
        axios.post('/login', userSignin).then(res =>{
          localStorage.setItem("UserID", res.data.data.id);
          this.$emit('userLogin', this.islogin);
          this.$router.push('/home');
          console.log(res.data);
        }).catch(error => {
          console.log(error);
          this.errorMessage = 'Your input is not valid, please try again!';
        })
      }
    },
  };
</script>

<style scoped>
  #inspire{
    background-image: url('../assets/bg.jpg');
    overflow-y: hidden;
    overflow-x: hidden;
  }

  #form-bg{
    background: rgba(0, 0, 0, 0.637);
    height: 55vh;
  }

  .logo{
    width: 100%;
    height: 10vh;
  }
  
  img{
    width: 28%;
    margin-left: 35%;
    margin-top: -15%;
  }

  input[type="email"],
  input[type="password"]{
    margin: auto;
    background: #aaaaaa7a;
    border-radius: 5px;
    font-size: 15px;
    padding: 15px;
    outline: none;
    height: 6vh;
    border: none;
    width: 80%;  
    margin-left: 9%;
  }
  
  p{
    color: red;
    margin-top: 10px;
    margin-left: 18%;
  }
  .email,
  .password{
    color: #fff;
    margin-left: 9%;
  }

  .login-btn{
    width: 77.3%; 
    margin-right: 12.3%;
  }
  
</style>