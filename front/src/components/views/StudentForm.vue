<template>
  <v-row justify="center" class="all-form">
        <v-col cols="12" sm="10" md="8" lg="6">
            <v-card ref="form">
                    <v-card-text>
                        <v-text-field ref="first name" v-model="name" label="First Name" required></v-text-field>
                        <v-text-field ref="last name" v-model="address" label="Last Name" required></v-text-field>
                        
                        <input class="female" type="radio" value="female">
                        <label class="six" for="female">Female</label>
                        
                        <input class="male" type="radio" value="male">
                        <label class="six" for="male">Male</label>
                        
                        <v-autocomplete ref="class" v-model="country" :items="classes" label="Class" placeholder="Select class..." required></v-autocomplete>
                        <v-text-field ref="phone number" v-model="address" label="Phone Number" required></v-text-field>

                    </v-card-text>
                        <v-divider class="mt-12"></v-divider>
                        <v-card-actions>
                        <v-btn text :to="{ path: '/student' }">Cancel</v-btn>
                        <v-slide-x-reverse-transition>
                            <v-tooltip v-if="formHasErrors" left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                                        <v-icon>mdi-refresh</v-icon>
                                    </v-btn>
                                </template>
                                <span>Refresh form</span>
                            </v-tooltip>
                        </v-slide-x-reverse-transition>
                        <v-btn color="primary" text @click="submit" :to="{ path: '/student' }">Submit</v-btn>
                    </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>


<script>
  export default {
    data: () => ({
      classes: ['WEP A', 'WEP B', 'SNA', 'CLASS A', 'CLASS B', 'CLASS C'],
    }),
    computed: {
      form () {
        return {
          class: this.class,
        }
      },
    },
  }
</script>

<style scoped>
    .all-form {
        margin-top: 8%;
    }
    .six {
        padding: 10px;
        width: 50px;
        height: 100px;
    }
</style>


