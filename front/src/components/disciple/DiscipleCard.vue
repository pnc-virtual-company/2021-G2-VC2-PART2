<template>
  <v-container>
    <v-row justify="center">
      <div>
        <h3 class="title">Disciplince</h3>
      </div>
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(disciple, i) in discipleList" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center"  no-gutters>
              <div class="img-and-name">
                <div>
                  <v-col cols="4">
                    <div class="imgp">
                      <img alt="Avatar" :src=imgUrl+disciple.student.image />
                    </div>
                  </v-col>
                </div>
                <div class="name">
                  <v-col class="hidden-xs-only" sm="5" md="3">
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
                  <v-chip v-if="disciple.new" :color="`${disciple.student.first_name} lighten-4`" class="ml-0 mr-2 black--text" label small>
                    {{ disciple.new }} new
                  </v-chip>
                </v-col>
              </div>
              <div class="type">
                <v-col> 
                  <v-title>{{disciple.type}}</v-title>
                </v-col>
              </div>
              <div class="action">
                <v-col>
                  <div class="btn">
                    <v-icon mediem class="mr-2">mdi-account-edit</v-icon>
                    <v-icon mediem>mdi-delete</v-icon>
                  </div>
                </v-col>
              </div>
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
    discipleList: [],
    imgUrl: "http://127.0.0.1:8000/storage/images/",
    
  }),
  methods: {
    getAllDisciples(){
      axios.get('/disciples').then(res=>{
        this.discipleList = res.data;
      })
    }
  },
  mounted() {
    this.getAllDisciples();
  },
};
</script>
<style scoped>

  .title{
    margin-right: 20%;
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
    margin-left: 50px;
  }
  .type{
    width: 20%;
    text-align: center;
    justify-content: center;
    display: flex;
  }
  .action{
    text-align: center;
    justify-content: center;
    display: flex;
    width: 20%;
  }

  img{
    width: 110px;
    height: 100px;
  }

  .name{
    width: 200px;
    height: auto;
    margin-top: 52px;
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

