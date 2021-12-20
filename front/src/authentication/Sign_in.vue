<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <link
                  href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
                  rel="stylesheet"
                />
                <v-toolbar-title>Sign in</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form >
                  <v-text-field
                    prepend-icon="email"
                    name="Email"
                    label="Email"
                    type="text"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary" to="/ex">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
const API_URL = "http://127.0.0.1:8000/api";
export default {
  name: "Login",
  return: {
    email: null,
    password: null,
  },
  methods: {
     login() {
            let user = {
                email: this.email,
                password: this.password,
                errorMessage: 'Login succesfully'
            };

            axios.post(API_URL + "/login", user).then(res => {
                this.users = res.data.user;
               //  this.$emit("signin-user", this.signin);
                localStorage.setItem("userID", res.data.user.id);
                this.$router.push('/ex');

            })
            .catch(error => {
                this.isInvalid = true
                console.log(error);
                this.errorMessage = 'Invalid password, please try again';
            })
            console.log(user);
        },
  },
};
</script>

<style>
</style>
