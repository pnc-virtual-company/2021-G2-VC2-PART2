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
          </form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
    import axios from '../../axios-request.js'
    export default {
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