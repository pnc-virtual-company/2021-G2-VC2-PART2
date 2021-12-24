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
            <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
            <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
            <v-text-field v-model="password" :error-messages="passwordError" label="Password" type="password" required @input="$v.password.$touch()" @blur="$v.password.$touch()"></v-text-field>
            <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Role" required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
            <v-select v-if="select === 'STUDENT'" v-model="studentSelected" :studentsList="studentsList" label="Select Students" required></v-select>
            <v-file-input label="Picture" prepend-icon="mdi-paperclip" v-model="picture"></v-file-input>
            <v-btn class="mr-4" @click="submit"> submit </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </div>
      </v-card>
    </v-dialog>
  </div>
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
          axios.post("/students", newStudent).then((res) => {
            console.log(res.data);
            this.getStudents();
          }).catch((error) => {
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

</style>