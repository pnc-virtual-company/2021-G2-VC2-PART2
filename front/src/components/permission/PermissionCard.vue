<template>
  <v-container>
    <v-row justify="center">
      <div>
        <h3 class="title">Permissions</h3>
      </div>
      <v-expansion-panels>
        <v-expansion-panel v-for="(permission, i) in permissionList" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center"  no-gutters>
              <div class="img-and-name">
                <div>
                  <v-col cols="4">
                    <div class="imgp">
                      <img :src=imgUrl+permission.student.image />
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
                    <v-icon mediem class="mr-2">mdi-account-edit</v-icon>
                    <v-icon mediem>mdi-delete</v-icon>
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
    permissionList: [],
    imgUrl: "http://127.0.0.1:8000/storage/images/",
    
  }),
  methods: {
    getAllPermissions(){
      axios.get('/permissions').then(res=>{
        this.permissionList = res.data;
      })
    }
  },
  mounted() {
    this.getAllPermissions();
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

