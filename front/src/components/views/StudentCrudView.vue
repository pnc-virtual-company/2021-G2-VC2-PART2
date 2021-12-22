<template>
  <v-data-table
    :headers="headers"
    :items="student_list"
    sort-by="class"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Students List</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Student
            </v-btn>
          </template>
<!-- form create and edit students           -->
          <v-row justify="center" class="a">
            <v-col>
              <v-card ref="form" class="form">
                <v-card-text>
                  <v-text-field
                    ref="first name"
                    v-model="first_name"
                    label="First Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    ref="last name"
                    v-model="last_name"
                    label="Last Name"
                    required
                  ></v-text-field>

                  <v-radio-group v-model="sex" row>
                    <v-radio label="Female" value="Female"></v-radio>
                    <v-radio label="Male" value="Male"></v-radio>
                  </v-radio-group>

                  <v-autocomplete
                    ref="class"
                    v-model="getClass"
                    :items="classes"
                    label="Class"
                    placeholder="Select class..."
                    required
                  ></v-autocomplete>
                  <v-text-field
                    ref="phone number"
                    v-model="phone"
                    label="Phone Number"
                    required
                  ></v-text-field>

                  <v-file-input
                    prepend-icon="mdi-camera"
                    label="Picture"
                    v-model="image"
                  ></v-file-input>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    {{ formTitle }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this Student?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>


<script>
import axios from "../../axios-request.js";
export default {
  data: () => ({
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
      {
        text: "First Name",
        align: "start",
        sortable: false,
        value: "first_name",
      },
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
        let editStudent = new FormData();
        editStudent.append("first_name", this.first_name);
        editStudent.append("last_name", this.last_name);
        editStudent.append("class", this.getClass);
        editStudent.append("phone", this.phone);
        editStudent.append("gender", this.sex);
        editStudent.append("image", this.image);

        console.log(this.image);
        axios.put("/students/" + this.id, editStudent).then((res) => {
          console.log(res.data);
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

        axios
          .post("/students", newStudent)
          .then((res) => {
            console.log(res.data);
            // this.student_list.push(res.data);
            this.getStudents();
          })
          .catch((error) => {
            console.log(error.response.data.errors);
          });
        this.phone = null;
        this.first_name = "";
        this.last_name = "";
        this.sex = "";
        this.getClass = "";
        this.image = null;
      }
      this.close();
    },
  },
  mounted() {
    this.getStudents();
  },
};
</script>

<style scoped>
.a {
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  background: none;
}
.form {
  width: 100%;
  height: 100%;
  background: #000;
}
</style>