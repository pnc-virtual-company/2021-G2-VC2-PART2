<template>
  <v-container>
    <v-row justify="center">
      <v-card-title class="title">
        Disciples<v-spacer></v-spacer>
        <v-text-field class="search" append-icon="mdi-magnify" label="Search" single-line hide-details ></v-text-field>
      </v-card-title>
      <v-expansion-panels>
        <v-expansion-panel v-for="(disciple, i) in discipleList" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center"  no-gutters>
              <div class="img-and-name">
                <div>
                  <v-col cols="4">
                    <div class="imgp">
                      <div class="w">
                         <img src='../../assets/warning.png' />
                      </div>
                      <div class="p">
                         <img :src=imgUrl+disciple.student.image />
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
              <div class="action">
                <v-icon mediem class="mr-2">mdi-account-edit</v-icon>
                <v-icon mediem>mdi-delete</v-icon>
              </div>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
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
      discipleList: [],
      imgUrl: "http://127.0.0.1:8000/storage/images/",
      
    }),
    methods: {
      getAllDisciple(){
        axios.get('/disciple').then(res=>{
          this.discipleList = res.data;
          console.log(this.discipleList);
        })
      }
    },
    mounted() {
      this.getAllDisciple();
    },
  };
</script>

<style scoped>

  .title{
    width: 100%;
    margin-left: -2%;
  }

  .search{
    margin-right: -2%;
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
    margin-left: 5%;
  }

  .imgp{
    display: flex;
    margin: 0px;
  }


  .w,
  .p{
    margin: 10px;
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