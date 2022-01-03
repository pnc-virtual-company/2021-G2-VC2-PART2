<template>
    <div>
        <br>
        <br>
        <button @click="back">Back</button>
        <ul>
            <!-- <li v-for="student of studentInfo.permission" :key="student.id"> -->
            <li>
                {{studentInfo.first_name}}
            </li>
            <li>
                {{studentInfo.last_name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        emits:['back'],
        props:['studentInfo'],
        data: () => ({
            imgUrl: "http://127.0.0.1:8000/storage/images/",
            student_list: [],
            searchStudentname:'',
            studentID: null,
            studentInfo: '',
        }),
        methods: {
            back(){
                this.$emit('back', false);
            }
        },
        mounted() {
            console.log(this.studentInfo);
        },
    }
</script>

<style scoped>
    button{
        color: rgb(255, 6, 6);;
    }
</style>