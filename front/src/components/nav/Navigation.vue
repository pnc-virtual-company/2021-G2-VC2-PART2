<template>
  <v-list nav dense >
    <v-list-item-group active-class="deep-purple--text text--accent-4">

      <v-list-item-avatar 
        color="green"
      >
        <v-img
          class="elevation-6"
          alt=""
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Admin</v-list-item-title>
      </v-list-item-content>
      
      <v-list-item :to="{ path: '/users' }">
        <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Users </v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/students' }">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Students</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/permission' }">
        <v-list-item-icon>
          <v-icon>mdi-book-open-page-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Permission</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/disciples' }">
        <v-list-item-icon>
          <v-icon>mdi-folder-open</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Disciples</v-list-item-title>
      </v-list-item>
    </v-list-item-group>      
  </v-list>
</template>