<template>
  <section>
    <disciple-form></disciple-form>
    <disciple-card></disciple-card>
  </section>  
</template>

<script>
  import DiscipleForm from '../disciple/DiscipleForm.vue';
  import DiscipleCard from '../disciple/DiscipleCard.vue';
  export default {
  components: { DiscipleForm, DiscipleCard },
    component: {
      'disciple-form': DiscipleForm,
      'disciple-card': DiscipleCard
    }
  }
</script>

<style>

</style>