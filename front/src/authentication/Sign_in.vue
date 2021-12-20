<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="email"
                  label="Email"
                  type="text"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  id="password"
                  prepend-icon="lock"
                  label="Password"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/" @click="signin">Login</v-btn>
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
      }
    },
    methods: {
      signin(){
        let userSignin = {
          email: this.email,
          password: this.password
        }
        axios.post('/login', userSignin).then(res =>{
          this.$emit('userLogin', this.islogin);
          this.$router.push('/users');
          localStorage.setItem("UserID", res.data.data.id);
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

</style>