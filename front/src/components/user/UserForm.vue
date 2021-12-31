<template>
  <div class="">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }" class="create-user-btn">
        <v-btn color="red darken-1" dark class="mb-2" v-bind="attrs" v-on="on" bottom fab fixed right><v-icon class="white--text">mdi-account-plus</v-icon></v-btn>
      </template>
      <v-card>
        <div class="">
          <form>
            <v-text-field v-model="username" prepend-icon="mdi-account" label="Username" required></v-text-field>
            <v-text-field v-model="email"  prepend-icon="mdi-email" label="E-mail"  required></v-text-field>
            <v-text-field v-model="setPassword" prepend-icon="mdi-lock"  label="Password" type="password" required></v-text-field>
            <v-select v-model="select" prepend-icon="mdi-lock-reset" :items="items" label="Select Role" required ></v-select>
            <select v-if="select === 'STUDENT'"  name="" id="" v-model="student_id">
              <option v-for="student of studentsList" :key="student.id" :value= student.id>{{student.first_name}} {{student.last_name}}</option>
            </select>
            <v-file-input label="Choose image" prepend-icon="mdi-paperclip" v-model="picture">
            </v-file-input>
             <v-card-actions>
              <v-btn color="error" @click="cancel"> Cancel</v-btn>
              <v-btn color="primary" @click="AddNewUser"> Create</v-btn>
             </v-card-actions> 
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
      studentsList: [],
      studentSelected: '',
      showStudents: false,
      dialog: false,
      username: "",
      email: "",
      select: null,
      items: ["SOCIAL AFFAIR", "STUDENT"],
      picture: null,
      setPassword: '',
      student_id: null,
    }),
    methods: {
      AddNewUser() {
        let newUser = new FormData();
        newUser.append('username', this.username);
        newUser.append('email', this.email);
        newUser.append('password', this.setPassword);
        newUser.append('role', this.select);
        newUser.append('image', this.picture);
        newUser.append('student_id', this.student_id);
        axios.post('/register', newUser).then(res =>{
          console.log(res.data);
          this.dialog = false;
        })
      },
      cancel() {
        this.dialog = false;
        this.username = "";
        this.email = "";
        this.setPassword = "";
        this.select = "";
        this.picture = "";
        this.student_id = "";
      },
      getAllStudent(){
        axios.get('/students').then(res =>{
          this.studentsList = res.data;
        })
      },
    },
    mounted() {
      this.getAllStudent();
    }
  }

</script>


<style scoped>

  .create-user-btn {
    top: 85vh;
    float: right;
    position: fixed;
  }

  form{
    padding: 15px;
  }

  select{
    margin-left: 30px;
    border: 1px solid rgb(51, 50, 50);
    padding: 2px;
    border-radius: 3px;
    width: 94%;
  }

</style>