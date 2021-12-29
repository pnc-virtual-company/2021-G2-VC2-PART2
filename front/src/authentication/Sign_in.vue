<template>
  <v-app id="inspire">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="form-container">
          <form>
            <div class="logo">
              <img src="../assets/pnc.png" alt="" />
            </div>
            <div>
              <v-text-field
                class="input-field"
                outlined
                dense
                white
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-text-field
                class="input-field"
                outlined
                dense
                white
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                hint="At least 8 characters"
                @click:append="show1 = !show1"
              ></v-text-field>
              <p>{{ errorMessage }}</p>
              <v-card-actions>
                <v-btn color="primary" to="/" @click="signin" class="login-btn">Login</v-btn>
              </v-card-actions>
            </div>
          </form>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from "../axios-request.js";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  emits: ["userLogin"],
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required },
  },
  data: () => ({
    email: '',
    password: '',
    islogin: true,
    errorMessage: '',
    show1: false,
    rules: {
      required: (value) => !!value || "Password is required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("E-mail is required");
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    signin() {
      let userSignin = {
        email: this.email,
        password: this.password,
      };
      axios.post("/login", userSignin).then((res) => {
        localStorage.setItem("UserID", res.data.data.id);
        this.$emit("userLogin", this.islogin);
        this.$router.push("/home");
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
        this.errorMessage = "Your input is not valid, please try again!";
        this.email = "";
        this.password = "";
      });
    },
  },
};
</script>

<style scoped>

  #inspire {
    background-image: url("../assets/bg.jpg");
    overflow-y: hidden;
    overflow-x: hidden;
  }

  form {
    background: rgba(247, 247, 247, 0.85);
    height: 50vh;
    width: 80%;
    margin-top: 7vh;
    align-items: center;
    margin-left: 10%;
    padding: 20px;
    border-radius: 5px;
  }

  .logo {
    width: 100%;
    height: 10vh;
  }

  img {
    width: 28%;
    margin-left: 35%;
    margin-top: -20%;
  }

  .input-field {
    width: 100%;
  }

  .login-btn {
    width: 105%;
    margin-left: -3%;
  }

  p {
    color: red;
    margin-top: 10px;
    margin-left: 15%;
  }
</style>
