
          </v-dialog>


<template>
    <section>
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
              <v-textarea label="Description" auto-grow outlined v-model="description"></v-textarea>
              <v-card-actions>
                <v-btn color="error" @click="dialogUpdate = false"> Cancel</v-btn>
                <v-btn color="primary" @click="UpdateDisciple()"> Update</v-btn>
              </v-card-actions> 
            </form>
          </div>
        </v-card>
      </v-dialog>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
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
        },
        mounted() {
            
        },
    }
</script>

<style scoped>

</style>