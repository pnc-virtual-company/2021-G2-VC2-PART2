<template>
    <section>
        <per-card></per-card>
        <per-form></per-form> 
    </section>
        

</template>

<script>
    import PermissionForm from "../permission/PermissionForm.vue";
    import PermissionCard from "../permission/PermissionCard.vue"
    export default {
        components:{
            'per-card': PermissionCard,
            'per-form': PermissionForm
        }
    }
</script>

<style>

</style>