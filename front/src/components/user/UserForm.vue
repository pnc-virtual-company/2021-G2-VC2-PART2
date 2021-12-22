<template>
  <div class="">
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }" class="create-user-btn">
            <v-btn color="red darken-1" dark class="mb-2" v-bind="attrs" v-on="on" bottom fab fixed right>+</v-btn>
        </template>

        <v-card>
            <!-- <v-card-title class="text-h5 grey lighten-2"> Privacy Policy </v-card-title>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
            </v-card-actions> -->
            
            <div class="">
                <form action="#">
                    <input type="text" placeholder="Hello world"><br>
                    <input type="text" placeholder="Hello">
                </form>
            </div>
        </v-card>
    </v-dialog>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false,
            }
        },
    }
</script>

<style scoped>
    .create-user-btn{
        top: 85vh;
        float: right;
        position: fixed;
    }

    form{
        padding: 15px;
    }
</style>