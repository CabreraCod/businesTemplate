<template>
<nav>
  <v-card>
  <v-layout>
     
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
       class="hidden-md-and-up"></v-app-bar-nav-icon>
       <v-avatar color="transparent">
        <v-img
          aspect-ratio="1/1"
          cover
          src="/icon-test.png"
        ></v-img>
    </v-avatar>
      <v-toolbar-title>Color esperanza</v-toolbar-title>
     
    <LayoutNavInlineMenu />
      
      <v-spacer></v-spacer>
     
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="top" temporary>
    <LayoutNavInlineMenu />      
    </v-navigation-drawer>   
  </v-layout>
  </v-card>
</nav>

</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: false,
    group: null,
   
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}

</script>
