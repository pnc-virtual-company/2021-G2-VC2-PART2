<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card class="pa-md-4 mx-lg-auto">
        <form>
          <v-text-field
            v-model="name"
            :counter="10"
            label="Name"
            required
          ></v-text-field>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="setPassword"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            label="Role"
            required
          ></v-select>
          <v-select
            v-if="select === 'STUDENT'"
            v-model="studentSelected"
            :items="studentsList"
            label="Select Students"
            required
          ></v-select>
        </form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false"> Cancel </v-btn>
          <v-btn color="primary"  class="mr-4" @click="UpdateUser"> Update </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from '../../axios-request.js'
export default {
    props:['dataStudent'],
  data() {
    return {
      dialog: true,
      name: '',
      email: '',
      select: '',
      setPassword: '',
      items: ["SOCIAL AFFAIR OFFICER", "STUDENT"],
      studentsList : [],
      studentSelected: '',
      editID: null,
    };
  },
  methods: {
  //======================== update User ===========================================================
      UpdateUser(){
          let editUser = {
              'username': this.name,
              'email': this.email,
              'password': this.setPassword,
              'role': this.select,
              
          }
          axios.put('/updateUser/' + this.editID, editUser).then(res =>{
              console.log(res.data);
              this.dialog = false;
          })
      },
  //======================== update User ===========================================================
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
        this.name = this.dataStudent.username;
        this.email = this.dataStudent.email;
        this.select = this.dataStudent.role;
        this.setPassword = this.dataStudent.password;
        this.editID = this.dataStudent.id;
        this.getAllStudent();
    },
};
</script>