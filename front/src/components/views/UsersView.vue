<template>
  <section>
      <br><br><br>
      <user-form></user-form>
      <user-card></user-card>
  </section>
</template>

<script>
  
    import UserForm from "../user/UserForm.vue";
    import Carduser from "../user/Carduser.vue";
    export default {
        components:{
            'user-card': Carduser,
            'user-form': UserForm
        },
        data(){
            return{

            }
        },
    }
</script>

<style>

</style>