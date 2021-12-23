<template>

  <div>

  <v-card
    max-width="800"
    class="mx-auto"
  >
    <!-- Permission title -->
    <v-card-title class="text-h5">
        Permission
        
        <!-- Search Bar -->
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          class="pa-4"
        ></v-text-field>
    </v-card-title>

    <!-- Permission Card -->
    <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
             dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    <v-icon color="blue">mdi-lead-pencil</v-icon>
                  </v-btn>

                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    <v-icon color="red">mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="160"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
    </v-col>

  </v-card>

  <!-- Button Create -->
  <v-btn class="mx-2" id="clickCreate" fab dark color="indigo" :to="{ path: '/permissionform' }">
    <v-icon dark> mdi-plus </v-icon>
  </v-btn>

  </div>
</template>

<script>
  // import axios from "../../axios-request.js";
  export default {
    data: () => ({
      items: [
        {
          color: '#000B49',
          src: 'https://krttrialmonitor.files.wordpress.com/2012/05/ly-hout-pheng.jpg',
          title: 'Lily',
          artist: 'WEB 2021 A',
        },
        {
          color: '#11324D',
          src: 'https://pelprek.sgp1.digitaloceanspaces.com/avatar/3902/small-146968686541040.jpg',
          title: 'Dara',
          artist: 'WEB 2021B',
        },
        {
          color: '#261C2C',
          src: 'https://opendevelopmentcambodia.net/wp-content/uploads/sites/2/2020/08/Sambath.jpg',
          title: 'Leak',
          artist: 'WEB 2021A',
        },
        {
          color: '#334257',
          src: 'https://www.superprof.co.uk/images/teachers/teacher-home-original-cambodian-teaches-khmer-for-those-who-interested-our-heritage-and-language.jpg',
          title: 'Bora',
          artist: 'WEB 2021B',
        },
      ],
    }),
  }
</script>

<style scoped>
.mx-2 {
 
 float: right;
 /* top: 50vh; */
}
</style>