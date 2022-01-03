<template>
    <v-container>
        <br>
        <br> 
        <v-btn @click="back" class="btn" style="background: rgb(255, 39, 39);">
            <v-list-item >
                <v-icon class="white--text">mdi-arrow-left-bold-circle</v-icon>
                <v-list-item-title class="white--text">Back</v-list-item-title>
            </v-list-item>
        </v-btn><br><br>
        <div class="detail-card">
            <div class="profile">
                <img :src="imgUrl+studentInfo.image" />
            </div>
            <div class="name">
                <v-col>
                    <div class="first_name">
                        <span>Name: <strong>{{studentInfo.first_name}} {{studentInfo.last_name}}</strong></span>
                    </div>
                    <div class="gender">
                        <span>Sex: {{studentInfo.gender}}</span>
                    </div>
                </v-col>
            </div>
            <div class="class">
                 <v-list-item>
                    <v-icon>mdi-trackpad</v-icon>
                    <v-list-item-title>{{studentInfo.class}}</v-list-item-title>
                </v-list-item>
            </div>
            <div class="school">
                <v-list-item>
                    <v-icon class="green--text">mdi-school</v-icon>
                    <v-list-item-title class="green--text">At School</v-list-item-title>
                </v-list-item>
            </div>
        </div><br>
        <template>
            <v-toolbar>
                <v-tabs dark background-color="blue-grey darken-3" grow>
                <v-tab>
                    <v-badge color="green" content="1"> Permission </v-badge>
                </v-tab>
                 <v-tab>
                    <v-badge color="pink" dot> Discipline </v-badge>
                </v-tab>
                </v-tabs>
            </v-toolbar>
        </template>
    </v-container>
</template>

<script>
    export default {
        emits:['back'],
        props:['studentInfo'],
        data: () => ({
            imgUrl: "http://127.0.0.1:8000/storage/images/",
            student_list: [],
            searchStudentname:'',
            studentID: null,
            studentInfo: '',
            numOfPermissions: 0,
            numOfDisciples: 0,
        }),
        methods: {
            back(){
                this.$emit('back', false);
            }
        },
        mounted() {
            console.log(this.studentInfo.student);
        },
    }
</script>

<style scoped>
    .v-toolbar{
        width: 75.5%;
        margin-left: 10%;
    }
    .btn{
        
        width: 80px;
        height: 5vh;
        border-radius: 5px;
    }

    .detail-card{
        width: 100%;
        height: 18vh;
        border-radius: 5px;
        display: flex;
    }
    .profile{
        width: 20%;
    }
    .name{
        margin-top: 1%;
        margin-left: 8%;
    }
    .name,
    .class,
    .school{
        width: 25%;
    }

    .class,
    .school{
        margin-top: 3%;
    }

    img{
        width: 100px;
        height: 100px;
        margin-left: 50%;
        margin-top: 4%;
        border-radius: 50%;
    }
</style>