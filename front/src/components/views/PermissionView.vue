<template>
  <section>
      <permission-form></permission-form>
      <permission-card></permission-card>
  </section>
</template>

<script>
    import permissionForm from "../permission/PermissionForm.vue";
    import permissionCard from "../permission/PermissionCard.vue";
    export default {
        components:{
            'permission-form': permissionForm,
            'permission-card': permissionCard
        }
    }
</script>

<style>

</style>