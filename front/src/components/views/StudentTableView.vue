<template>
  <v-data-table :headers="headers" :items="stuname">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Student List</v-toolbar-title>
    
        <v-dialog v-model="dialog">
              <v-spacer></v-spacer>
              <v-row justify="center" class="all-form">
                <v-col cols="12" sm="10" md="8" lg="6">
                  <v-card ref="form">
                    <v-card-text>
                      <v-text-field
                        ref="first name"
                        v-model="name"
                        label="First Name"
                        required
                      ></v-text-field>
                      <v-text-field
                        ref="last name"
                        v-model="address"
                        label="Last Name"
                        required
                      ></v-text-field>

                      <input class="female" type="radio" value="female" />
                      <label class="six" name="six" for="female">Female</label>

                      <input class="male" type="radio" value="male" />
                      <label class="six" name="six" for="male">Male</label>

                      <v-autocomplete
                        ref="class"
                        v-model="country"
                        :items="classes"
                        label="Class"
                        placeholder="Select class..."
                        required
                      ></v-autocomplete>
                      <v-text-field
                        ref="phone number"
                        v-model="address"
                        label="Phone Number"
                        required
                      ></v-text-field>
                    </v-card-text>
                    <v-divider class="mt-12"></v-divider>
                    <v-card-actions>
                      <v-btn text >Cancel</v-btn>
                      <v-slide-x-reverse-transition>
                        <v-tooltip v-if="formHasErrors" left>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              icon
                              class="my-0"
                              v-bind="attrs"
                              @click="resetForm"
                              v-on="on"
                            >
                              <v-icon>mdi-refresh</v-icon>
                            </v-btn>
                          </template>
                          <span>Refresh form</span>
                        </v-tooltip>
                      </v-slide-x-reverse-transition>
                      <v-btn
                        color="primary"
                        text
                        @click="submit"
                        :to="{ path: '/studenttableview' }"
                        >Create</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
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
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Student Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      
      { text: "Sex", value: "sex" },
      { text: "Class", value: "class" },
      { text: "Phone Number", value: "phonenumber" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      sex: "",
      class: "",
      phonenumber: 0,
    },
    defaultItem: {
      name: "",
      sex: "",
      class: "",
      phonenumber: "",
    },
  }),


  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.stuname = [
        {
          name: "Siny Sen",
          sex: "M",
          class: "WEPB",
          phonenumber: "012 455 798",
          
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.stuname.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.stuname.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.stuname.splice(this.editedIndex, 1);
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
        Object.assign(this.stuname[this.editedIndex], this.editedItem);
      } else {
        this.stuname.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped>
.all-form {
  margin-top: 8%;
}
.six {
  padding: 10px;
  width: 50px;
  height: 100px;
}
</style>
