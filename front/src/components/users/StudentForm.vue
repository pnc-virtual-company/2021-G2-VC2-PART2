<template>
  <v-row justify="center" class="all-form">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
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
            <v-radio label="Female" value="female"></v-radio>
            <v-radio label="Male" value="male"></v-radio>
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
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text :to="{ path: '/student' }">Cancel</v-btn>
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
</template>

<script>
import axios from '../axios-request.js'
export default {
  data: () => ({
    classes: ["WEP A", "WEP B", "SNA", "CLASS A", "CLASS B", "CLASS C"],
    first_name: '',
    last_name: '',
    getClass: '',
    sex: '',
    phone: '',
    image: null,
  }),
  methods: {
    form() {
      return {
        class: this.class,
      };
    },
    submit(){
        let newStudent = {
          first_name: this.first_name,
          last_name: this.last_name,
          gender: this.sex,
          class: this.getClass,
          phone: this.phone,
          image: this.image,
        }
        axios.post('/students', newStudent).then(res=>{
          console.log(newStudent);
          console.log(res.data);
        })
    }
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
