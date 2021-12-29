<template>
  <div class="">
    <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on, attrs }" class="create-user-btn">
        <v-btn color="red darken-1" dark class="mb-2" v-bind="attrs" v-on="on" bottom fab fixed right> + </v-btn>
      </template>
      <v-card>
        <div class="">
          <form>
            <h1>Disciple notice</h1> <br>
            <!-- choose student -->
            <label for="cars">Choose student</label>
                <select class="selected" id="cars" v-model="studentSelected">
                    <!-- <option v-for="student of studentsList" :key="student.id" :value=student.id>{{student.first_name}} {{student.last_name}}</option> -->
                     <option v-for="student of studentsList" :key="student" :value=student>{{student}}</option>
                </select>
            <!-- choose the type -->
            <label for="cars">Choose leave type</label>
                <select class="selected" id="cars" v-model="type">f
                    <option v-for="leave of leavetype" :key="leave" :value=leave>{{leave}}</option>
                </select>
            <!-- description -->
            <v-textarea
              label="Description"
              auto-grow
              outlined
              row-height="15"
              v-model="description"
            ></v-textarea>
            <!-- button cancel and create -->
            <v-card-actions>
              <v-btn color="error" @click="dialog = false"> Cancel</v-btn>
              <v-btn color="primary" @click="CreateDisciple"> Create</v-btn>
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
      studentSelected:null,
      type: null,
      description: null,
      leavetype: ["Misconduct", "Oral warning", "Warning letter", "Termination"],
      studentsList: ["Den","Vantheav","Siny","Cannary","Vicheka","Sovanthy"],
      dialog : false,
    }),
    methods: {
        CreateDisciple(){
          let newDisciple = {
            'student_id': this.studentSelected,
            'type': this.type,
            'description': this.description,
          }
          console.log(newDisciple);
          if(this.studentSelected != null){
            axios.post('/disciple', newDisciple).then(res=>{
              console.log(res.data);
              this.dialog = false;
            })
          }
        },
        getAllStudent(){
        axios.get('/disciple').then(res =>{
          this.studentsList = res.data;
        })
      },
    },
    mounted() {
      this.getAllStudent();
    },
  }
</script>

<style scoped>
    h1{
        margin-left: 18%;
    }
  .create-user-btn {
    top: 85vh;
    float: right;
    position: fixed;
  }

  form{
    padding: 15px;
  }
  .selected, input[type=date]{
    width: 100%;
    background: rgba(191, 190, 190, 0.809);
    border-radius: 2px;
    height: 35px;
    padding: 0 5px;
    color: rgb(49, 47, 47);
    margin-bottom: 10px;
    border: none;
  }
</style>