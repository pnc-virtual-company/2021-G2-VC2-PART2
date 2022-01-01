<template>
  <div class="">
    <!-- <v-dialog v-model="dialog" width="400">
      <template v-slot:activator="{ on, attrs }" class="create-user-btn">
        <v-btn color="red darken-1" dark class="mb-2" v-bind="attrs" v-on="on" bottom fab fixed right> + </v-btn>
      </template>
      <v-card>
        <div class="">
          <form>
            <label for="cars">Choose a student</label>
              <select class="selected" id="cars" v-model="studentSelected">
                <option v-for="student of studentsList" :key="student.id" :value=student.id>{{student.first_name}} {{student.last_name}}</option>
              </select>
            <label for="cars">Start Date: </label><br>
              <input type="date" name="" id="" v-model="startAt"><br>
            <label for="cars">End Date: </label><br>
              <input type="date" name="" id="" v-model="endAt"><br>
            <label for="cars">Choose leave type</label>
              <select class="selected" id="cars" v-model="type">f
                <option v-for="leave of leavetype" :key="leave" :value=leave>{{leave}}</option>
              </select>
            <v-textarea label="Description" auto-grow outlined row-height="15" v-model="description"></v-textarea>
            <v-card-actions>
              <v-btn color="error" @click="dialog = false"> Cancel</v-btn>
              <v-btn color="primary" @click="CreatePermission"> Create</v-btn>
            </v-card-actions> 
          </form>
        </div>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
  // import axios from '../../axios-request.js'
  // export default {
  //   emits:['add-permission'],
  //   data: () => ({
  //     studentSelected: null,
  //     startAt: null,
  //     endAt: null,
  //     type: null,
  //     description: null,
  //     leavetype: ["Sick", "Fever", "Date with doctor", "To visit relatives", "Join wedding", "Handcuffs", "Broken leg"],
  //     studentsList: [],
  //     dialog : false,
  //   }),
  //   methods: {
  //       updatePer(permission){
  //           this.dialogUpdate = true;
  //           this.studentSelected = permission.student.id;
  //           this.perId = permission.id;
  //           this.startAt = permission.startAt;
  //           this.endAt = permission.endAt;
  //           this.description = permission.description;
  //           console.log(this.studentSelected);
  //       },
  //       UpdatePermission(){
  //           let updatePermissionItem = {
  //           'student_id': this.studentSelected,
  //           'startAt': this.startAt,
  //           'endAt': this.endAt,
  //           'type': this.type,
  //           'description': this.description,
  //           }
  //           console.log(updatePermissionItem);
  //           axios.put('/permissions/'+ this.perId, updatePermissionItem).then(res=>{
  //           console.log(res.data);
  //           this.getAllPermissions();
  //           this.dialogUpdate =false;
  //           })
  //           this.studentSelected = "";
  //           this.startAt = "";
  //           this.endAt = "";
  //           this.type = "";
  //           this.description = "";
  //       },
  //       getAllStudent(){
  //       axios.get('/students').then(res =>{
  //         this.studentsList = res.data;
  //       })
  //     },
  //   },
  //   mounted() {
  //     this.getAllStudent();
  //   },
  // }
</script>

<style scoped>
  /* .create-user-btn {
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
  } */

</style>