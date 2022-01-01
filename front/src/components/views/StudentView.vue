<template>
    <section>
        <br>
        <student-form @add-student="getStudents"></student-form>
        <edit-student></edit-student>
        <student-card>
            <v-container>
                <template>
                    <v-dialog v-model="dialogDelete" max-width="450px">
                        <v-card>
                        <br>
                        <v-card-title class="red--text">Are you sure you want to remove this user?</v-card-title><br>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn depressed color="primary" @click="dialogDelete = false">Cancel</v-btn>
                            <v-btn depressed color="error" @click="deleteItemConfirm">YES</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card-title >
                        <strong class="t">Students</strong>
                        <v-spacer></v-spacer>
                        <v-text-field @keyup="searchStudent" v-model="searchStudentname" class="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field> 
                    </v-card-title>
                    <v-card color="" green>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead class="light-blue lighten-2" >
                                    <th>Profile</th>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Class</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </thead> 
                                <tbody>
                                    <tr class="text-center" v-for="(students, index) in student_list" :key="index" style="text-align: center; align-items: center;justify-content: center; height:12vh;">
                                        <td class="img">
                                            <v-img  :src="imgUrl + students.image" height="50" width="50"  class="pa-7 secondary rounded-circle d-inline-block"></v-img>
                                        </td>
                                        <td>{{ students.first_name }}</td>
                                        <td>{{ students.last_name }}</td>
                                        <td>{{ students.class }}</td>
                                        <td>{{ students.phone }}</td>
                                        <td>{{ students.gender }}</td>
                                        <td> 
                                            <v-icon id="edit" medium class="mr-2" @click="editItem(students)">mdi-account-edit</v-icon>
                                            <v-icon id="delete" medium @click="deleteItem(students)">mdi-delete</v-icon>   
                                        </td>
                                    </tr>
                                    <Updateuser v-if="dialog" :dataStudent="dataStudent" @cancel="cancel" @update="UpdateUser"></Updateuser>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </template>
            </v-container>
        </student-card>
    </section>
</template>

<script>
    import axios from "../../axios-request.js";
    import StudentForm from "../student/StudentForm.vue"
    import EditStudent from '../student/DialogEditStudent.vue'
    export default {
        components:{
            'student-form': StudentForm,
            'edit-student': EditStudent
        },
        data: () => ({
            imgUrl: "http://127.0.0.1:8000/storage/images/",
            student_list: [],
            searchStudentname:'',
            dialogDelete: false,
            studentID: null,
        }),
        methods: {
            getStudents() {
                axios.get("/students").then((res) => {
                    this.student_list = res.data;
                });
            },
            deleteItem(student) {                
                this.dialogDelete = true;
                this.studentID = student.id;
            },
            deleteItemConfirm() {
                axios.delete("/students/" + this.studentID).then((res) => {
                    console.log(res.data);
                    this.getStudents();
                    this.dialogDelete = false;
                });
            },
            cancel(){
                this.dialog = false;
            },
            searchStudent(){
                if(this.searchStudentname !== ''){
                    axios.get('/searchStudent/search/' + this.searchStudentname).then(res=>{
                        this.student_list = res.data;
                    })
                }else{
                    this.getStudents();
                }
            },
        },
        mounted() {
            this.getStudents();
        },
    }
</script>

<style scoped>
    section{
        margin-top: -1.5px;
    }

    .text-h5{
        color: white;
    }
    .btn-create{
        margin: 10px; 
    }
    v-radio{
        display: flex;
    }

    thead {
        height: 7vh;
        font-size: 18px;
    }

    thead th {
        color: #fff;
    }

    tbody{
        height: 15vh;
    }
    .title{
        margin-left: -1.5%;
    }

    .t{
        margin-top: 3%;
        margin-left: -1.5%;
    }

    .search{
        margin-right: -1.5%;
        width: 11%;
    }

    #edit{
        color: rgb(59, 114, 252);
    }

    #delete{
        color: rgb(250, 56, 59);
    }

</style>