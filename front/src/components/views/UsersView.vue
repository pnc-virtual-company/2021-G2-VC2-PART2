<template>
  <section>
    <br>
    <user-form @add-user="getAllUser"></user-form>
    <edit-user v-if="show_update" :data="userInfo" @edit-use="UpdateUser"></edit-user>
    <user-card>
      <v-container>
        <template>
          <v-dialog v-model="dialogDelete" max-width="450px">
            <v-card>
              <br>
              <v-card-title class="red--text">Are you sure you want to remove this user?</v-card-title><br>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed color="primary" @click="dialogDelete = false">Cancel</v-btn>
                <v-btn depressed color="error" @click="deleteItemConfirm">YES</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-card-title class="title">
            <strong class="t">Users</strong>
            <v-spacer></v-spacer>
            <v-text-field class="search" append-icon="mdi-magnify" label="Search" single-line hide-details @keyup="searchUser" v-model="searchUsername"></v-text-field>
          </v-card-title>
          <v-card color="" green>
            <v-simple-table>
              <template v-slot:default>
                <thead class="light-blue lighten-2">
                  <th scope="col">Profile</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </thead>
                <tbody class="text-center" style="text-align: center; align-items: center;justify-content: center; height:10vh;">
                  <tr class="data" v-for="(user, index) in userList" :key="index">
                    <td class="img">
                      <v-img height="50" width="50" :src="imgUrl + user.image" class="pa-7 secondary rounded-circle d-inline-block"></v-img>
                    </td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                      <v-icon mediem id="edit" class="mr-2" @click="editItem(user)">mdi-account-edit</v-icon>
                      <v-icon mediem id="delete" @click="deleteItem(user)" v-if="user.role != 'Admin'">mdi-delete</v-icon>
                    </td>
                  </tr>
                  <Updateuser v-if="dialog" :dataStudent="dataStudent" @cancel="cancel" @update="UpdateUser"></Updateuser>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </template>
      </v-container>
    </user-card>
  </section>
</template>

<script>
  
  import axios from "../../axios-request.js";
  import UserForm from "../user/UserForm.vue";
  import EditUser from '../user/DialogEditUser.vue'
  export default {
    components:{
      'user-form': UserForm,
      'edit-user': EditUser
    },
    data: () => ({
      emits: ["edit-user"],
      userList: [],
      imgUrl: "http://127.0.0.1:8000/storage/images/",
      dialog: false,
      dataStudent: "",
      dialogDelete: false,
      userID: null,
      searchUsername:'',
      show_update: false,
      userInfo: '',
    }),
    methods: {
      getAllUser() {
        axios.get("/user").then((res) => {
          this.userList = res.data;
        });
      },
      deleteItem(user) {
        this.dialogDelete = true;
        this.userID = user.id;
        console.log(this.userID);
      },
      deleteItemConfirm() {
        axios.delete("/deleteUser/" + this.userID).then((res) => {
          console.log(res.data);
          this.getAllUser();
          this.dialogDelete = false;
        });
      },
      editItem(user) {
        this.dialog = true;
        this.dataStudent = user;
        this.show_update = true;
        this.userInfo = user;
      },
      UpdateUser(id,updateUser,isFalse){
        axios.put('/updateUser/' + id, updateUser).then(res =>{
          console.log(res.data);
          this.dialog = isFalse;
          this.getAllUser();
        })
      },
      cancel(){
        this.dialog = false;
      },
      searchUser(){
        if(this.searchUsername !== ''){
          axios.get('/searchUser/search/' + this.searchUsername).then(res=>{
            this.userList = res.data;
          })
        }else{
          this.getAllUser();
        }
      }
    },
    mounted() {
      this.getAllUser();
    },
  }
</script>

<style scoped>
  section{
    margin-top: -1.5px;
  }

  .title{
    margin-left: -1.5%;
  }

  .search{
    margin-right: -1.5%;
    width: 9%;
  }

  .t{
    margin-top: 3%;
  }
  
  .text-h5 {
    color: white;
  }

  .btn-create {
    margin: 10px;
  }

  v-radio {
    display: flex;
  }

  thead {
    height: 7vh;
    font-size: 18px;
  }

  thead th {
    color: #fff;
  }

  tbody tr{
    height: 12vh;
  }

  #edit{
    color: rgb(59, 114, 252);
  }

  #delete{
    color: rgb(250, 56, 59);
  }
</style>