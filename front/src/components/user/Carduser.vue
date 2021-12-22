<template>
    <v-container>
        <template>
            <v-card-title >
                    Users List
                    <v-spacer></v-spacer>
                    <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field> 
            </v-card-title>
            <v-card color="" green>
                <v-simple-table>
                    <template v-slot:default>
                        <thead class="blue" >
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Action</th>
                        </thead> 
                        <tbody>
                            <!-- <tr class="" v-for="(item, index) in userinfo" :key="index"> -->
                            <tr>
                                <td>Lyden</td>
                                <td>lyden@gmail.com</td>
                                <td>D@009%*en#li</td>
                                <td>Admin</td>
                                <td> 
                                    <v-icon mediem class="mr-2" @click="editItem(item)"> mdi-pencil</v-icon>
                                    <v-icon mediem @click="deleteItem(item)">mdi-delete</v-icon>   
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </template>
    </v-container>
</template>

<script>

    export default {
        
    }

</script>

<style scoped>
    .text-h5{
        color: white;
    }
    .btn-create{
        margin: 10px; 
    }
    v-radio{
        display: flex;
    }
    thead{
        height: 10vh;
        font-size: 18px;
    }

    thead th{
        color: #fff;
    }

    tbody > tr > td{
        margin-left: 10%;
    }
    
</style>