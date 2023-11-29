<template>
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
      <LayoutNavInlineMenu :items="items">
    </LayoutNavInlineMenu>
      
      <v-spacer></v-spacer>
     
      
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="top" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-main style="height: 500px">
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size
        screens.
       
      </v-card-text>
    </v-main>
  </v-layout>
</v-card>
</template>
<script lang="ts">

export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}

</script>
