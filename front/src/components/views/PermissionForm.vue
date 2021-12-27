<template>
    <v-row justify="center" class="all-form">
        <v-col lg="5">
            <v-card color="#D3E4CD">
                <v-row>
                    <!-- Title card -->
                    <v-card-text
                        class="text-h5 green--text"
                        align="center"
                        justify="end"
                        
                    >
                        New Permission
                    </v-card-text>
                </v-row>

                <v-card-text>
                    <!-- Select Student -->
                    
                    <v-autocomplete
                        v-model="value_student"
                        :items="students"
                        dense
                        filled
                        label="Choose Student"
                    ></v-autocomplete>
                    
                    <!-- Start Date -->

                    <v-menu
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="computedDateFormatted"
                            label="Start date"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date1"
                            no-title
                            @input="menu1 = false"
                        ></v-date-picker>
                    </v-menu>

                    <!-- End Date -->

                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                            v-model="computedDateFormatted"
                            label="End date"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date2"
                            no-title
                            @input="menu2 = false"
                        ></v-date-picker>
                    </v-menu>

                    <!-- Select type -->

                    <v-autocomplete
                        v-model="value_per_type"
                        :items="permissionTypes"
                        dense
                        filled
                        label="Leave the type"
                    ></v-autocomplete>

                    <!-- Description -->

                    <v-text-field
                        v-model="message"
                        label="Description"
                        outlined
                        clearable
                    ></v-text-field>

                </v-card-text>
                    <!-- <v-divider></v-divider> -->
                    <v-card-actions>

                    <v-btn color="red" text @click="submit" :to="{ path: '/permission' }">Cancel</v-btn>
                    <v-btn color="blue" text @click="submit" :to="{ path: '/permission' }">Submit</v-btn>

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
                    
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
  export default {

    data: vm => ({
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    
      students: ['Channary', 'Lyden', 'Vicheka', 'Siny', 'Vantheav'], // student list
      value_student: null,

      permissionTypes: ['Sick', 'Wedding', 'Dead Celebrate'], // permission type list
      value_per_type: null,

      menu1: '',
      menu2: '',

    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date1)
      },
    },

    watch: {
      date1 () {
        this.dateFormatted = this.formatDate(this.date1)
      },
    },

    methods: {
      formatDate (date1) {
        if (!date1) return null

        const [year, month, day] = date1.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date1) {
        if (!date1) return null

        const [month, day, year] = date1.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
</script>

<style scoped>
    .all-form {
        margin-top: 3.6%;
    }
</style>


