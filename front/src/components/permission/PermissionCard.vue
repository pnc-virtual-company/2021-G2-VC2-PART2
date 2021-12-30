<template>
  <v-container>
    <v-row justify="center">
      <v-card-title class="title">
        Permissions<v-spacer></v-spacer>
        <v-text-field class="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
      </v-card-title>
      <div>
        <v-dialog v-model="dialogUpdate" width="400">
        <v-card>
          <div class="">
            <form>
              <label for="cars">Choose a student</label>
                <select class="selected" id="cars" v-model="studentSelected">
                  <option v-for="student of studentList" :key="student.id" :value=student.id>{{student.first_name}} {{student.last_name}}</option>
                </select>
              <label for="cars">Start Date: </label><br>
                <input type="date" name="" id="" v-model="startAt"><br>
              <label for="cars">Start Date: </label><br>
                  <input type="date" name="" id="" v-model="endAt"><br>
              <label for="cars">Choose leave type</label>
                <select class="selected" id="cars" v-model="type">
                  <option v-for="leave of leavetype" :key="leave" :value=leave>{{leave}}</option>
                </select>
              <v-textarea label="Description" auto-grow outlined row-height="15" v-model="description"></v-textarea>
              <v-card-actions>
                <v-btn color="error" @click="dialogUpdate = false"> Cancel</v-btn>
                <v-btn color="primary" @click="UpdatePermission"> Update</v-btn>
              </v-card-actions> 
            </form>
          </div>
        </v-card>
      </v-dialog>
      </div>
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card >
          <br>
          <v-card-title class="red--text">Are you sure you want to delete this Permission?</v-card-title><br>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" style="background: #039BE5;" text @click="closeDelete">Cancel</v-btn>
            <v-btn color="white" style="background: #E53935;" text @click="deleteItemConfirm">YES</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-expansion-panels>
        <v-expansion-panel v-for="(permission, i) in permissionList" :key="i" hide-actions class="card-body">
          <v-expansion-panel-header class="card" >
            <v-row align="center"  no-gutters>
              <div class="img-and-name">
                <div>
                  <v-col cols="4">
                    <div class="imgp">
                      <img :src="imgUrl+permission.student.image" />
                    </div>
                  </v-col>
                </div>
                <div class="name">
                  <v-col class="hidden-xs-only">
                    <div class="u-name">
                      <h3>{{permission.student.first_name}} {{permission.student.last_name}}</h3><br>
                    </div>
                    <div class="class">
                      <span>{{ permission.student.class }}</span>
                    </div>
                  </v-col>
                </div>
              </div>
              <div class="date-time">
                <v-col class="text-no-wrap" cols="5" sm="3">
                  <v-chip v-if="permission.new" :color="`${permission.student.first_name} lighten-4`" class="ml-0 mr-2 black--text" label small>
                    {{ permission.new }} new
                  </v-chip>
                  <strong>{{permission.startAt}} - {{permission.endAt}}</strong>
                </v-col>
              </div>
              <div class="type">
                <v-col> 
                  <v-title>{{permission.type}}</v-title>
                </v-col>
              </div>
              <div class="action">
                <v-col>
                  <div class="btn">
                    <v-icon mediem class="mr-2" @click="updatePer(permission)">mdi-account-edit</v-icon>
                    <v-icon mediem @click="deleteItem(permission.id)">mdi-delete</v-icon>
                  </div>
                </v-col>
              </div>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="permission.description"></v-card-text>
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
      leavetype: ["play Foodball", "sleep", "tired", "drink beer"],
      dialogUpdate: false,
      dialogDelete: false,
      permissionList: [],
      studentList: [],
      perId: null,
      studentSelected: null,
      startAt: null,
      endAt: null,
      type: null,
      description: null,
      imgUrl: "http://127.0.0.1:8000/storage/images/",
      
    }),
    methods: {
      updatePer(permission){
        this.dialogUpdate = true;
        this.studentSelected = permission.student.id;
        this.perId = permission.id;
        this.startAt = permission.startAt;
        this.endAt = permission.endAt;
        this.description = permission.description;
        console.log(this.studentSelected);
      },
      UpdatePermission(){
        let updatePermissionItem = {
          'student_id': this.studentSelected,
          'startAt': this.startAt,
          'endAt': this.endAt,
          'type': this.type,
          'description': this.description,
        }
        console.log(updatePermissionItem);
        axios.put('/permissions/'+ this.perId, updatePermissionItem).then(res=>{
          console.log(res.data);
          this.getAllPermissions();
          this.dialogUpdate =false;
        })
        this.studentSelected = "";
        this.startAt = "";
        this.endAt = "";
        this.type = "";
        this.description = "";
      },
      deleteItem(id){
        this.dialogDelete = true;
        this.perId = id;
      },
      closeDelete(){
        this.dialogDelete = false;
      },
      deleteItemConfirm(){
        axios.delete('/permissions/'+ this.perId).then(res=>{
          console.log(res.data);
          this.closeDelete();
          this.getAllPermissions();
        })
      },
      getAllPermissions(){
        axios.get('/permissions').then(res=>{
          this.permissionList = res.data;
        })
      },
      getAllStudent(){
        axios.get('/students').then(res=>{
          this.studentList = res.data
        }) 
      }
    },
    mounted() {
      this.getAllPermissions();
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
    background: rgba(228, 228, 228, 0.836);
    box-shadow: 0px 2px 4px 2px rgba(99, 99, 99, 0.25);
  }

  .title{
    width: 100%;
    margin-left: -1%;
  }

  .search{
    margin-right: -2.5%;
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
  
  .btn {
    margin-left: 60%;
  }

  .img-and-name{
    width: 30%;
    display: flex;
  }

  .date-time{
    width: 20%;
    margin-left: 70px;
  }
  .type{
    width: 30%;
    text-align: center;
    justify-content: center;
    display: flex;
  }
  .action{
    text-align: center;
    justify-content: center;
    display: flex;
    width: 20%;
    margin-left: -12%;
  }

  img{
    width: 130px;
    height: 130px;
  }

  .name{
    width: 200px;
    height: auto;
    margin-top: 57px;
  }

  .u-name{
    display: flex;
    width: 150px;
    height: 30px;
    text-transform: uppercase;
  }

  .class{
    width: 150px;
    height: 30px;
  }

  .hidden-xs-only{
    margin-left: 2%;
  }

  .name{
    padding-bottom: 10px;
  }

</style>

