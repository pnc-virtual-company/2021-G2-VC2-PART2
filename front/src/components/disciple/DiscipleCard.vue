<template>
  <v-container>
    <v-row justify="center">
      <v-card-title class="title">
        Disciples<v-spacer></v-spacer>
        <v-text-field class="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
      </v-card-title>
      <v-dialog v-model="dialogUpdate" width="400">
         <v-card>
        <div class="">
          <form>
            <h1>Disciple notice</h1><br>
            <label for="cars">Choose student</label>
            <select class="selected" id="cars" v-model="studentSelected">
              <option v-for="student of studentList" :key="student.id" :value=student.id>{{student.first_name}} {{student.last_name}}</option>
            </select>
            <label for="cars">Choose leave type</label>
            <select class="selected" id="cars" v-model="type">
              <option v-for="leave of leavetype" :key="leave" :value=leave>{{leave}}</option>
            </select>
            <label for="cars">Start Date: </label><br>
            <input type="date" name="" id="" v-model="dateWn"><br>
            <v-textarea label="Description" auto-grow outlined row-height="15" v-model="description"></v-textarea>
            <v-card-actions>
               <v-btn color="error" @click="dialogUpdate = false"> Cancel</v-btn>
              <v-btn color="primary" @click="UpdateDisciple()"> Update</v-btn>
            </v-card-actions> 
          </form>
        </div>
      </v-card>
      </v-dialog>
       <v-dialog v-model="dialogDelete" max-width="480px">
        <v-card >
          <br>
          <v-card-title class="red--text">Are you sure you want to delete this Disciple?</v-card-title><br>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" style="background: #039BE5;" text @click="closeDelete">Cancel</v-btn>
            <v-btn color="white" style="background: #E53935;" text @click="deleteItemConfirm">YES</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-expansion-panels class="disciple-card">
        <v-expansion-panel v-for="(disciple, i) in discipleList" :key="i" hide-actions class="card-body">
          <v-expansion-panel-header class="card">
            <v-row align="center"  no-gutters>
              <div class="img-and-name">
                <div>
                  <v-col cols="4">
                    <div class="imgp">
                      <div class="w">
                         <img src='../../assets/warning.png' />
                      </div>
                      <div class="p">
                         <img :src="imgUrl+disciple.student.image" />
                      </div>
                    </div>
                  </v-col>
                </div>
                <div class="name">
                  <v-col class="hidden-xs-only">
                    <div class="u-name">
                      <h3>{{disciple.student.first_name}} {{disciple.student.last_name}}</h3><br>
                    </div>
                    <div class="class">
                      <span>{{ disciple.student.class }}</span>
                    </div>
                  </v-col>
                </div>
              </div>
              <div class="date-time">
                <v-col class="text-no-wrap" cols="5" sm="3">
                  <strong>{{disciple.dateWn}}</strong>
                </v-col>
              </div>
              <div class="type">
                <v-col> 
                  <v-title>{{disciple.type}}</v-title>
                </v-col>
              </div>
              <v-card-actions>
                <div class="action">
                  <v-icon mediem class="mr-2" @click="updateDis(disciple)">mdi-account-edit</v-icon>
                  <v-icon mediem @click="deleteItem(disciple.id)">mdi-delete</v-icon>
                </div>
              </v-card-actions>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="disciple.description"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>

  import axios from '../../axios-request.js'
  export default {
    data: () => ({
      imgUrl: "http://127.0.0.1:8000/storage/images/",
      leavetype: ["Misconduct", "Oral warning", "Warning letter", "Termination"],
      dialogUpdate: false,
      dialogDelete: false,
      studentSelected: null,
      description: null,
      discipleID: null,
      dateWn: null,
      type: null,
      studentList: [],
      discipleList: [],
    }),
    methods: {
      updateDis(disciple){
        this.dialogUpdate = true;
        this.studentSelected = disciple.student.id;
        this.discipleID = disciple.id;
        this.dateWn = disciple.dateWn;
        this.description = disciple.description;
      },
      UpdateDisciple(){
        let updateDiscipleItem = {
          'student_id': this.studentSelected,
          'type': this.type,
          'dateWn': this.dateWn,
          'description': this.description,
        }
        console.log(updateDiscipleItem);
        axios.put('/disciple/'+ this.discipleID, updateDiscipleItem).then(res=>{
          console.log(res.data);
          this.getAllDisciple();
          this.dialogUpdate = false ;
        })
        this.studentSelected = "";
        this.dateWn = "";
        this.type = "";
        this.description = "";
      },
      deleteItem(id){
        this.dialogDelete = true;
        this.discipleID = id;
      },
      closeDelete(){
        this.dialogDelete = false;
      },
      deleteItemConfirm(){
        axios.delete('/disciple/'+ this.discipleID).then(res=>{
          console.log(res.data);
          this.closeDelete();
          this.getAllDisciple();
        })
      },
       getAllDisciple(){
        axios.get('/disciple').then(res=>{
          this.discipleList = res.data;
        })
      },
      getAllStudent(){
        axios.get('/students').then(res=>{
          this.studentList = res.data
          console.log(res.data);
        }) 
      },
    },
    mounted() {
      this.getAllDisciple();
      this.getAllStudent();
    },
  };

</script>

<style scoped>
  
  .card-body{
    width: 100%;
    margin-left: 2%;
  }

  .card{
    height: 25vh;
    background: rgba(226, 217, 217, 0.659);
    box-shadow: 0px 2px 4px 2px rgba(99, 99, 99, 0.25);
  }

  .title{
    width: 100%;
    margin-left: -1%;
  }

  .search{
    margin-right: -2.5%;
  }

  .btn {
    margin-left: 60%;
  }

  .img-and-name{
    width: 30%;
    display: flex;
  }

  .date-time{
    width: 20%;
    height:100%;
    margin-left: 22%;
    align-items: center;
  }
  .type{
    width: 15%;
    margin-left: -5%;
    text-align: center;
    justify-content: center;
    display: flex;
  }
  .action{
    text-align: center;
    justify-content: center;
    display: flex;
    width: 10%;
    justify-content: flex-start;
    margin-left: 80%;
  }

  .imgp{
    display: flex;
    margin: 0px;
  }


  .w,
  .p{
    margin: 10px;
  }

  .w{
    margin-left: -1%;
  }

  .p{
    margin-left: 40%;
  }

  img{
    width: 130px;
    height: 130px;
  }

  .name{
    width: 300px;
    height: auto;
    margin-top: 67px;
  }

  .u-name{
    display: flex;
    width: 150px;
    height: 30px;
    text-transform: uppercase;
    margin-left: 30%;
  }

  .class{
    width: 150px;
    height: 30px;
    margin-left: 30%;
  }

  .hidden-xs-only{
    margin-left: 2%;
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