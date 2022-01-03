<template>
    <v-container>
        <br>
        <br> 
        <v-btn @click="back" class="btn" style="background: rgb(255, 39, 39);">
            <v-list-item >
                <v-icon class="white--text">mdi-arrow-left-bold-circle</v-icon>
                <v-list-item-title class="white--text">Back</v-list-item-title>
            </v-list-item>
        </v-btn><br>
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
                <v-tab @click="showPer">
                    <v-badge color="green" :content="numOfPermissions"> Permission </v-badge>
                </v-tab>
                 <v-tab @click="showDisc">
                    <v-badge color="pink" :content="numOfDisciples"> Discipline </v-badge>
                </v-tab>
                
                </v-tabs>
            </v-toolbar>
            <template>
                    <v-expansion-panels v-if="isPermission"  class="cardItem">
                        <v-expansion-panel v-for="(item,i) in perEachStudentList" :key="i">
                        <v-expansion-panel-header>
                            <v-icon>mdi-link-variant</v-icon>
                            <span>{{getGoodDatetimeFormat(item.startAt)}} to {{getGoodDatetimeFormat(item.endAt)}}</span><br><br>
                            <div>
                                <span v-html="Math.round(((new Date(item.endAt)).getTime() - (new Date(item.startAt)).getTime()) / (1000 * 3600 * 24))" ></span> <span>days</span>
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Reasons: <br>{{item.description}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-expansion-panels v-if="isDisciple" class="cardItem">
                    <v-expansion-panel v-for="(item,i) in discEachStudentList" :key="i">
                        <v-expansion-panel-header>
                            <v-icon class="red--text" style="font-size: 40px">mdi-alert-octagram</v-icon>
                            <span class="red--text">{{item.type}}</span>
                            <span>{{item.dateWn}}</span><br><br>

                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Reasons: <br>{{item.description}}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>             
            </template>
        </template>
    </v-container>
</template>

<script>
    import moment from "moment";
    export default {
        emits:['back'],
        props:['studentInfo'],
        data: () => ({
            imgUrl: "http://127.0.0.1:8000/storage/images/",
            student_list: [],
            searchStudentname:'',
            studentID: null,
            studentInfo: '',
            perEachStudentList: [],
            perList: [],
            discEachStudentList: [],
            numOfPermissions: '0',
            numOfDisciples: '0',
            isPermission: true,
            isDisciple: false,
        }),
        methods: {
            showPer(){
                this.isPermission = true
                this.isDisciple = false;
            },
            showDisc(){
                this.isPermission = false
                this.isDisciple = true;
            },
            getGoodDatetimeFormat(datetime) {
                return moment(String(datetime)).format("DD-MM-Y");
            },
            back(){
                this.$emit('back', false);
            },
            getNumD(){
                for(let i in this.perEachStudentList){
                    this.numOfPermissions++;
                    console.log(i);
                }
                for(let u in this.discEachStudentList){
                    this.numOfDisciples++;
                    console.log(u);
                }
            },
        },
        mounted() {
            this.perEachStudentList = this.studentInfo.permission;
            this.discEachStudentList = this.studentInfo.disciple;
            this.getNumD();
        },
    }
</script>

<style scoped>
    .cardItem{
        width: 75.5%;
        margin-left: 10%;
    }
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
        margin-top: 1.5%;
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
        width: 120px;
        height: 120px;
        margin-left: 50%;
        margin-top: 4%;
        border-radius: 50%;
    }
</style>