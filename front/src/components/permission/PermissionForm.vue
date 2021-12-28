<template>
  <div class="">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }" class="create-user-btn">
        <v-btn color="red darken-1" dark class="mb-2" v-bind="attrs" v-on="on" bottom fab fixed right> + </v-btn>
      </template>
      <v-card>
        <div class="">
          <form>
            <!-- choose student -->
            <!-- <v-autocomplete 
                :items="students"
                prepend-icon="mdi-account-multiple"  
                label="Choose student" 
                required 
                v-model="studentSelected"
                dense
                filled
            ></v-autocomplete> -->
            <label for="cars">Choose a car:</label>
                <select name="cars" id="cars">
                    <option v-for="student of studentsList" :key="student.id" value=student.id>{{student.first_name}} {{student.last_name}}</option>
                </select>

            <!-- start date -->
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs1"
                    clearable
                    label="Start date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="date1 = null"
                    prepend-icon="mdi-calendar" 
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date1" @change="menu1 = false"
                ></v-date-picker>
              </v-menu>

            <!-- end date -->
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="computedDateFormattedMomentjs2"
                    clearable
                    label="End date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="date2 = null"
                    prepend-icon="mdi-calendar" 
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date2" @change="menu2= false"
                ></v-date-picker>
              </v-menu>

            <!-- choose the type -->
            <v-autocomplete 
              :items="types"
              prepend-icon="mdi-format-list-bulleted"  
              label="Leave the type" 
              required 
              v-model="valueType"
              dense
              filled
            ></v-autocomplete>

            <!-- description -->
            <v-textarea
              label="Description"
              auto-grow
              outlined
              row-height="15"
            ></v-textarea>
            
            <!-- button cancel and create -->
            <v-card-actions>
              <v-btn color="error" @click="dialog = false"> Cancel</v-btn>
              <v-btn color="primary" @click="CreatePermission"> Create</v-btn>
            </v-card-actions> 
          </form>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from '../../axios-request.js'
  import moment from 'moment'
  import { format, parseISO } from 'date-fns'

  export default {
    data: () => ({
      date1: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      date2: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      menu1: false,
      menu2: false,

      studentsList: [],
      valueType: null,
      studentSelected: null,
    }),

    computed: {
        // for date 1
      computedDateFormattedMomentjs1 () {
        return this.date1 ? moment(this.date1).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns1 () {
        return this.date1 ? format(parseISO(this.date1), 'EEEE, MMMM do yyyy') : ''
      },

        // for date 2
      computedDateFormattedMomentjs2 () {
        return this.date2 ? moment(this.date2).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns2 () {
        return this.date2 ? format(parseISO(this.date2), 'EEEE, MMMM do yyyy') : ''
      },
    },
    methods: {
        // CreatePermission(){

        // }
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

</style>