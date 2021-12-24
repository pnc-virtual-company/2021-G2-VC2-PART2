<template>
  <section>
      <student-form></student-form>
      <student-card></student-card>
  </section>
</template>

<script>
  import StudentForm from "../student/StudentForm.vue";
  import StudentCard from "../student/StudentCard.vue";
  export default {
    components:{
      'student-card': StudentCard,
      'student-form': StudentForm
    }
  }
</script>

<style scoped>

</style>