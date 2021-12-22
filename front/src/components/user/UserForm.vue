<template>
  <div class="">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }" class="create-user-btn">
        <v-btn color="red darken-1" dark class="mb-2" v-bind="attrs" v-on="on" bottom fab fixed right>+</v-btn>
      </template>
      <v-card>
        <div class="">
          <form>
            <h2>User</h2>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :error-messages="passwordError"
              label="Password"
              type="password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            ></v-text-field>
            <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Role" required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
            <v-select v-if="select === 'STUDENT'" v-model="studentSelected" :studentsList="studentsList" label="Select Students" required
            ></v-select>
            <v-file-input label="Picture" prepend-icon="mdi-camera" v-model="picture">
            </v-file-input>
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
    import axios from '../../axios-request.js'
    import { validationMixin } from "vuelidate";
    import { required, maxLength, email } from "vuelidate/lib/validators";
    export default {
    mixins: [validationMixin],
    validations: {
        password: { required, maxLength: maxLength(10) },
        name: { required, maxLength: maxLength(10) },
        email: { required, email },
        select: { required },
        checkbox: {
        checked(val) {
            return val;
        },
        },
    },

    data: () => ({
        studentsList: [],
        showStudents: false,
        dialog: false,
        name: "",
        email: "",
        select: null,
        items: ["SOCIAL AFFAIR OFFICER", "STUDENT"],
        picture: null,
    }),

    computed: {
        checkboxErrors() {
        const errors = [];
        if (!this.$v.checkbox.$dirty) return errors;
        !this.$v.checkbox.checked && errors.push("You must agree to continue!");
        return errors;
        },
        selectErrors() {
        const errors = [];
        if (!this.$v.select.$dirty) return errors;
        !this.$v.select.required && errors.push("Item is required");
        return errors;
        },
        nameErrors() {
        const errors = [];
        if (!this.$v.name.$dirty) return errors;
        !this.$v.name.maxLength &&
            errors.push("Name must be at most 10 characters long");
        !this.$v.name.required && errors.push("Name is required.");
        return errors;
        },
        emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push("Must be valid e-mail");
        !this.$v.email.required && errors.push("E-mail is required");
        return errors;
        },
        passwordError() {
        const errors = [];
        if (!this.$v.password.$dirty) return errors;
        !this.$v.password.required && errors.push("Password is required.");
        return errors;
        },
    },

    methods: {
        submit() {
        this.$v.$touch();
        },
        clear() {
        this.$v.$reset();
        this.name = "";
        this.email = "";
        this.select = null;
        this.checkbox = false;
        },
        // ============================== GET STUDENTS=================================
        getAllStudent(){
            axios.get('/students').then(res =>{
                this.studentsList = res.data;
            })
        },
    },
    mounted() {
        this.getAllStudent();
    },
    };
</script>


<style scoped>
    .create-user-btn {
    top: 85vh;
    float: right;
    position: fixed;
    }

    form {
    padding: 15px;
    }
</style>