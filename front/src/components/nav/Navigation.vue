<template>
  <ul>
    
      <v-list-item :to="{ path: '/user' }">
        <v-icon>mdi-account-circle</v-icon>
        <v-list-item-title>Users</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ path: '/studentcrudview' }">
        <v-icon>mdi-apps</v-icon>
        <v-list-item-title>Student</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ path: '/permission' }">
        <v-icon>mdi-login</v-icon>
        <v-list-item-title>permission</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ path: '/' }">
        <v-icon>mdi-login</v-icon>
        <v-list-item-title @click="Signout">Sign out</v-list-item-title>
      </v-list-item>
  </ul>
</template>

<script>

  export default {
    emits: ["userLogout"],
    data() {
      return {
        signout: false,
      }
    },
    methods: {
      Signout(){
        localStorage.clear();
        this.$emit('userLogout', this.signout);
        console.log("Signout");
      }
    },
  }

</script>

<style scoped>
  ul{
    display: flex;
  }
</style>