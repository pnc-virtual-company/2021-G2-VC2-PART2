<template>
  <section>
    <br>
    <permission-form @add-permission="getAllPermissions"></permission-form>
    <edit-permission></edit-permission>
    <permission-card>
      <v-container>
        <v-row justify="center">
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
          <v-card-title class="title">
            <strong class="t">Permissions</strong>
            <v-spacer></v-spacer>
            <v-text-field class="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
          </v-card-title>
          <v-expansion-panels id="card">
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
                      <strong>{{getGoodDatetimeFormat(permission.startAt)}} - {{getGoodDatetimeFormat(permission.endAt)}}</strong><br><br>
                      <div>
                        <span>2 days</span>
                      </div>
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
                        <v-icon mediem id="edit" class="mr-2" @click="updatePer(permission)">mdi-account-edit</v-icon>
                        <v-icon mediem id="delete" @click="deleteItem(permission.id)">mdi-delete</v-icon>
                      </div>
                    </v-col>
                  </div>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="details">
                <v-divider></v-divider>
                <v-card-text>
                  <strong>Student name:</strong> {{permission.student.first_name}} {{permission.student.last_name}} <br>
                  <strong>Class:</strong> {{ permission.student.class }} <br>
                  <strong>Start date:</strong> {{getGoodDatetimeFormat(permission.startAt)}} <br>
                  <strong>End date:</strong> {{getGoodDatetimeFormat(permission.endAt)}} <br>
                  <strong>Permission type:</strong> {{permission.type}} <br>
                  <strong>Reasons:</strong> {{permission.description}}</v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
    </permission-card>
  </section>
</template>

<script>

  import axios from '../../axios-request.js'
  import permissionForm from "../permission/PermissionForm.vue";
  import EditPermission from '../permission/DialogEditPermission.vue'
  import moment from "moment";
  export default {
    components:{
      'permission-form': permissionForm,
      'edit-permission': EditPermission
    },
    data: () => ({
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
      getAllPermissions(){
        axios.get('/permissions').then(res=>{
          this.permissionList = res.data;
        })
      },
      getAllStudent(){
        axios.get('/students').then(res=>{
          this.studentList = res.data
        }) 
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
      getGoodDatetimeFormat(datetime) {
        return moment(String(datetime)).format("D-MMM-Y");
      },
      // getNumberOfDays(start, end) {
      //   const date1 = new Date(start);
      //   const date2 = new Date(end);
      //   const oneDay = 1000 * 60 * 60 * 24;
      //   const diffInTime = date2.getTime() - date1.getTime();
      //   const diffInDays = Math.round(diffInTime / oneDay);
      //   return diffInDays;
      // },
    },
    mounted() {
      this.getAllPermissions();
      // this.getAllStudent();
    },
  }
</script>

<style scoped>
  section{
    margin-top: 10px;
  }

  .card-body{
    margin-left: 0%;
  }

  .details{
    height: auto;
    background: rgba(197, 197, 197, 0.707);
  }

  #card{
    width: 98%;
  }

  .card{
    height: 25vh;
    background: rgba(226, 226, 226, 0.755);
    box-shadow: 0px 2px 4px 2px rgba(99, 99, 99, 0.25);
  }

  .title{
    width: 100%;
    margin-left: -1%;
  }

  .t{
    margin-top: 3%;
  }

  .search{
    margin-right: -1%;
    width: 15.5%;
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

  .imgp{
    margin-left: -50%;
  }

  .date-time{
    width: 20%;
    margin-left: 120px;
    margin-top: 30px;
  }
  .type{
    width: 30%;
    text-align: center;
    justify-content: center;
    display: flex;
    margin-top: -0.4%;
  }
  .action{
    text-align: center;
    justify-content: center;
    display: flex;
    width: 20%;
    margin-left: -16%;
    margin-top: -0.5%;
  }

  img{
    width: 130px;
    height: 130px;
  }

  .name{
    width: 200px;
    height: auto;
    margin-top: 57px;
    margin-left: 10%;
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
    margin-top: px;
  }

  .hidden-xs-only{
    margin-left: 2%;
  }

  .name{
    padding-bottom: 10px;
  }

  #edit{
    color: rgb(59, 114, 252);
  }

  #delete{
    color: rgb(250, 56, 59);
  }

</style>