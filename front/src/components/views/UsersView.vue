<template>
  <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">class</th>
            <th class="text-left">Gender</th>
            <th class="text-left">Phone number</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.class }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.phone }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</template>

<script>
  export default {
    data() {
      return {
        desserts: [
          {
            name: "Vicheka",
            gender: "M",
            class: "WEB-2021 A",
            phone: '0123456789'
          },
          {
            name: "Sothang",
            gender: "M",
            class: "SNA-2021",
            phone: '0123456789'
          },
          {
            name: "Nimout",
            gender: "F",
            class: "WEB-2021 B",
            phone: '0123456789'
          },
          {
            name: "Srey On",
            gender: "F",
            class: "SNA-2021",
            phone: '0123456789'
          },
          {
            name: "Sopheak",
            gender: "F",
            class: "WEB-2021 B",
            phone: '0123456789'
          },
          {
            name: "Lyden",
            gender: "M",
            class: "WEB-2021 A",
            phone: '0123456789'
          },
          {
            name: "Thaly",
            gender: "F",
            class: "SNA-2021",
            phone: '0123456789'
          },
          {
            name: "Sothoun",
            gender: "M",
            class: "WEB-2021 B",
            phone: '0123456789'
          },
          {
            name: "Nisai",
            gender: "M",
            class: "SNA-2021",
            phone: '0123456789'
          },
          {
            name: "Siny",
            gender: "F",
            class: "WEB-2021 B",
            phone: '0123456789'
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>