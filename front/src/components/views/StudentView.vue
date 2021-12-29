<template>
<v-container>
  <v-data-table :headers="headers" :items="student_list" sort-by="class"  hide-default-footer class="table">
    <template v-slot:top>
      <v-toolbar flat>
        <v-title class="title">Students</v-title>
        <v-spacer></v-spacer>
        <v-text-field class="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
        <v-dialog v-model="dialog" max-width="530px">
          <template v-slot:activator="{ on, attrs }" >
            <v-btn id="create-user-btn" color="red darken-1" dark class="mb-2" v-bind="attrs" v-on="on" bottom fab fixed right v-if="userAction.role !=='STUDENT'">+</v-btn>
          </template>
          <v-row justify="center" class="a">
              <v-card ref="form" class="form">
                  <v-text-field ref="first name" v-model="first_name" label="First Name" required></v-text-field>
                  <v-text-field ref="last name" v-model="last_name" label="Last Name" required></v-text-field>
                  <v-radio-group v-model="sex" row>
                    <v-radio label="Female" value="Female"></v-radio>
                    <v-radio label="Male" value="Male"></v-radio>
                  </v-radio-group>
                  <v-autocomplete ref="class" v-model="getClass" :items="classes" label="Class" placeholder="Select class..." required></v-autocomplete>
                  <v-text-field prepend-icon="mdi-phone-in-talk" ref="phone number" v-model="phone" label="Phone Number" required></v-text-field>
                  <v-file-input prepend-icon="mdi-paperclip" label="Choose image" v-model="image" v-if="showfilInput"></v-file-input>
                <v-card-actions>
                  <v-btn color="error"  @click="close"> Cancel </v-btn>
                  <v-btn color="primary"  @click="save"> Create </v-btn>
                </v-card-actions>
              </v-card>
          </v-row>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="470px">
          <v-card >
            <v-card-title class="red--text">Are you sure you want to delete this student?</v-card-title>
            <hr>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" style="background: #039BE5;" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="white" style="background: #E53935;" text @click="deleteItemConfirm">YES</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }" >
      <v-icon mediem class="mr-2" @click="editItem(item)"> mdi-account-edit </v-icon>
      <v-icon mediem @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</v-container>
</template>

<script>
  import axios from "../../axios-request.js";
  export default {
    data: () => ({
      userID: null,
      userAction: true,
      showfilInput: true,
      dialog: false,
      dialogDelete: false,
      classes: ["WEP A", "WEP B", "SNA", "CLASS A", "CLASS B", "CLASS C"],
      phone: null,
      first_name: "",
      last_name: "",
      sex: "",
      getClass: "",
      image: null,
      id: null,
      headers: [
        { text: "First Name", align: "start", sortable: false, value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Class", value: "class" },
        { text: "Gender", value: "gender" },
        { text: "Phone", value: "phone" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      student_list: [],
      editedIndex: -1,
      editedItem: {
        first_name: "",
        last_name: "",
        class: "",
        gender: "",
        phone: "",
      },
    }),

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "Create" : "Edit Students";
      },
    },

    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },
    methods: {
      getStudents() {
        axios.get("/students").then((res) => {
          this.student_list = res.data;
        });
      },
      editItem(item) {
        console.log(item);
        this.editedIndex = 1;
        this.editedItem = Object.assign({}, item);
        this.first_name = item.first_name;
        this.last_name = item.last_name;
        this.sex = item.gender;
        this.phone = item.phone;
        this.getClass = item.class;
        this.image = item.image;
        this.id = item.id;
        this.dialog = true;
        this.showfilInput = false;
      },
      deleteItem(item) {
        this.id = item.id;
        this.editedIndex = this.student_list.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialogDelete = true;
      },
      deleteItemConfirm() {
        axios.delete("/students/" + this.id).then((res) => {
          console.log(res.data);
          this.getStudents();
        });
        console.log(this.id);
        this.closeDelete();
      },

      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },

      closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
      save() {
        if (this.editedIndex > -1) {
          let editStudent = {
            "first_name": this.first_name,
            "last_name": this.last_name,
            "class": this.getClass,
            "phone": this.phone,
            "gender": this.sex
          }
          axios.put("/students/" + this.id, editStudent).then((res) => {
            console.log(res.data);
            this.getStudents();
          });
          this.phone = null;
          this.first_name = "";
          this.last_name = "";
          this.sex = "";
          this.getClass = "";
          this.image = null;
        } else {
          let newStudent = new FormData();
          newStudent.append("first_name", this.first_name);
          newStudent.append("last_name", this.last_name);
          newStudent.append("class", this.getClass);
          newStudent.append("phone", this.phone);
          newStudent.append("gender", this.sex);
          newStudent.append("image", this.image);
          axios.post("/students", newStudent).then((res) => {
            console.log(res.data);
            this.getStudents();
          })
          this.phone = null;
          this.first_name = "";
          this.last_name = "";
          this.sex = "";
          this.getClass = "";
          this.image = null;
        }
        this.close();
      },
      getActionUser(){
        axios.get('/getUserByID/' + this.userID).then(res=> {
          console.log(res.data);
          this.userAction = res.data;
        })
      }
    },
    mounted() {
      this.userID = localStorage.getItem('UserID');
      this.getStudents();
      this.getActionUser();
    },
  };
</script>

<style scoped>

  .title{
    margin-left: -1.5%;
  }

  .search{
    margin-right: -1.5%;
  }

  .main{
    background: #000;
  }

  .a {
    overflow-y: hidden;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    

  }

  #create-user-btn{
    top: 77vh;
    float: right;
    left: 102%;
    position: fixed;
  }
  .form {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .search{
    margin-right: -10px;
  }

</style>