<template>
  <v-container>
    <template>
      <v-dialog v-model="dialogDelete" max-width="450px">
        <v-card>
          <v-card-title class="red--text">Are you sure you want to remove this user?</v-card-title>
          <hr/>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn depressed color="primary" @click="dialogDelete = false">Cancel</v-btn>
            <v-btn depressed color="error" @click="deleteItemConfirm">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card-title>
        Users List
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card color="" green>
        <v-simple-table>
          <template v-slot:default>
            <thead class="blue-grey darken-2">
              <!-- <th>Profile</th> -->
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr class="data" v-for="(user, index) in userList" :key="index">
                <!-- <td>
                  <v-img height="80" width="80" :src="imgUrl + user.image" class="pa-7 secondary rounded-circle d-inline-block"></v-img>
                </td> -->
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>
                  <v-icon mediem class="mr-2" @click="editItem(user)">mdi-pencil</v-icon>
                  <v-icon mediem @click="deleteItem(user)" v-if="user.role != 'Admin'">mdi-delete</v-icon>
                  <Updateuser v-if="dialog" :dataStudent="dataStudent"></Updateuser>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </template>
  </v-container>
</template>

<script>

  import axios from "../../axios-request.js";
  import Updateuser from "../user/DialogEditUser.vue";
  export default {
    components: {
      Updateuser,
    },
    data: () => ({
      emits: ["edit-user"],
      userList: [],
      imgUrl: "http://127.0.0.1:8000/storage/images/",
      dialog: false,
      dataStudent: "",
      dialogDelete: false,
      userID: null,
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
      },
    },
    mounted() {
      this.getAllUser();
    },
  };
</script>

<style scoped>

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
    height: 10vh;
    font-size: 18px;
  }

  thead th {
    color: #fff;
  }
</style>
