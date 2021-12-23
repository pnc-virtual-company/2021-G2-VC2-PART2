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
<<<<<<< HEAD
            <v-text-field
              v-model="name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="setPassword"
              label="Password"
              type="password"
              required
            ></v-text-field>
            <v-select v-model="select" :items="items" label="Role" required ></v-select>
            <v-select v-if="select === 'STUDENT'" v-model="studentSelected" :items='studentsList' label="Select Students" required
            ></v-select>
            <v-file-input label="Picture" prepend-icon="mdi-camera" v-model="picture">
            </v-file-input>
            <v-btn @click="cancel"> Cancel </v-btn>
            <v-btn class="mr-4" @click="AddNewUser"> submit </v-btn>
=======
            <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
            <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
            <v-text-field v-model="password" :error-messages="passwordError" label="Password" type="password" required @input="$v.password.$touch()" @blur="$v.password.$touch()"></v-text-field>
            <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Role" required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
            <v-select v-if="select === 'STUDENT'" v-model="studentSelected" :studentsList="studentsList" label="Select Students" required></v-select>
            <v-file-input label="Picture" prepend-icon="mdi-paperclip" v-model="picture"></v-file-input>
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
            <v-btn @click="clear"> clear </v-btn>
>>>>>>> d76629efc183c2999da57db7d6cdbd692775e36f
          </form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
    import axios from '../../axios-request.js'
    export default {
<<<<<<< HEAD
    data: () => ({
        studentsList: ['Dara', 'pupha','vichear'],
        studentSelected: '',
        showStudents: false,
        dialog: false,
        name: "",
        email: "",
        select: null,
        items: ["SOCIAL AFFAIR OFFICER", "STUDENT"],
        picture: null,
        setPassword: '',
=======
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
>>>>>>> d76629efc183c2999da57db7d6cdbd692775e36f
    }),

    computed: {
        
    },

    methods: {

        // ============================== Create user =================================
        AddNewUser() {
            let newUser = new FormData();
            newUser.append('username', this.name);
            newUser.append('email', this.email);
            newUser.append('password', this.setPassword);
            newUser.append('role', this.select);
            newUser.append('image', this.picture);
            axios.post('/register', newUser).then(res =>{
                console.log(res.data);
                this.dialog = false;
            })
        },
        cancel() {
        this.dialog = false;
        },
        

        // ============================== GET STUDENTS =================================

        getAllStudent(){
            axios.get('/students').then(res =>{
                let allStudents = res.data;
                for(let student of allStudents){
                    this.studentsList.push(student.first_name);
                }
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