<template>
    <section>
        <permission-form></permission-form>
        <permission-card></permission-card>
    </section>
</template>

<script>
    import PermissionCard from '../permission/PermissionCard.vue';
    import PermissionFrom from '../permission/PermissionForm.vue';
    
    export default {
        components:{
           'permission-card': PermissionCard,
           'permission-form': PermissionFrom
        }
    }
</script>
